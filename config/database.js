const mongoose = require('mongoose')

const connectDB = async () => {

    try{
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex : true,
            useFindAndModify : false
        })

        console.log("connected mongodb...")
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB