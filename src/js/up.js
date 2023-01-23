export const toTop = document.querySelector('#up');

toTop.addEventListener('click',(event)=>{
    console.log(event);
    if(event.pageY>1000){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
          })
    }else{
        window.scrollTo({
            top:10000,
            behavior: 'smooth'
          })
    }
  })

