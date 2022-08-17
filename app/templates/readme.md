# <%= repoName %><% if (codecov) { %> [![Coverage Status](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>/badge.svg?branch=main)](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>?branch=main)<% } %>

> <%= moduleDescription %>

## Install

```sh
npm install <%= moduleName %>
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

##### postfix

Type: `string`\
Default: `'rainbows'`

Lorem ipsum.<% if (cli) { %>

## CLI

```sh
npm install --global <%= moduleName %>
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
