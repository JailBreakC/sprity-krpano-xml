# sprity-krpano-xml

<!-- [![NPM version](https://badge.fury.io/js/sprity-krpano-xml.svg)](http://badge.fury.io/js/sprity-krpano-xml) [![Build Status](https://travis-ci.org/sprity/sprity-krpano-xml.svg?branch=master)](https://travis-ci.org/sprity/sprity-css) [![Dependencies](https://david-dm.org/sprity/sprity-css.svg)](https://david-dm.org/sprity/sprity-css) -->

> A krpano-xml style processor for [sprity](https://npmjs.org/package/sprity)

## Requirements

- [sprity](https://npmjs.org/package/sprity) version >= 1.0

## Install

Install with [npm](https://npmjs.org/package/sprity-krpano-xml)

```
npm install sprity sprity-krpano-xml --save
```

If you want to use `sprity-krpano-xml` with the command line interface of `sprity` install it globally.

```
npm install sprity sprity-krpano-xml -g
```

## Usage

On commandline:

```sh
sprity out/ src/*.png -s style.xml -p xml
```

In JavaScript:

```js
var sprite = require('sprity');
sprite.create({
  ...
  style: 'style.xml',
  processor: 'xml'
  cssPath: './images/dist/',
  ...
}, function () {
  console.log('done');
});
```

#### [krpano-xml style](http://krpano.com/docu/xml/#style) usage example

```xml
<include url="sprite.xml" /> // the generated xml file (sprite.xml)

// camera icon (camera.png in src directory)

<layer 
	name="the-camera-layer"
	style="icon-camera"
	/>

// cart icon (cart.png in src directory)
<layer 
	name="the-cart-layer"
	style="icon-cart"
	/>

//load style in action
<action>
	layer[the-camera-layer].loadstyle(icon-cart);
</action>

```


## More

See [sprity](https://npmjs.org/package/sprity) documentation

---
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sprity/sprity?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)