import Pure from 'Pure'
import cx   from 'classnames'

import './style'

class Show extends Pure {

  constructor() {
    this.state = {
      exiting: false
    }
  }

  getClassName() {
    return cx('flex-grow align-center fill-primary', cx({
      'show-exit': this.state.exiting
    }))
  }

  render() {
    let { flux } = this.props

    return (
      <main className={ this.getClassName() }>
        Show me something neat
      </main>
    )
  }

}

export default Show
