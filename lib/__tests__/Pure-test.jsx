import Pure from '../Pure'

describe('Pure', function() {

  it ('does not render twice with the same state', function() {
    let calls = 0

    class Test extends Pure {
      constructor() {
        this.state = { foo: 'bar' }
      }

      componentDidMount() {
        this.setState({ foo: 'bar' })
      }

      render() {
        calls += 1
        return (<p>Fizz</p>)
      }
    }

    let comp = React.addons.TestUtils.renderIntoDocument(<Test />)

    calls.should.equal(1)
  })
})
