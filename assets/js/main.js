(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (e){ 
    e.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

}); 

function offerCardFunc() {
    
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  const mediaQueryTwo = window.matchMedia('(max-width: 767px)')
  const clActive = document.querySelectorAll('.offer_card_blk')
  if (clActive.length > 0) {
     
        clActive.forEach(clActives => {
            clActives.classList.remove('active')
        }) 
    
     
          var btn = document.querySelectorAll('.info')
            var item = document.querySelectorAll('.offer_card_texts')
    
            btn.forEach(btns => {
                btns.addEventListener('click', (e) => {
                    e.preventDefault()
                    oldremove()
                    btns.parentElement.parentElement.classList.add('active')
                })
            })
            function oldremove() {
                btn.forEach(btns => {
                    btns.parentElement.parentElement.classList.remove('active')
                })
            } 
  }
 
}
offerCardFunc()




})(jQuery);
