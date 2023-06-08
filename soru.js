function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Sınıfımızı süslemek için İpek 12, Havva Yaren 6 bayrak getirdi. Bayrakların 10 tanesini pencerelere astılar. Geriye kaç bayrak kaldı ?", { a: "8", b: "9", c: "10" }, "a"),
    new Soru("2-İnci okul servisine bindi, serviste 17 çocuk vardı. İlk durakta 6 kişi indi, 8 kişi bindi. Serviste kaç çocuk kaldı ?", { a: 17, b: 18, c: 19 }, "c"),
    new Soru("3-Esilanın 13 tane şekeri vardı, İpek Esila'ya 4 şeker daha verdi. Esilanın kaç şekeri oldu ?", { a: 16, b: 17, c: 18 }, "b"),
    new Soru("4-İpek'in evindeki akvaryumda 4 kırmızı balık, 7 sarı balık vardı. Babası İpek'e  3 balık daha getirdi. İpek'in akvaryumunda kaç balık oldu ?", { a: 14, b: 15, c: 16 }, "a"),
    new Soru("5-İpek'in kardeşi İnci sabah kalkınca pencereden ağaca baktı. Ağaçta 14 kuş vardı. Önce ağaçtaki daldan 8 kuş uçtu, sonra dala 2 kuş kondu. Dalda kaç kuş oldu ?", { a: 7, b: 8, c: 9 }, "b"),
    new Soru("6-Havva Yaren 7, ablası 15 yaşındadır. Ablası, Havva Yarenden kaç yaş büyüktür?", { a: 5, b: 7, c: 8 }, "c"),
    new Soru("7-İpek 8 yaşında, Fatih ise İpek'ten 7 yaş büyüktür. Ramazan, Fatih'ten 5 yaş küçük ise Ramazan kaç yaşındadır ?", { a: 15, b: 10, c: 20 }, "b"),
    new Soru("8-Esila otobüse bindi, Otübüste 14 yolcu vardı. Durakta 5 yolcu bindi, 11 yolcu indi. Otübüste kaç yolcu kaldı ?", { a: 8, b: 9, c: 10 }, "a"),
    new Soru("9-İpek 15 dilim pastanın 3 dilimini yedi. Arkadaşlarına da 8 dilim pasta ikram etti. Eve gelince İnci'ye kaç dilim pasta kaldı ?", { a: 11, b: 12, c: 4 }, "c"),
    new Soru("10-İnci'nin 7 tokası vardı. Annesi İnci'ye 4 toka daha aldı. İnci tokaların birçoğunu kaybetti. Geriye 3 toka kaldı. İnci kaç tane toka kaybetti?", { a: 11, b: 12, c: 4 }, "c"),
    new Soru("11-İpek'in cebinde 11 TL.si vardı. 5 TL. de babası verdi. İpek 9 TL. ye kitap aldı. İpek'in cebinde kaç lirası kaldı  ?", { a: 11, b: 12, c: 4 }, "c"),

];