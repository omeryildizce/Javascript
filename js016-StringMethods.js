// substring()
// metinde istediğimiz aralığı almaya yarar

var metin = "Bu uzun bir substring örneği yazısıdır."
document.writeln(metin)

var sonuc = metin.substring(12,28)
document.writeln(sonuc)


// substr: 2. parametre alınacak karakter sayısını gösterir
var sonuc1 = metin.substr(8,3)
document.writeln(sonuc1)


// concat() strin birleştirmeye yarar

var isim = "Ömer"
var soyisim = "Yıldız"

document.writeln(isim.concat(soyisim))

