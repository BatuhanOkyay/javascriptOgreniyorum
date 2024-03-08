// number veri türü tanımlamak 
let price = 100 
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fİyat:", price, 
    "KDV oranı:", tax, 
    "KDV tutarı:", priceTax, 
    "Fiyat:", total);


    // artırma ve azaltma işlemleri 

    let counter = 0
    counter = counter + 1 // bu uzun yöntem şuanda consolda 1 yazıyor 
    counter += 1 // bu sekilde de yapabiliriz şuan konsolda 2 yazıyor
    counter ++ // bu da en basit yöntem şuanda konsolda 3 yazıyor 
    console.log(counter);

    counter-- // bu şekilde bir azaltmış olduk 
    console.log(counter); // şuanda konsolda 2 yazıyor

    counter *= 10 // 10 ile çarp demiş olduk 
    console.log(counter); // konsolda 20 yazıyor.

    counter /= 2 // 2 ye böl demiş olduk
    console.log(counter); // konsolda 10 yazıyor


    //işlem önceliği
    console.log(2 + 3 * 10); // ben burada 50 bulmak istiyorum ama işlem önceliğinden dolayı 32 çıkıcak.
    console.log((2+3) * 10) // bu sekilde parantez içerisine alırsam o zaman once parentezı yapacagından 50 cıkacaktır


    //mod(kalan) alma %
    // sayı tek mı cıftmı 
    console.log(14 % 2 ); // eger sonuç 0 ise çift çünkü tam bölünüyor 1 ise tek sayıdır.

    // 8 ürün alan bir koliye tüm ürünler sığıyor mu?
    console.log("kalan koli ürün örneği:" , 18 % 8);

    // us alma işlemi ** ile yapılır
    console.log(2 * 2 * 2 * 2); //aslında burada 2 üzeri 4 ün açılmış halini kullandık.
    console.log(2 ** 4); // bu sekilde yazarakda aynısı yapmış olabiliriz.


    // aşağı yuvarlama işlemi math kütüphanesi ile yapılır
    console.log("Aşağı yuvarlama:", Math.floor(1.7)); // bunu 1 e yuvarlayacak. floor zemin demek.

    // yukarı yuvarlama işlemi
    console.log("Yukarı yuvarlama:", Math.ceil(1.7)); // 2 ye yuvarlayacak ceil tavan demek.

    // yakına yuvarlama
    console.log("Yakına yuvarlama:" , Math.round(1.7)); // 2 ye yuvarlayacak 



