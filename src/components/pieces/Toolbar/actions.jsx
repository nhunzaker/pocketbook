import Pure  from 'react-immutable-render-mixin'
import React from 'react'

let ToolbarActions = React.createClass({
  mixins: [ Pure ],

  getDefaultProps() {
    return {
      element   : 'div',
      className : 'flex-grow align-right'
    }
  },

  render() {
    let { element, ...safe } = this.props

    return React.createElement(element, safe)
  }
})

export default ToolbarActions
