let fullName = prompt("Adinizi Giriniz:")
let name_value = document.querySelector('#myName')
name_value.innerHTML = `${fullName}`



    setInterval(dijitalsaat, 1000)
function dijitalsaat(){
    var suan = new Date();
    var sa = suan.getHours();
    var dk = suan.getMinutes();
    var sn = suan.getSeconds();
    var gn = suan.getDate();
    var aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
    var ay = [suan.getMonth()];
    var yıl = suan.getFullYear();
    var günler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    var gi = günler[suan.getDay()];

    sa = (sa<10)? "0"+sa:sa;
    dk = (dk<10)? "0"+dk:dk;
    sn = (sn<10)? "0"+sn:sn;

    var zaman = sa+":"+dk+":"+sn;
    var saat = document.getElementById("saat").innerHTML=zaman;

    gn = (gn<10)? gn:gn;


    var tarih = gn+"/"+ay+"/"+yıl+"/"+gi;
    var tarih2 = document.getElementById("tarih").innerHTML=tarih;



}