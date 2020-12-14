# dotio

**DotIO config manager**

Why use DotIO?

- Fast
- Manage all configs in **one** file (per project)
- Easy to use

## Install for use on a module

Firstly, install the module, of course!

Next, create a `.iom.yml`  (stands for **iom**anager)

Inside the `.iom.yml` add the following config

```yml
module: true
config: 
  - myConfigValue:
    expect: string
    optional: false # if optional is not specified, it defaults to false
  - myOtherValue:
    expect: '*' # doesn't matter whats inputted
    optional: true # optional
    defaultTo: 'wow default!!!!' # only happens if it config is optional & nothing is inputted
```

Next step, go into your main code and import the module

```js
const { Module } = require('dotio');
// or: 
import { Module } from 'dotio';

new Module('./path-to-iom.yml');
```

Once done, you're all set, get config like so:

```js
const { Get } = require('dotio');
// or:
import { Get } from 'dotio';

const myOtherValue = Get('myConfigValue');
```

## Using it as a module-user

Step 1: Make sure the module you are using has dotio as a dependency & a `iom.yml`

Step 2: Create a``config.io`

Step 3: Write your config

*This example uses how we set it up earlier with the module.*

```io
{global:cjays} = whatever this is
{myConfigValue} = Hello, you are using io with {cjays}

{myOtherValue} = [{cjays}, {myConfigValue}, hello]
```

Using this mechanic, the owner of the modules can't get global variables. However, you can use them. If someone got myConfigValue they'd see `'Hello, you are using io with whatever this is'` and myOtherValue would be `['whatever this is', 'Hello, you are using io with whatever this is', 'hello']`

## Errors

Errors are thrown for everything, invalid types, not specifying required things and much more

## In depth: Global variables

You can specify if you want the module to be able to see your global variables by adding at the top:

```io
{GlobalVarsSeen} = true
...config
```

## Comments

You can add comments like so:

```io
...config
/# Hi, this is a comment!
/# This is another comments
```
Note that comments can _**only**_ go on new lines!