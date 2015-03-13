import Microcosm from 'microcosm'

class App extends Microcosm {

  constructor() {
    super()

    this.addActions({
      user: require('actions/user')
    })

    this.addStores({
      user: require('stores/user')
    })
  }

}

export default App
