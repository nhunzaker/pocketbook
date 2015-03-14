import Figure     from 'pieces/Figure'
import prettydate from 'pretty-date'

const Gallery = React.createClass({

  getDefaultProps() {
    return {
      photos: []
    }
  },

  getFigure(record, key) {
    return (
      <li key={ key } className="ruled-bottom pad-2-left pad-2-right flex flex-center">
        <Figure src={ record.get('photo') } avatar small />
        <p className="pad-2-left">
          Uploaded <b>{ prettydate.format(new Date(record.get('timestamp'))) }</b>
        </p>
      </li>
    )
  },

  render() {
    let { photos } = this.props

    return (
      <ul className={`gallery pull-${ photos.size > 1 ? 10 : 5 } fill-white radius-2 shadow-1`}>
        { photos.map(this.getFigure).toArray() }
      </ul>
    )
  }

})

export default Gallery
