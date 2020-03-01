jQuery AnimateCSS Plugin <sup>1.0.0</sup>
-------
jQuery plugin for using Animate.css with jQuery

## Install
```sh
# NPM
npm i @wahawaher/jquery-animate-css
```
## Include
```html
<!-- Animate.css Lib -->
<link rel="stylesheet" href="./node_modules/animate.css/animate.min.css">
<!-- jQuery -->
<script src="./node_modules/jquery/dist/jquery.min.js"></script>
<!-- jQuery AnimateCSS Plugin -->
<script src="./node_modules/@wahawaher/jquery-animate-css/jquery.animate.css.min.js"></script>
```
## Usage
### Override default options (not necessary)
Full list of options with default values below
```javascript
$.fn.animateCSS.defaults = $.extend(true, {}, $.fn.animateCSS.defaults, {
  duration: 750,
  ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  clear: true
});
```
### Animate!
```javascript
// Name and default options
$('div').animateCSS('fadeInLeft');

// Name and duration
$('div').animateCSS('fadeInRight', 1500);

// Name, duration and "onAnimationEnds" callback
$('div').animateCSS('zoomIn', 1200, function(options) {
  // Animation ends...
});

// Name and other options
$('div').animateCSS('zoomOut', {
  delay: 0, // delay, ms
  duration: 1000, // duration, ms
  ease: '', // animation timing function
  class: 'animated', // main animation class
  clear: false, // cleaning classes after the animation ends
  
  // before animation
  start: function(options) {
    // this - HTML element
  },
  // animation completed
  complete: function(options) {
    // this - HTML element
  }
});
```
## License (MIT)
Copyright (c) 2020 Sergey Kravchenko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.