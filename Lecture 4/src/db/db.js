const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(
            "mongodb://abhinav:fPbLXMlLANSHVou8@ac-8shhg3w-shard-00-00.4nawyqj.mongodb.net:27017,ac-8shhg3w-shard-00-01.4nawyqj.mongodb.net:27017,ac-8shhg3w-shard-00-02.4nawyqj.mongodb.net:27017/halley?ssl=true&replicaSet=atlas-mfdcvb-shard-0&authSource=admin&appName=Cluster0"
            
        )

        console.log("server connected to database")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB



