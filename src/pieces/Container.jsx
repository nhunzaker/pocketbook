import Pure from 'Pure'
import cx   from 'classnames'

class Container extends Pure {

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
}

Container.propTypes = {
  className: React.PropTypes.string
}

Container.defaultProps = {
  element: 'div',
  className: '',
  fill: false
}

export default Container
