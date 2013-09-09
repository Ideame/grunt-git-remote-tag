grunt-git-remote-tag
===========================

> Creates a tag in the provided repository folder and push it to an specific remote.

## Getting Started
_If you haven't used [grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](https://github.com/cowboy/grunt/blob/master/docs/getting_started.md) guide._

From the same directory as your project's Gruntfile and package.json, install this plugin with the following command:

```bash
npm install grunt-git-remote-tag
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-git-remote-tag');
```

## Overview

Inside your `Gruntfile.js` file add a section named `gitRemoteTag`. This section specifies the
tag's name a message an the remote where to push the tag. You must also provide a **src**
indicating the location of your local git repository.

## Config Example

Example to tag a new successful version based on the latest build number and environment:

```javascript
gitRemoteTag: {
    release: {
        options: {
            tag: util.format('v.%s-%s', process.env.BUILD_NUMBER, process.env.ENVIRONMENT),
            remote: 'origin' // optional: default value is 'origin',
            message: 'It worked!' // optional: if not provided it will use the tag as the message
        },
        src: './'
    }
}
```

## How it works

It will step into your git repository folder specified in **src** option, create a local an unsigned
tag using the **message** options and finally push it to the specified **remote** option as depicted below:

```bash
git tag -a 'v.234-staging' -m 'It worked!'
git push origin --tags
```

License
-------

Copyright (c) 2013 Juan Pablo Garcia
Licensed under the MIT license.
