import React  from 'react'
import Router from 'react-router'

let Main = React.createClass({

  propTypes: {
    flux: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return this.getState()
  },

  getState() {
    let { user, photos } = this.props.flux.stores

    return { user: user.state, photos: photos.state }
  },

  updateState() {
    this.setState(this.getState())
  },

  componentDidMount() {
    this.props.flux.listen(this.updateState)
  },

  render() {
    return (
      <main className="flex flex-grow">
        <Router.RouteHandler flux={ this.props.flux } { ...this.state } />
      </main>
    )
  }
})

export default Main
