  // Get the current year for the copyright
  $('#year').text(new Date().getFullYear());//Este comando atualizado, <span id="year"></span>,Data Ano atual no foorter page.

  // Init Scrollspy
  $('body').scrollspy({ target: '#main-nav' });

  // Smooth Scrolling
  $("#main-nav a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () { // [800 milisegundos, tempo de animação scrool - #main-nav]

        window.location.hash = hash;
      });
    }
  });