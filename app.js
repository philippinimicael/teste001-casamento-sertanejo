    
function scrolagem(){
let header = document.getElementById('menu')
    header.classList.toggle('scrollagem', window.scrollY > 100)
}

window.addEventListener('scroll', scrolagem)

/* ---------------------------------------- */

document.querySelectorAll('.home[href="index.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.sobre[href="#SOBRE"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 830, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.beneficios[href="#BENEFICIOS"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 1600, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.duvidas[href="#DUVIDAS"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 2200, behavior: 'smooth' });
    });
  });
