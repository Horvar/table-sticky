import $ from 'jquery'
global.jQuery = $
global.$ = $

$(document).ready(function () {
  // drag and drop

  const ele = document.querySelector('[data-draggable]');
  ele.style.cursor = 'grab';

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';

    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

// Attach the handler
  ele.addEventListener('mousedown', mouseDownHandler);

  // sticky

  setPseudoSticky()
  $(window).scroll(function () {
    setPseudoSticky()
  })

  function setPseudoSticky() {
    $('[data-sticky-wrapper]').each(function () {
      let wrapper = $(this)
      let content = wrapper.find($('[data-sticky-content]'))

      let scrollTop = $(window).scrollTop()

      let wrapperOffset = wrapper.offset().top
      let contentOffset = content.offset().top
      let wrapperH = wrapper.height()
      let contentH = content.height()

      let offsetTop = 0

      let position

      if ((scrollTop > wrapperOffset - offsetTop)) {
        position = scrollTop - wrapperOffset + offsetTop
      } else {
        position = 0
      }
      if (position > ((wrapperH - contentH))) {
        position = (wrapperH - contentH)
      }

      content.css({
        'transform': 'translateY('+position+'px)'
      })
    })
  }

})
