document.addEventListener('DOMContentLoaded', () => {
  const phoneInputs = document.querySelectorAll('.phone');

  phoneInputs.forEach(input => {
    input.addEventListener('keydown', (e) => {
      const start = input.selectionStart;
      
      // Əgər `Backspace` düyməsi basılıbsa və kursor mötərizənin və ya defisin qarşısındadırsa, onu silməyə icazə veririk
      if (e.key === 'Backspace' && start > 0) {
        const prevChar = input.value[start - 1];

        if (prevChar === '(' || prevChar === ')' || prevChar === '-' || prevChar === ' ') {
          e.preventDefault(); // Normal silmə prosesini bloklayırıq
          input.value = input.value.substring(0, start - 1) + input.value.substring(start);
          input.selectionStart = input.selectionEnd = start - 1; // Kursoru uyğun yerə qaytarırıq
        }
      }
    });

    input.addEventListener('input', () => {
      const start = input.selectionStart;
      const oldVal = input.value;

      input.value = formatPhone(input.value);

      const diff = input.value.length - oldVal.length;
      input.selectionStart = input.selectionEnd = start + diff;
    });
  });

  function formatPhone(value) {
    let digits = value.replace(/\D/g, '');

    if (!digits) return '';

    if (digits[0] !== '7') {
      digits = '7' + digits;
    }

    if (digits.length > 11) {
      digits = digits.substring(0, 11);
    }

    if (digits.length === 1) return '+7';

    let formatted = '+7';

    if (digits.length > 1) {
      formatted += ' (' + digits.substring(1, Math.min(4, digits.length));
      if (digits.length >= 4) formatted += ')';
    }

    if (digits.length > 4) {
      formatted += ' ' + digits.substring(4, Math.min(7, digits.length));
    }

    if (digits.length > 7) {
      formatted += '-' + digits.substring(7, Math.min(9, digits.length));
    }

    if (digits.length > 9) {
      formatted += '-' + digits.substring(9);
    }

    return formatted;
  }
});


$(document).ready(function () {
  $(".faq_title").click(function () {
    // Toggle the clicked FAQ
    $(this)
      .toggleClass("active") // Assuming you want to add/remove 'active' class
      .next(".faq_content")
      .slideToggle()
      .parent()
      .siblings()
      .find(".faq_content")
      .slideUp();

    // Remove the 'active' class from other titles
    $(this).parent().siblings().find(".faq_title").removeClass("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const swiperElement = document.querySelector(".simCardsSwiper");
  if (!swiperElement) {
    return;
  }

  const customerSwiper = new Swiper(swiperElement, {
    loop: true,
    // effect: "slide",
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 400,
    navigation: {
      nextEl: "#next",
      prevEl: "#prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      280: { slidesPerView: 1 },
      450: { slidesPerView: 1.5 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3, navigation: false },
      1200: { slidesPerView: 4, navigation: false },
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Video Lightbox
  Fancybox.bind("[data-fancybox='video']", {
      Toolbar: false,  
      smallBtn: true,  
      Thumbs: false,   
      iframe: {
          preload: false,
          attr: {
              allow: "autoplay; fullscreen",
          },
      },
  });

  // Galeri Lightbox
  Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: true,  // Galeri için üst menüyü göster
      smallBtn: false,  
      Thumbs: true,   // Küçük resimler önizleme olarak gösterilsin
      loop: true,     // Galeri içinde döngü olsun
  });
  
   Fancybox.bind(".xfieldimagegallery img", {
groupAll: true,
});
});