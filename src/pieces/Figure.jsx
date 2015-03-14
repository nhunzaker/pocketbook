import cx from 'classnames'

const Figure = React.createClass({

  getDefaultProps() {
    return {
      className : 'figure relative',
      delay     : 0
    }
  },

  getImage(src, width) {
    return (<img src={ src } className="shadow-1" />)
  },

  getClassName() {
    const { avatar, className, hero, small } = this.props

    return cx({
      [className] : className,
      'is-avatar' : avatar,
      'is-hero'   : hero,
      'is-small'  : small
    })
  },

  render() {
    const { className, delay, src, width, ...other } = this.props

    return (
      <figure className={ this.getClassName() } { ...other }>
        { src ? this.getImage(src, width) : null }
      </figure>
    )
  }

})

export default Figure
