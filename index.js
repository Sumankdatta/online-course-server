const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;


const courseDetails = require('./data/details.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Online courses running')
})

app.get('/courses', (req, res) => {
    res.send(courseDetails)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course_Details = courseDetails.find(c => c.course_id === id)
    res.send(course_Details)

})


app.listen(port, () => {
    console.log('app listing on', port);
})