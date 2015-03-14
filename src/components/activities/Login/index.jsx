import Figure    from 'pieces/Figure'
import Router    from 'react-router'
import Uploader  from 'pieces/Uploader'
import cx        from 'classnames'

import './style'

const EXIT_TIME = 450
const baseClass = 'flex-grow align-center fill-primary login'

const Login = React.createClass({
  mixins: [ Router.Navigation ],

  statics: {
    willTransitionFrom(transition, component, callback) {
      component.setState({ exiting: true })
      setTimeout(callback, EXIT_TIME)
    }
  },

  getInitialState() {
    return {
      exiting: false
    }
  },

  getClassName() {
    return cx({
      [baseClass]  : true,
      'login-exit' : this.state.exiting
    })
  },

  getFigure() {
    let src = this.props.user.get('photo')

    return src ? (<Figure src={ src } avatar={ !this.state.exiting } />) : null
  },

  render() {
    let { flux, user } = this.props
    let src = user.get('photo')

    return (
      <main className={ this.getClassName() }>
        { this.getFigure() }
        <Uploader src={ src } onUpload={ flux.actions.user.login } onConfirm={ this.onConfirm } />
      </main>
    )
  },

  onConfirm() {
    this.transitionTo('home')
  }
})

export default Login
