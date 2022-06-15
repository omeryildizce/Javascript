// var standart tanımlama ifadesi
// let blok kapsamlı yerel değişken
// const sabit değişken tanımlamakta kullanılır


var name = "Ömer"
document.writeln(name)

let surname = "Yıldız"
document.writeln(surname)

const fullname = name +" "+ surname
document.write(fullname)
document.write("<br>*********************<br>")

//global alan
var isim = "Ali "
if(true)
{
    var isim="Kadir "
    document.write(isim)
    //local alan
}

document.write(isim) // Kadir kadir

document.write("<br>*********************<br>")

//global alan
let isim1 = "Ali "
if(true)
{
    let isim1="Kadir "
    document.write(isim1)
    //local alan
}
document.write(isim1) // kadir ali

document.write("<br>*********************<br>")

//global alan
const isim2 = "Ali "
if(true)
{
    const isim2="Kadir "
    document.write(isim2)
    //local alan
}
document.write(isim2) // kadir ali

document.write("<br>*********************<br>")

//global alan

if(true)
{
    var isim3="var " //
   
    //local alan
}
document.write(isim3) // kadir ali



