import 'style/app'

import App    from './app'
import Router from 'react-router'
import Routes from 'Routes'

let el  = document.getElementById('app')
let app = new App()

Router.run(Routes, Router.HistoryLocation, (Handler, config) => {
  React.render(<Handler flux={ app } { ...config }/>, el)
})
