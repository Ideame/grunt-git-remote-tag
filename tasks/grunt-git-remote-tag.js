/*
 * grunt-git-remote-tag
 * https://github.com/Ideame/grunt-git-remote-tag
 *
 * Copyright (c) 2013 Ideame
 */
module.exports = function (grunt) {
    var util = require('util');

    grunt.registerMultiTask("gitRemoteTag", "Creates a tag in the provided repository folder and push it to an specific remote", function () {
        var done = this.async();
        var repoFolder = this.filesSrc[0];

        var options = this.options({
            remote: 'origin',
            message: this.options().tag,
            force: this.options().force,
        });

        grunt.util.async.series([
            function (callback) {
                grunt.log.writeln('Creating local tag \'%s\'', options.tag);
                grunt.util.spawn({ cmd: 'git', args: [ 'tag', '-a', options.tag, '-m', options.message ], opts: { cwd: repoFolder } }, callback);
            },
            function (callback) {
                grunt.log.writeln('Pushing tag \'%s\' to \'%s\' remote', options.tag, options.remote);
                var args = [ 'push', options.remote, '--tags' ];

                if (options.force) {
                    args.push('--force');
                }

                grunt.util.spawn({ cmd: 'git', args: args, opts: { cwd: repoFolder } }, callback);
            },
        ], done);
    });

};
