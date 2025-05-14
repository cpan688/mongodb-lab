import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

// RETRIEVE ALL
MongoClient.connect(process.env.DB, (err, database) => {
    if (err) throw err
    console.log('Connected to database...')

    database
        .db('vectacorp')
        .collection('employees')
        .find({})
        .toArray((err, res) => {
            if (err) throw err
            console.log(res)
            database.close()
        })
})
