import Ink  from 'react-ink'
import Pure from 'Pure'
import cx   from 'classnames'

let baseClass = 'type-button relative pad-2 inline-block'

class Button extends Pure {

  render() {
    let { children, className, fill, color, element, pad, radius, shadow, ...other } = this.props

    let css = cx({
      [baseClass]          : true,
      [className]          : true,
      [`radius-${radius}`] : radius,
      [`fill-${fill}`]     : fill,
      [`color-${color}`]   : color,
      [`shadow-${shadow}`] : shadow,
    })

    return React.createElement(element, {
      className: css,
      ...other
    }, [(<Ink key="__ink__"/>), children ])
  }

}

Button.defaultProps = {
  className : '',
  element   : 'button',
  radius    : 2
}

export default Button
