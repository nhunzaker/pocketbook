import cx from 'classnames'

let Container = React.createClass({

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      element: 'div',
      className: '',
      fill: false
    }
  },

  render() {
    let { bottom, children, className, element, fill, color, top, ...rest } = this.props

    let css = cx('container', className, cx({
      [`fill-${ fill }`] : fill,
      [`color-${ color }`] : color,
      [`pad-${ top }-top`] : top,
      [`pad-${ bottom }-bottom`] : bottom
    }))

    return React.createElement(element, {
      className: css,
      ...rest
    }, (<div className="container-inner">{ children }</div>))
  }
})

export default Container
