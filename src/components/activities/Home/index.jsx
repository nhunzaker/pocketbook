import Container   from 'pieces/Container'
import Figure      from 'pieces/Figure'
import Icon        from 'pieces/Icon'
import Toolbar     from 'pieces/Toolbar'
import Router      from 'react-router'
import Gallery     from 'pieces/Gallery'
import FabUploader from 'pieces/FabUploader'
import cx          from 'classnames'
import { Link }    from 'react-router'

import './style'

const EXIT_TIME = 450
const baseClass = 'flex-grow fill-primary home'

const Home = React.createClass({
  mixins: [ Router.Navigation ],

  statics: {
    willTransitionFrom(transition, component, callback) {
      component.setState({ exiting: true })
      setTimeout(callback, EXIT_TIME)
    }
  },

  getInitialState() {
    return {
      exiting : false
    }
  },

  getClassName() {
    return cx({
      [baseClass] : true,
      'home-exit' : this.state.exiting
    })
  },

  render() {
    let { user, photos, flux } = this.props

    let photo = user.get('photo')

    return (
      <main className={ this.getClassName() }>
        <Toolbar className="is-absolute color-white">
          <Link to="login"><Icon type="arrow-back" /></Link>
        </Toolbar>

        <Figure src={ photo } />

        <Container>
          <FabUploader onUpload={ this._onUpload }  />

          <div className="home-body margin-10-right">
            <Gallery photos={ photos } />
          </div>
        </Container>
      </main>
    )
  },

  _onUpload(upload) {
    this.props.flux.actions.photos.add(upload)
  }

})

export default Home
