function saygiDurusu() {
  // Sayfanın arka planı ve yazısını değiştirme
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";

  // Blockquote elementlerini beyaz yapma
  const alintilar = document.querySelectorAll("blockquote");
  alintilar.forEach(b => {
    b.style.color = "white";
    b.style.backgroundColor = "rgba(255,255,255,0.1)";
    b.style.borderLeftColor = "white";
  });

  // Mesajı gösterme
  const mesaj = document.getElementById("anmaMesaji");
  mesaj.innerText = "Saygıyla anıyoruz...";
  mesaj.style.display = "block";

  // Butonu pasifleştirme
  const buton = document.querySelector("button");
  buton.disabled = true;
  buton.innerText = "Saygı duruşu yapıldı.";

  // Opsiyonel: yavaş fade-in animasyonu
  mesaj.style.opacity = 0;
  let op = 0;
  const fade = setInterval(() => {
    if(op >= 1) clearInterval(fade);
    mesaj.style.opacity = op;
    op += 0.02;
  }, 20);
}
