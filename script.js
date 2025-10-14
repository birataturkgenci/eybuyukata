/* Nutuk sesi için kontrol */
function toggleAudio() {
  const audio = document.getElementById('nutukAudio');
  const button = document.querySelector('.audio-controls button');
  
  if (!audio) {
    console.error('Audio elementi bulunamadı!');
    return;
  }

  try {
    if (audio.paused) {
      audio.play();
      button.textContent = 'Nutuk Sesini Durdur';
    } else {
      audio.pause();
      button.textContent = 'Nutuk Sesini Çal';
    }
  } catch (err) {
    console.error('Audio oynatma hatası:', err);
    button.textContent = 'Ses Yüklenemedi';
    button.disabled = true;
  }
}

/* Saygı Duruşu fonksiyonu */
function saygiDurusu() {
  // Elementleri seç
  const mesaj = document.getElementById('anmaMesaji');
  const buton = document.querySelector('#saygi-durusu button');
  
  if (!mesaj || !buton) {
    console.error('Gerekli elementler bulunamadı!');
    return;
  }

  // Orijinal stilleri kaydet (geri dönüş için)
  const originalBodyBg = document.body.style.backgroundColor;
  const originalColors = new Map();
  document.querySelectorAll('body *').forEach(el => {
    const computedColor = window.getComputedStyle(el).color;
    originalColors.set(el, computedColor);
  });

  // Arka planı siyah yap
  document.body.style.backgroundColor = '#000';

  // Metinleri beyaz yap (zaten beyaz olanları atla)
  document.querySelectorAll('body *').forEach(el => {
    const computed = window.getComputedStyle(el).color;
    if (computed !== 'rgb(255, 255, 255)') {
      el.style.color = '#fff';
    }
  });

  // Alıntıları vurgula
  const alintilar = document.querySelectorAll('.quote-card');
  alintilar.forEach(b => {
    b.style.color = '#ffeb3b';
    b.style.backgroundColor = 'rgba(0,0,0,0.5)';
    b.style.borderLeftColor = '#ffeb3b';
  });

  // Mesajı göster
  mesaj.innerText = 'Ey Büyük Ata, seni saygıyla anıyoruz!';
  mesaj.style.display = 'block';
  mesaj.setAttribute('aria-live', 'polite'); // Ekran okuyucular için

  // Butonu pasifleştir
  buton.disabled = true;
  buton.setAttribute('aria-disabled', 'true');
  buton.innerText = 'Saygı duruşu yapıldı.';

  // Fade-in animasyonu (requestAnimationFrame ile daha performanslı)
  mesaj.style.opacity = 0;
  let opacity = 0;
  function fadeIn() {
    if (opacity >= 1) return;
    opacity += 0.02;
    mesaj.style.opacity = opacity;
    requestAnimationFrame(fadeIn);
  }
  requestAnimationFrame(fadeIn);

  // 5 saniye sonra orijinal stillere dön
  setTimeout(() => {
    document.body.style.backgroundColor = originalBodyBg;
    document.querySelectorAll('body *').forEach(el => {
      el.style.color = originalColors.get(el);
    });
    alintilar.forEach(b => {
      b.style.color = '';
      b.style.backgroundColor = '';
      b.style.borderLeftColor = '';
    });
    mesaj.style.display = 'none';
    buton.disabled = false;
    buton.setAttribute('aria-disabled', 'false');
    buton.innerText = 'Saygı Duruşunda Bulun';
  }, 5000);
}