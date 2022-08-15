// const
const mmAttrTrigger = 'data-ff-trigger'
const mmAttrContent = 'data-ff-content'
const mmAttrWrapper = 'data-ff-wrapper'

// events
$('['+mmAttrTrigger+']').click(function () {
  let that = $(this)
  let id = that.parents().find($('['+mmAttrWrapper+']')).attr(mmAttrWrapper)

  ffToggle(that, id)
})

// functions
function ffToggle (elem, index) {

  if (elem.hasClass('is-unfolded')) {

    ffSetInactive(elem)

  } else {

    if (index) {
      ffDisableByIndex(index)
      ffSetActive(elem)
    } else {
      ffSetActive(elem)
    }

  }
}
function ffSetInactive (elem) {
  elem
    .removeClass('is-unfolded')
    .next('['+mmAttrContent+']').removeClass('is-unfolded').slideUp()
}
function ffSetActive (elem) {
  elem
    .addClass('is-unfolded')
    .next('['+mmAttrContent+']').addClass('is-unfolded').slideDown()
}
function ffDisableByIndex (index) {
  $('['+mmAttrWrapper+'='+index+']').find('['+mmAttrTrigger+'], ['+mmAttrContent+']').removeClass('is-unfolded')
  $('['+mmAttrWrapper+'='+index+']').find('['+mmAttrContent+']').slideUp()
}
export function ffStart () {
  $('['+mmAttrContent+']').each(function () {
    let that = $(this)
    if (!that.hasClass('is-unfolded')) {
      that.fadeOut(0)
    }
  })
}
