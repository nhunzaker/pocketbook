import Router     from 'react-router'
import Microscope from 'microcosm/microscope'

let Main = React.createClass({
  render() {
    return (
      <Microscope className="flex flex-grow"
                  flux={ this.props.flux }
                  watch={[ 'user', 'photos' ]}>
        <Router.RouteHandler />
      </Microscope>
    )
  }
})

export default Main
