// Se você quiser adicionar alguma lógica JavaScript ao seu site, pode fazê-lo aqui.

$(document).ready(function(){
    $('.gallery').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true
    });

  

  });



  $(document).ready(function() {
    // Ativa o Lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
  });

  const bwhats         = $('#whats')
  const bwhatsClose    = $('#whatsClose')
  const bdialog        = document.querySelector('#whatsDialog')


  // bwhats.onClick = function(){
  //   bdialog.showModal(); 
  // }

  // bwhatsClose.onClick = function(){
  //   bdialog.close(); 
  // }
  

  function teste(){
      bdialog.showModal(); 
    // alert('paulofantins')
  }
  


  