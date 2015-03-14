import { DefaultRoute, Route } from 'react-router'

export default (
  <Route name="login" path="/" handler={ require('./Main') }>
    <DefaultRoute handler={ require('./activities/Login') } />
    <Route name="home" path="/home" handler={ require('./activities/Home') } />
  </Route>
)
