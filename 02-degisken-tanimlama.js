// *************** let ve const ile degisken tanimlama *********************

// ************** VAR ARTIK KULLANILMIYOR YERINE LET KULLANILIYOR CONST 

// ****** var ile degisken tanimlama ****************
// var serverName = "kodluyoruz.org";
// console.log(serverName);

// ******* let ile degiskeni bos tanimlama ****************
let serverName;
console.log(serverName);

// ******* let ile degiskene bilgi atayarak tanimlamak ****************
serverName = "https://www.kodluyoruz.org"
console.log(serverName);

// ******* let ile degiskene bilgi atayarak tanimlamak ****************
let password = "1234";
console.log(password);

//******** degisken atamasi yapmadan once kullanmaya calismak **********
/* HATALI KULLANIM cunku degisken tanimlanmadan once yazdirmaya calisiyoruz akisa uymuyor bu sebeple hata aliyoruz
console.log(fullName)
let fullName = "Batuhan okyay";
*/

let fullName = "Batuhan okyay";
// ******** let ile tanimlanan degiskenin icindeki bilgiyi degistirme *********
fullName = "lorem ipsum dolor"
console.log(fullName)

// ********* birlestirme veya ekleme islemi **********
fullName + "yeni eklenen bilgi" // bu sekilde yaparsak eklenmez 
console.log(fullName + " test bilgisi"); // ekle ve goster yaptik ama degiskene eklemedik

fullName = fullName + " yeni bilgi"
fullName = "2: Bilgi :" +fullName 

fullName = "sifirlandi"
fullName += " ve yeni bilgi eklendi" // arti esittir diyerek hem birlestirme hem ekleme yaptik 
console.log(fullName);

// ***************** const ile degiskeni bos tanimlamaya calismak ************
// const serverPassword; // sadece degisken tanimlandi ama ici bos ve yanlis bir kullanim tanimlama yapmak zorundayiz

// ************* const ile degisken tanimlamak *************
const SERVER_PASSWORD = "oaisdjfas12134"
console.log(SERVER_PASSWORD);

//SERVER_PASSWORD = "1234"
//console.log(SERVER_PASSWORD); bunu yapamayiz cunku const ile tanimlama yapiyorsak o seyin degismeyecegini soyleriz ama let ile tanimlama yaparsak onu degistirebiliriz...

