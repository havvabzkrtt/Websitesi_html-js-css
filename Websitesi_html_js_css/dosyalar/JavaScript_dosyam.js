
// ÜYE KAYIT SAYFASI İÇİN 

function kontrol(){
    var eposta = document.getElementById("eposta").value;
    var kullaniciadi = document.getElementById("kullaniciadi").value;
    var parola1 = document.getElementById("parola1").value;
    var parola2 = document.getElementById("parola2").value;
    var simge = eposta.indexOf("@");

    if(kullaniciadi.length < 6){
        alert("Kullanıcı adı 6 karakterden kısa olamaz.");
    }
    
    else if(parola1.length < 6){
        alert("Parola 6 karakterden kısa olmaz.");
    }

    else if (parola1 != parola2){
        alert("Girdiğiniz şifreler uyuşmamaktadır. Lütfen şifrenizi tekrar giriniz.")
    }
    
    else if(simge == -1){
        alert("E-postada '@' karakteri bulunmalıdır.")
    }
    
    else{
        alert("Kaydınız başarıyla tamamlanmıştır.")
    }
    
}







