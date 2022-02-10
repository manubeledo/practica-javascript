let array = [1, 10, 50, 3, 45, 23, 2, 9, 15, 0, 5, 33]

// array.sort() De esta forma tambien me los ordena pero su valor de unicode que es el valor de lenguaje maquina y no el valor real que interpretamos nosotros.

array.sort(function(a, b){
    return a - b;
})

console.log(array)