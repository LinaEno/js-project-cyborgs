  window.onload = function () { 
    const preloader = document.querySelector('.preloader');
    setTimeout(function () {   
        
      preloader.classList.add('visually-hidden'); 
      body.style.overflow='hidden'; 
    }, 4000); 
  };
