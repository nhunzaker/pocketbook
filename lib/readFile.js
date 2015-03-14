export default (file, callback) => {
  var reader = new FileReader()

  reader.onload  = e => callback(e.target.result)
  reader.onerror = e => console.error(e)

  reader.readAsDataURL(file);
}
