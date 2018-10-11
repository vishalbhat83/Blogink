const mongoose = require('mongoose')

const Post = require('./database/models/Post')
mongoose.connect('mongodb://localhost/blogpostnodejstest')

Post.find({}, (error, post) => {
  console.log(error, post)
})
/*Post.findById("5bb8fee397e360698858fd91", (error, post) => {
  console.log(error, post)
})*/
/*Post.findByIdAndUpdate("5bb8fee397e360698858fd91",{
  title: 'My second blog post'
}, (error, post) => {
  console.log(error,post)

})*/

/*Post.create({
  title: 'My second blog',
  description: ' Second Blog Post description',
  content: 'Second Lorem ipsum content.'
}, (error, post) => {
  console.log(error, post)
})*/
