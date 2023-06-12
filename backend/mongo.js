require('dotenv').config()

const mongoose = require('mongoose')

const url = process.env.MONGO_URI
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)
// if (process.argv.length === 2) {
  // Person.find({}).then((result) => {
  //   console.log('phonebook:')
  //   result.forEach((person) => {
  //     console.log(`${person.name} ${person.number}`)
  //   })
  //   mongoose.connection.close()
  // })
// } else {

  // const person = new Person({
  //   name: 'arikallio',
  //   number: '02-1211111',
  // })

  // person.save().then(() => {
  //   console.log(`added ${person.name} number ${person.number} to phonebook`)
  //   mongoose.connection.close()
  // })
//}
