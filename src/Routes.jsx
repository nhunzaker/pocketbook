import { DefaultRoute, Route } from 'react-router'

export default (
  <Route name="home" path="/" handler={ require('./Main') }>
    <DefaultRoute handler={ require('./activities/Login') } />
  </Route>
)
