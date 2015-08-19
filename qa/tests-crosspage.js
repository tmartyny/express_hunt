var Browser = require('zombie'),
  assert = require('chai').assert;

var browser;

suite('Cross Page Tests', function(){
  setup(function(){
    browser = new Browser();
  });
  // test('Starting the Scavenger Hunt' + 
  //   ' should populate the referrer field', function(done){
  //     var referrer = 'http://andre:3000';
  //     browser.visit(referrer, function(){
  //         console.log("referrer: " + browser.field('referrer'));
  //       browser.clickLink('.js_beginHunt', function(){
  //         console.log('click check');
          
  //         assert(browser.field('referrer').value === referrer);
  //         done();
  //       });
  //     });
  //   });
});