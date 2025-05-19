import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

// CONNECT TO DATABASE
MongoClient.connect(process.env.DB, (err, database) => {
    if (err) throw err
    console.log('Connected to database...')

    let employee = {
        name: 'Leticia Wedge',
        extension: 1120,
        email: 'leticia@vectacorp.com',
        title: 'Quality Assurance', 
        dateHired: Date.now(),
        currentlyEmployed: true
    }

    database
        .db('vectacorp')
        .collection('employees')
        .insertOne(employee, (err, res) => {
            if (err) throw err
            console.log('1 document inserted.')
            database.close()
        })
})