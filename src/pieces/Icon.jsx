let Icon = React.createClass({

  statics: {
    prefix: 'icon-'
  },

  getDefaultProps() {
    return {
      height : 24,
      width  : 24
    }
  },

  getSymbol() {
    let { type, width, height } = this.props

    return {
      __html: `<use xlink:href="#${ Icon.prefix + type }" width="${ width }" height="${ height }"></use>`
    }
  },

  render() {
    return (
      <svg className="icon" { ...this.props }>
        <g dangerouslySetInnerHTML={ this.getSymbol() } />
      </svg>
    )
  }
})

export default Icon
