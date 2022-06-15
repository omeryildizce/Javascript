// eval()
// kendisine verilen parametreleri javascrip kodu olaral çalıştırır

var deger1 = 317.2547
var deger2 = 707.5

var sonuc1 ="deger1 + deger2"
var sonuc2 ="deger1 * deger2"

document.writeln(sonuc1)
document.writeln(eval(sonuc1))

document.writeln(sonuc2)
document.writeln(eval(sonuc2))


var komut = "deneme()"
eval(komut)

function deneme()
{
    document.writeln("Merhaba")
}
