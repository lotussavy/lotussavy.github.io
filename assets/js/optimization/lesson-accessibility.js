/* Make overflowed code examples available to keyboard readers. */
(function () {
  'use strict';
  function prepareExamples() {
    document.querySelectorAll('.ol-lesson-body pre').forEach(function (example) {
      example.tabIndex = 0;
      example.setAttribute('role', 'region');
      example.setAttribute('aria-label', 'Code example; use arrow keys to scroll horizontally');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', prepareExamples);
  } else {
    prepareExamples();
  }
}());
