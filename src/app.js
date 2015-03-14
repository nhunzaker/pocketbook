import Microcosm from 'microcosm'

class App extends Microcosm {

  constructor(seed) {
    super(seed)

    this.addActions({
      user   : require('actions/user'),
      photos : require('actions/photos')
    })

    this.addStores({
      user   : require('stores/user'),
      photos : require('stores/photos')
    })
  }

}

export default App
