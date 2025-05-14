import { MongoClient, ObjectId } from 'mongodb'
import {} from 'dotenv/config'

// DELETE DOCUMENT
MongoClient.connect(process.env.DB, (err, database) => {
    if (err) throw err
    console.log('Connected to database')

    // let query = { name: 'Cody Pendant' }
    let query = { _id: ObjectId('630682da225f2a5df3a32497') }

    database
        .db('vectacorp')
        .collection('employees')
        .deleteOne(query, (err, res) => {
            if (err) throw err
            console.log('1 document deleted.')
            database.close()
        })
})