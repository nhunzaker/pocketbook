import Store     from 'microcosm/store'
import Immutable from 'immutable'
import MD5       from 'MD5'

class Photo extends Store {

  getInitialState() {
    return Immutable.Map()
  }

  register({ photos }) {
    return {
      [photos.add]: this.add
    }
  }

  add(photo) {
    let id     = MD5(photo)
    let record = Immutable.Map({ photo, timestamp : Date.now() })

    this.state = this.state.set(id, record)
  }

}

export default Photo
