const fs = require('fs');

fs.writeFileSync('./ejemplo.txt', 'Hola comision !! Saludos para el utto Daniel Perco')

 const contenido = fs.writeFileSync('./data22.txt' , 'Init The File')

if(fs.existsSync('./data22.txt')){
    const contenido = fs.readFileSync('./data.txt', 'utf-8')
    console.log(contenido);
    
    fs.appendFileSync('./data22.txt' , '\nMas copntenido para Alan')

    const contenido2 = fs.readFileSync('./data22.txt', 'utf-8')
    console.log(contenido2);

    fs.unlinkSync('./data22.txt')
}
