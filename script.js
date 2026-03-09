// script.js - Interações do site Citadela Doces

document.addEventListener("DOMContentLoaded", function () {

  /* SCROLL SUAVE NO MENU */

  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener("click", function(e){

      e.preventDefault();

      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if(target){
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }

    });
  });



  /* HEADER DINÂMICO AO ROLAR */

  const header = document.querySelector("header");

  window.addEventListener("scroll", function(){

    if(window.scrollY > 40){

      header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
      header.style.background = "rgba(255,255,255,0.95)";
      header.style.backdropFilter = "blur(6px)";

    }else{

      header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
      header.style.background = "white";
      header.style.backdropFilter = "none";

    }

  });



  /* ANIMAÇÃO DOS CARDS AO APARECER */

  const cards = document.querySelectorAll(".card");

  const revealCards = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  }, { threshold: 0.15 });



  cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";

    revealCards.observe(card);

  });



  /* DETECTAR VOLTA DO WHATSAPP */

  let clicouWhatsapp = false;

  const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

  whatsappButtons.forEach(btn => {

    btn.addEventListener("click", function(){

      clicouWhatsapp = true;

    });

  });

  document.addEventListener("visibilitychange", function(){

    if(!document.hidden && clicouWhatsapp){

      alert("Obrigada por entrar em contato com a Citadela Doces! 🍫✨");

      clicouWhatsapp = false;

    }

  });



  /* EFEITO PARALLAX SUAVE NO HERO */

  const hero = document.querySelector(".hero");

  if(hero){

    window.addEventListener("scroll", () => {

      let offset = window.scrollY * 0.3;

      hero.style.backgroundPosition = `center ${offset}px`;

    });

  }

});
