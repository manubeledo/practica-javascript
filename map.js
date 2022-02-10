let data = require('./datos.json')

let array = ['w','o','r','d']

array.map((element) => {
    console.log(element)
})

data.map((element) => {
    console.log(element)
})

// puedo hacerle el map a data porque es un array pero si fuera un objeto no me lo permite
