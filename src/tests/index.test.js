import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('The first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Test for DOM elements in index.html', () => {
  it('should say Shahid', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Shahid!!!");
      done(); //this callback function is required when making an asynchronous call, otherwise the tests will pass always even when they shouldn't.
      window.close();
    });
  });
});

