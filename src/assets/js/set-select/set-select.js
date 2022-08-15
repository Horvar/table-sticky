// const
const ssAttrWrapper = 'data-ss-wrapper'
const ssAttrOutput = 'data-ss-output'
const ssAttrValue = 'data-ss-value'
const ssAttrButton = 'data-ss-button'
const ssAttrOption = 'data-ss-option'

// events
$('['+ssAttrButton+']').click(function () {
  let that = $(this)

  that.parents($('['+ssAttrWrapper+']')).toggleClass('is-active')
})

$('['+ssAttrOption+']').click(function () {
  let that = $(this)
  let value = that.html()
  let currentWrapper = that.parents($('['+ssAttrWrapper+']'))

  currentWrapper.find($('['+ssAttrValue+']')).attr('value', value)
  currentWrapper.find($('['+ssAttrOutput+']')).html(value)
  currentWrapper.removeClass('is-active')
})
