const mongoose= require('mongoose')

mongoose.connect(process.env.mongodbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})