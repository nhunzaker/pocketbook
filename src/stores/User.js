import Store   from 'microcosm/store'
import { Map } from 'immutable'

class User extends Store {

  getInitialState() {
    return Map({ photo: null })
  }

  register({ user }) {
    return {
      [user.set]: this.set
    }
  }

  set(params) {
    this.state = this.state.merge(params)
  }

}

export default User
