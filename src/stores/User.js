import Store     from 'microcosm/store'
import Immutable from 'immutable'
import MD5       from 'MD5'

class User extends Store {

  getInitialState() {
    return Immutable.Map()
  }

  register({ user }) {
    return {
      [user.login]: this.login
    }
  }

  login(photo) {
    let id = MD5(photo)
    this.state = this.state.merge({ id, photo })
  }

}

export default User
