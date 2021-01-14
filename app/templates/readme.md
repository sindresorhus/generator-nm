# <%= repoName %><% if (codecov) { %> [![Coverage Status](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>/badge.svg?branch=main)](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>?branch=main)<% } %>

> <%= moduleDescription %>

## Install

```
$ npm install <%= moduleName %>
```

## Usage

```js
import <%= camelModuleName %> from '<%= moduleName %>';

<%= camelModuleName %>('unicorns');
//=> 'unicorns & rainbows'
```

## API

### <%= camelModuleName %>(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.<% if (cli) { %>

## CLI

```
$ npm install --global <%= moduleName %>
```

```
$ <%= repoName %> --help

  Usage
    <%= repoName %> [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ <%= repoName %>
    unicorns & rainbows
    $ <%= repoName %> ponies
    ponies & rainbows
```<% } %>
