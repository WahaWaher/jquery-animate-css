/**
 * jQuery.animateCSS
 * Version: 1.0.0
 * Repo: https://github.com/WahaWaher/jquery.animate-css
 * Author: Sergey Kravchenko
 * Contacts: wahawaher@gmail.com
 * License: MIT
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function(root, jQuery) {
      if (jQuery === undefined) {
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        } else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function($) {
  var animationEnd =
    'animationend mozAnimationEnd MSAnimationEnd oanimationend webkitAnimationEnd';

  // Animation function
  var animate = function(elem, animation, options) {
    var $elem = $(elem);

    $elem
      .addClass(options.class + ' ' + animation)
      .css('animation-duration', options.duration + 'ms');

    if (options.ease) $elem.css('animation-timing-function', options.ease);

    function onAnimationEnd() {
      if (options.clear) {
        $elem.removeClass(options.class + ' ' + animation);
      }
      $elem.off(animationEnd, onAnimationEnd);
      options.complete.call(elem, options);
    }

    $elem.on(animationEnd, onAnimationEnd);
  };

  // Animation method
  $.fn.animateCSS = function(animation) {
    if (!animation) return this;

    var arg = arguments;
    var options = {};

    if (typeof arg[1] === 'object') {
      options = arg[1];
    } else if (typeof arg[1] === 'function') {
      options.complete = arg[1];
    } else if (typeof arg[1] === 'number') {
      options.duration = arg[1];
      if (typeof arg[2] === 'function') options.complete = arguments[2];
    }

    // Merge options
    options = $.extend(true, {}, $.fn.animateCSS.defaults, options);

    // Animate each element
    $(this).each(function() {
      var elem = this;

      options.start.call(elem, options);

      if (options.delay <= 0) {
        animate(elem, animation, options);
      } else {
        setTimeout(function() {
          animate(elem, animation, options);
        }, options.delay);
      }
    });

    return this;
  };

  // Default options
  $.fn.animateCSS.defaults = {
    delay: 0, // delay, ms
    duration: 1000, // duration, ms
    ease: '', // animation timing function
    class: 'animated', // main animation class
    clear: false, // cleaning classes after the animation ends
    start: $.noop, // animation start callback
    complete: $.noop // animation end callback
  };
});
