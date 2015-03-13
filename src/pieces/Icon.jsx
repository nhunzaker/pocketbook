import Pure from 'Pure'

class Icon extends Pure {

  getSymbol() {
    let { type, width, height } = this.props

    return {
      __html: `<use xlink:href="#${ Icon.prefix + type }" width="${ width }" height="${ height }"></use>`
    }
  }

  render() {
    return (
      <svg className="icon" { ...this.props }>
        <g dangerouslySetInnerHTML={ this.getSymbol() } />
      </svg>
    )
  }
}

Icon.prefix = 'icon-'

Icon.defaultProps = {
  height : 24,
  width  : 24
}

export default Icon
