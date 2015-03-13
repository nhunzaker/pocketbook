import Pure     from 'Pure'
import Button   from 'pieces/Button'
import Icon     from 'pieces/Icon'
import readFile from 'readFile'

class Uploader extends Pure {

  getConfirmation() {
    return (
      <Button className="margin-1-left" htmlFor="camera" fill="accent-fallback" shadow="1" onClick={ this.props.onConfirm } pad="1">
        <Icon type="done" />
      </Button>
    )
  }

  render() {
    let { src } = this.props

    return (
      <div className="uploader margin-2-top">
        <input className="hide-visually"
               id="camera"
               type="file"
               onChange={ this._onChange.bind(this) }
               accept="image/*;capture=camera" />

        <Button element="label" htmlFor="camera" fill="accent" color="white" shadow="1">
          { src ? 'I found something new' : 'Snap something you love' }
        </Button>

        { src && this.getConfirmation() }
      </div>
    )
  }

  _onChange(e) {
    readFile(e.target.files[0], photo => this.props.onUpload({ photo }))
  }

}

Uploader.propTypes = {
  onUpload  : React.PropTypes.func.isRequired,
  onConfirm : React.PropTypes.func.isRequired
}

export default Uploader
