const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')


app.use(cors())


app.get('/', (req, res) => {
  res.send('Hedddllo dsa!')
})
//HTTP메소드 = app.get('/', ()=>{})
// '/' == 라우팅, ()=>{} == 콜백함수 {} 안에 실행할 함수 넣기
//req == 요청(request)
//res == 응답(response)
app.get('/user/:id', (req, res) => {
  //const q = req.params //라우팅 뒤에 :써서 사용
  //console.log(q.id)
  //const w = req.query //라우팅 뒤에 ? 써서 &와 함께 사용 key value 를 쓴다.
  // console.log(w)
  //res.json({ 'userid': q.id })
  //res.json({ 'userid': w.id })
})
app.get('/sound/:name', (req, res) => {
  const { name } = req.params//{name} == 바로 변수값으로 적용가능
  if (name == "dog") {
    console.log(name)
    res.json({ 'sound': '멍멍' })

  }

  else if (name == "cat") {
    console.log(name)
    res.json({ 'sound': '야옹' })

  }

  else if (name == "pig") {
    console.log(name)
    res.json({ 'sound': '꿀꿀' })

  }
  else {
    console.log(name)
    res.json({ 'sound': name })
  }



})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
