// camel case kullanımı = kelimenin ilk harfi kucuk daha sonra devaminda gelen buyuk harfle baslar ve birbirinden ayrilir
let fullName = ""
let kodluyoruzServerİnfo = ""

// UPPER_CASE kullanimi = eger const yani değiştirilmeyecek sabit şeyler tanımlayacaksak bu sekılde kullanırız kı dırek bakıldıgında anlasılabılsın
const password = "1234" // bu kullanım seklı yanlıstır 
const PASSWORD = "1234" // bu sekılde kullanmamız gerekır 
const SERVER_PASSWORD = "1234" // eger ıkı kelıme seklınde yazmmamız gerekıyor ıse alt cızgı ıle bu sekılde ayırırız.


// değişkenlerde türkçe ve diğer dillerin kullanımı 

let türkçeBilgi = "Türkçe bilgi yazdırılıyor..." // bu kullanım şeklı yanlıştır.
let turkceBilgi = "Türkçe bilgi yazdırılıyor..." // bu kullanımda yanlıstır cunku burda turkce karekterden bahsetmıyoruz dırek anlam olarak da ıngılızce sekılde yazmalıyız.Burada yazdıgımız turkçe olması programın calısmasına etkı eden bır durum degıldır sadece genel olarak bu sekılde kullanılması gerekır.
let info = "Türkçe bilgi yazdırılıyor..." // şeklinde kullanmamız gerekıyor değişken içerisindeki bilginin hangi dilde oldugu onemlı degıl ama eger degısken ısmını türkçe yazarsak okunulabılırlık ve anlasılabılırlık acısından sıkıntı çıkarabılır.

// anlamsız degısken adları kullanmamalıyız cunkü bu verdıgımız degısken adını sadece bız bılıyor olabılırız ne ıse yarıyor neden orda var bakıldıgında anlasılmayabılır.
let x = 1;

// EK BİLGİ 
// boolean kullanımlarında is ve has kullanımına özen gosterılmelı boolean true veya false döndürür bu yüzden örnek verecek olursak
let isActive ="true" // kullanıcı aktif mi diye sorarken is gördüğümüzde bunun bir boolean oldugunu anlarız.(varmı)
let hasPasword= "false" // kullanıcı şifreye sahip mi gibi.  (sahip mi)

