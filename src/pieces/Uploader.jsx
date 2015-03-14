import Button   from './Button'
import Icon     from './Icon'
import readFile from 'readFile'

let Uploader = React.createClass({

  propTypes: {
    onUpload  : React.PropTypes.func.isRequired,
    onConfirm : React.PropTypes.func.isRequired
  },

  getConfirmation() {
    return (
      <Button className="margin-1-left" htmlFor="camera" fill="accent-fallback" shadow="1" onClick={ this.props.onConfirm } pad="1">
        <Icon type="done" />
      </Button>
    )
  },

  render() {
    let { src } = this.props

    return (
      <div className="uploader margin-2-top">
        <input className="hide-visually"
               id="camera"
               type="file"
               onChange={ this._onChange }
               accept="image/*;capture=camera" />

        <Button element="label" htmlFor="camera" fill="accent" color="white" shadow="1">
          { src ? 'I changed my mind' : 'Take a photo to begin' }
        </Button>

        { src && this.getConfirmation() }
      </div>
    )
  },

  _onChange(e) {
    readFile(e.target.files[0], this.props.onUpload)
  }

})

export default Uploader
