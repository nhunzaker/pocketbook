import Button   from './Button'
import Icon     from './Icon'
import readFile from 'readFile'

let FabUploader = React.createClass({

  propTypes: {
    onUpload : React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      className: ''
    }
  },

  render() {
    let { className, src } = this.props

    return (
      <div className="fab">
        <input className="hide-visually"
               id="upload_photo"
               type="file"
               onChange={ this._onChange }
               accept="image/*;capture=camera" />

        <Button element="label" htmlFor="upload_photo" radius="circle" fill="accent" color="white" shadow="2">
          <Icon type="add" />
        </Button>
      </div>
    )
  },

  _onChange(e) {
    readFile(e.target.files[0], this.props.onUpload)
  }

})

export default FabUploader
