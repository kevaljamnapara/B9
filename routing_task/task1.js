const express = require('express')
const app = express()

const student = [
    { name: 'Keval', age: 20 },
    { name: 'Viral', age: 18 },
    { name: 'Dhruv', age: 17 }
]

app.get('/', (req, res) => {
    res.json(student)
})

app.get('/sort',(req,res)=>{
    result = student.sort((a,b)=> a.age-b.age)
    res.json(result)
})

app.listen(5001, () => {
    console.log("Server running on http://localhost:5001")
})