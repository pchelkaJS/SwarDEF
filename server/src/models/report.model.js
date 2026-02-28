import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/swarDEF")
  .then(() => console.log('Подключено к базе swarDEF'))
  .catch(err => console.error('Ошибка подключения:', err));

const schema = new mongoose.Schema({
  cheater: {type: String, required: true},
  text: {type: String, required: true},
  answer: {type: String, required: false},
  status: {type: String, required: false}
})

const model = mongoose.model('reports', schema)

export default model