import Pure       from 'Pure'
import Router     from 'react-router'
import Microscope from 'microcosm/microscope'

class Main extends Pure {
  render() {
    return (
      <Microscope className="flex flex-grow" flux={ this.props.flux } watch={[ 'user' ]}>
        <Router.RouteHandler />
      </Microscope>
    )
  }
}

export default Main
