import Actions from './actions'
import Pure    from 'react-immutable-render-mixin'
import React   from 'react'
import cx      from 'classnames'

let Toolbar = React.createClass({
  mixins: [ Pure ],

  statics: { Actions },

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      className: '',
      fill: false
    }
  },

  render() {
    let { absolute, className, fill } = this.props

    let css = cx('toolbar', className, cx({
      [`fill-${ fill }`]: fill
    }))

    return (
      <header className={ css }>
        { this.props.children }
      </header>
    )
  }
})

export default Toolbar
