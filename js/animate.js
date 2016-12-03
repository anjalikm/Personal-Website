 "use strict";


 // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.fav-heading-left', {
        origin: 'right',
        distance: '300px',
        duration: 1000,
        scale: 0.3,
        rotate   : { z: 10 }
    }, 400);
    sr.reveal('.fav-heading-right', {
        origin:'left',
        duration: 1000,
         scale: 0.3,
        delay: 200,
        rotate   : { z: 10 }
    });

    //roate skills circles
    sr.reveal('.anim-circle', {
        origin:'center',
        duration: 1000,
        scale: 0.3,
        rotate   : { y: 360 }
       
    },0);
 
     sr.reveal('.panel-default',{
         origin:'bottom',
          duration: 1000,
         scale:0.7
         
     },100);

    sr.reveal('.hobby-img', {
        origin:'left',
         scale:0.4
    },0);

  