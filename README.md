<img src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" jsaction="VQAsE" class="r48jcc pT0Scc iPVvYb" style="max-width: 1200px; height: 400px; margin: 81px 0px; width: 1000px;" alt="MongoDB: The Developer Data Platform | MongoDB" jsname="kn3ccd" aria-hidden="false">
<h1>MongoDB</h1>
<p>MongoDB, yapılandırılmamış verileri depolamak ve yönetmek için özel olarak tasarlanmış, belge tabanlı, açık kaynaklı bir NoSQL veri tabanıdır.
<br> Kurulumunu aşağıda gösterdiğim MongoDB'yi kod programımızda çalıştırmak için node.js kurulu bir kod programında çalışmamız gerekir.
<br>Node.js kurulumu için <a href="https://nodejs.org/en/download">Node.js</a></p>
<h3>MongoDB kurulumu:</h3>
<ol>
  <li>Linkteki adresten bilgisayarınız hangi işletim sistemindeyse o işletim sistemini seçerek MongoDB'yi indirin ve bilgisayara kurulumunu yapalım: <a href="https://www.mongodb.com/try/download/community">MongoDB</a></li>
  <li>MongoShell'i de indirmeliyiz linkten onu da indirelim: <a href="https://www.mongodb.com/try/download/shell">MongoShell</a> Benim tarafımdan ikisi de zip şeklinde indirilmedi.</li>
  <li>Verilerin bir dosyada kaydedilmesini istiyorsak: Bu bilgisayar bölümüne "data" adında bir dosya data dosyasının içine de "db" adında bir dosya oluşturmalıyız.</li>
  <li>Gerekli olan ayarları yaptıktan sonra komut yorumlayıcısına bu komutu yazılarak kurulumu kontrol edilir:<pre>mongod --version</pre>
  </li>
  <li>İsteğe göre ya bilgisayarın terminalinden ya da MongoDB'nin kendi uygulamasından komutlar verilebilir.
      <ul>
        <li>Eğer bilgisayar terminalinden yapılacaksa terminale MongoShell'i açmak için bu satırı yazmalıyız: <pre> mongosh </pre>
      Bundan sonra terminale yazılan her şey shell olarak çalışır.</li>
        <li>Uygulamadan yazmak istersek aşağıda görseli olan alanı "Connect" tuşuna basarak çalıştırabilir uygulamanın en altında bulunan "_MONGOSH" alanına da komutlarımızı yazabiliriz.</li>
        <br><img src="https://www.mongodb.com/docs/compass/beta/images/compass/favorite-button-connect.png" jsaction="VQAsE" class="r48jcc pT0Scc iPVvYb" style="max-width: 1548px; height: 258px; margin: 72.5px 0px; width: 482px;" alt="Favorite Connections — MongoDB Compass" jsname="kn3ccd" aria-hidden="false">
      </ul>
      </li>
</ol>

<p> ▷ Aslında buraya kadar yazdığımız MongoDB kodlarına yardımcı olması için bir tür ODM modülü olan Mongoose modülünü hangi kod programında çalışıyorsak ona eklememiz gerekir.</p>
<h4>Bir dosyada kodları yazabilek için:</h4>
<ul>
  <li>İlk olarak node.js kurulu kod programımıza dosyayı ekleyip dosyanın içine bir js oluşturmalıyız: <pre>touch app.js</pre></li>
  <li>Dosyanın içeriside npmi aktif etmeliyiz: <pre>npm init -y</pre></li>
  <li>Son olarak mongoose modülünü eklemek için terminale aşağıdaki kelimeleri yazmamız yeterli olacaktır: <pre> npm i mongoose</pre></li>
</ul>
<p>Devamında kodları yazmak için linkten mongoose web sitesine girerek hangi kodların ne işe yaradığını öğrenebiliz. <a href="https://mongoosejs.com/docs/guides.html">Mongoose web sitesi</a></p>
