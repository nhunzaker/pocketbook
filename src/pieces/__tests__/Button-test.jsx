import Button from '../Button'

describe('Button', function () {

  let { TestUtils:Test } = React.addons

  it ('can additional classNames', function() {
    let button = Test.renderIntoDocument(<Button className="fiz" />)

    React.findDOMNode(button).className.should.match(/fiz/)
  })

  it ('can add a fill value', function() {
    let button = Test.renderIntoDocument(<Button fill="white" />)

    React.findDOMNode(button).className.should.match(/fill\-white/)
  })

  it ('can add a color value', function() {
    let button = Test.renderIntoDocument(<Button color="white" />)

    React.findDOMNode(button).className.should.match(/color\-white/)
  })

  it ('can add a shadow value', function() {
    let button = Test.renderIntoDocument(<Button shadow="1" />)

    React.findDOMNode(button).className.should.match(/shadow\-1/)
  })

})
