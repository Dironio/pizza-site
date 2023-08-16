const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  document.getElementById("year").innerHTML = new Date().getFullYear();

  const clipEmail = document.getElementById("zittoEmail")

  clipEmail.onclick = function() {
    navigator.clipboard.writeText('zittopizza@address.com')
  }