import Pure      from 'Pure'
import Figure    from './fragments/Figure'
import Uploader  from './fragments/Uploader'
import cx        from 'classnames'

import './style'

class Login extends Pure {

  constructor() {
    this.state = {
      exiting: false
    }
  }

  getClassName() {
    return cx('flex-grow align-center fill-primary', cx({
      'login-exit': this.state.exiting
    }))
  }

  render() {
    let { flux, user } = this.props
    let src = user.get('photo')

    return (
      <main className={ this.getClassName() }>
        <Figure src={ src } />
        <Uploader src={ src } onUpload={ flux.actions.user.set } onConfirm={ this.onConfirm.bind(this) }/>
      </main>
    )
  }

  onConfirm() {
    this.setState({ exiting: true })
  }

}

export default Login
