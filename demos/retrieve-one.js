import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

// RETRIEVE ONE
// MongoClient.connect(process.env.DB, (err, database) => {
//     if (err) throw err
//     console.log('Connected to database...')

//     database
//         .db('vectacorp')
//         .collection('employees')
//         .findOne({}, (err, res) => {
//             if (err) throw error
//             console.log(res)
//             database.close()
//         })
// })

// QUERY
MongoClient.connect(process.env.DB, (err, database) => {
    if (err) throw err
    console.log('Connected to database...')

    let query = { name: 'Jane Johnson' }
    
    database
        .db('vectacorp')
        .collection('employees')
        .find(query)
        .toArray((err, res) => {
            if (err) throw error
            console.log(res)
            database.close()
        })
})