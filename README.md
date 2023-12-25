# React Native Developer Çalışması

## Genel Kriterler: 
- Çalışma içinde yapılacak save / load işlemlerinin deviceStorage’a kaydedilmesi gerekmektedir.
- Uygulama içerisinde en az 1 servis isteği yapılmalıdır.
- Çalışmanın görsel tasarımı için istenilen kütüphane kullanılabilir.
- Çalışma responsive design kurallarına uygun olarak yapılmalıdır.
- Yapılacak çalışmada en az 3 ayrı sayfa olmalıdır.
    - Ürün Liste Sayfası
    - Ürün Detay Sayfası
    - Sepet Sayfası
- Çalışma için <b>Unit</b> test yazılmalıdır.

## Çalışma için tamamlanması gereken işler: 
- Uygulama, listeleme ekranı ile başlamalıdır. 
- Listenecek olan elemanlar [şu adres](https://5fc9346b2af77700165ae514.mockapi.io/products) üzerinden çekilip ekrana basılacaktır. 
- Ürünler 12’şer adet olarak ekranda gösterilmelidir. 12’den fazla ürün varsa infinite scroll özelliği eklenmelidir.
- Listelenen ürünlerden biri seçildiğinde, o ürünün detaylarının bulunduğu ekrana yönlendirilecek ve ürün detayları gösterilecektir.
- Ekranda bulunan “add to cart” butonuna basarak sepete ürün eklenmelidir.
- Sepet Ekranında ürün sayısı arttırılıp azaltılabilmeli ve bu güncellemelere göre sepette güncellenmelidir.
- Sepete eklenen ürünler, uygulama kapatılsa bile tekrar açıldığında kaldığı yerden devam edebilmelidir.
- Ekranın sağ tarafında bulunan filtreler ile filtreleme işlemi yapılabilmelidir. Filtre ekranı modal olarak açıklacaktır.
- Anasayfa da bulunan “Search“ alanı ile tüm ürünler arasında isim ile arama yapılıp, aşağıdaki liste güncellenmelidir.
- Ürünlerden herhangi birinin üzerine tıklandığında “Ürün Detay” ekranına gidebilmeli ve sepete ekleme işlemi bu alandan da yapılabilmelidir.
- Redux, Redux-Saga, ContextApi vb. kullanılması avantajlı olacaktır.

Bonus: 
- Bottom navigasyon alanında bulunan sepetteki ürün sayısı gösteren badge olmalıdır.
- Favori Sayfası ve ekle/çıkar özelliği
- Filtreler alanındaki "Search" işlemlerinin yapılması

<b>API Link:</b> https://5fc9346b2af77700165ae514.mockapi.io/products

<b>Ekran Görselleri Link:</b> https://www.figma.com/file/nxc84VSdrrf1tNoRcyDmvC/Eteration-React-Native-Case-Study

> Not: Gönderilen tasarım, açıklama, görsel argüman sağlama açısından eklenmiştir. Görselde yer alan gölge, font, icon gibi özellikler aranmayacaktır.

## Ekran Görselleri:

### Anasayfa:

<img src="./docs/home.png" width="400"/>

### Detay Ekranı:

<img src="./docs/detail.png" width="400"/>

### Sepet Ekranı:

<img src="./docs/cart.png" width="400"/>
# ReactNativeWorkCase
