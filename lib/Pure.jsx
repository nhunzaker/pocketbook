import React from 'react'
import Mixin from 'react-immutable-render-mixin'

class Pure extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return Mixin.shouldComponentUpdate.call(this, nextProps, nextState)
  }

}

export default Pure
