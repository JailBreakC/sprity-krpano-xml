'use strict';

var fs = require('fs');
var should = require('chai').should();
var Handlebars = require('handlebars');
var prettydiff = require('prettydiff');
var ratio = 1;

Handlebars.registerHelper('escimage', function (img) {
  return img.replace(/['"\(\)\s]/g, function encodeCssUri (chr) {
    return '%' + chr.charCodeAt(0).toString(16);
  });
});

require('mocha');

var cssProc = require('../index');

var fixture = [{
  name: 'default',
  classname: 'icon',
  layout: {
    width: 520,
    height: 656,
    items: [{
      height: 136,
      width: 136,
      x: 0,
      y: 0,
      meta: {
        type: 'png',
        contents: fs.readFileSync('test/fixtures/png.png'),
        fileName: 'png.png',
        name: 'png',
        height: 128,
        width: 128
      }
    }, {
      height: 520,
      width: 520,
      x: 0,
      y: 136,
      meta: {
        type: 'jpg',
        contents: fs.readFileSync('test/fixtures/jpg.jpg'),
        fileName: 'jpg.jpg',
        name: 'jpg',
        height: 512,
        width: 512
      }
    }]
  },
  sprites: [{
    name: 'sprite',
    url: '../images/sprite.png',
    type: 'png',
    dpi: null,
    ratio: null,
    width: 520,
    height: 656
  }]
}];

describe('sprity-xml', function () {
  it('should be beautifyable', function () {
    cssProc.isBeautifyable({}).should.be.true;
  });
  it('should return xml as the extension', function () {
    cssProc.extension({}).should.equal('xml');
  });
  it('should return xml as expected', function (done) {
    cssProc.process(fixture, {}, Handlebars)
      .then(function (s) {
        console.log(s);
        var style = prettydiff.api({
          source: s,
          lang: 'xml',
          mode: 'beautify'
        })[0];
        console.log(style);
        fs.writeFileSync('test/expected/dist.xml', style, {mode: 438});
        style.should.equal(fs.readFileSync('test/expected/style.xml').toString());
        done();
      });
  });
});
