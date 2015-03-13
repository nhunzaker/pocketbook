import './style'
import Pure from 'Pure'

class Figure extends Pure {

  getImage(src, width) {
    return <img className="shadow-1 radius-circle margin-2-top" src={ src } />
  }

  render() {
    let { src, width, ...other } = this.props

    return (
      <figure { ...other }>
        { src ? this.getImage(src, width) : null }
      </figure>
    )
  }

}

Figure.defaultProps = {
  className: 'figure'
}

export default Figure
