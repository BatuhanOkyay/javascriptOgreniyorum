// 0 ve 1 i anlamak 
let isActive = false // 0 false oldugunda 0 yani kapali anlaminda 
isActive = true // 1 true 1 oldugundaysa acik anlaminda kullanilir
console.log(isActive)
// yukaridaki ornekte consoldan baktigimizda true verdi cunku biz en son true olarak ayarladik.


let userName;
let isUserName = Boolean(userName)
console.log(isUserName)
// buradaki ornekte ise consolda bize false verdi cunku biz boolean icersine degisken verebiliyoruz ve eger bos bir degisken ise bize false olarak geri doner.Asagida daha detayli sekilde orneklendirdik.

Boolean("11") // true olur cunku icersinde bir veri var 
Boolean("0") // bu da true olur yine deger var 
Boolean("") // bu sekilde bos birakirsak bu kez false doner cunku icerisinde bir veri yok.

userName = "user"
console.log("user name varmi:",Boolean(userName)) // buna cevap olarak true alicaz cunku user adinda bir veriyi tanimladik.


// 0, -0, null, false, NaN, undefined, ("") bunlar false verir
Boolean(0) // false
Boolean(-0) // false
Boolean(-0.1) // true cunku sifirin disindaki her seyi true olarak verir
Boolean(0 === 0) // true diyecek cunku 0 esit mi 0 a diye sorduk/


// karar yapilari kisminda tekrar anlatilacak 
Boolean(userName.length > 0) // burada aslinda bir if kullanmis olduk eger username uzunlugu 0 dan buyukse bize true vermis olucak bu mantikla bakabiliriz.
