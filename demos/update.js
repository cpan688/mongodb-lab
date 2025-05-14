import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

// UPDATE DOCUMENT
MongoClient.connect(process.env.DB, (err, database) => {
    if (err) throw err
    console.log('Connected to database...')

    let query = { name: 'Konnor Welch' }
    let queryUpdate = { $set: { name: 'Zak Ruvalcaba', email: 'zak@vectacorp.com' } }

    database
        .db('vectacorp')
        .collection('employees')
        .updateOne(query, queryUpdate, (err, res) => {
            if (err) throw err
            console.log('1 document updated')
            database.close()
        })
})