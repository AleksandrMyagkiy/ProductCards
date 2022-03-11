const catalogTabs = document.querySelector('.catalog__tabs');
const btnFitness = document.querySelector('.btnFitness');
const btnRun = document.querySelector('.btnRun');
const btnTriathlon = document.querySelector('.btnTriathlon');
const fitness  = document.querySelector('.fitness ');
const run = document.querySelector('.run');
const triathlon = document.querySelector('.triathlon');

catalogTabs.onclick=function(e){
    for(let i = 0; i < catalogTabs.children.length; i++){
        catalogTabs.children[i].classList.remove('catalog__tab_active');
    }
    e.target.classList.add('catalog__tab_active');
  };

  btnFitness.addEventListener('click', () => {
    fitness.classList.add('catalog__content_active');
    run.classList.remove('catalog__content_active');
    triathlon.classList.remove('catalog__content_active');
  });

  btnRun.addEventListener('click', () => {
    run.classList.add('catalog__content_active');
    fitness.classList.remove('catalog__content_active');
    triathlon.classList.remove('catalog__content_active');
  });

  btnTriathlon.addEventListener('click', () => {
    triathlon.classList.add('catalog__content_active');
    run.classList.remove('catalog__content_active');
    fitness.classList.remove('catalog__content_active');
  });