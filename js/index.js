window.addEventListener('load', function(e){

    // Mobile Nav Menu 

    const menuToggle = document.querySelector('.nav-toggle');
    let menuOpen = false;

    menuToggle.addEventListener('click', (e) => {

     // Toggles the hamburger icon to show or hide the navigation menu
    
    document.querySelector('.nav-bar').classList.toggle('show-nav');

    // Handles the hamburger animation
    
        if(!menuOpen){
            menuToggle.classList.add('open');
            menuOpen = true;
          } else {
            menuToggle.classList.remove('open');
            menuOpen = false;
          }
    });

    // Ripple Water Effect

    $('.home-page-container').ripples({
      dropRadius: 15,
      perturbance: 0.02
    })

    init_pointer({
      pointerColor: "purple", // Css color
      ringSize: 15, // Pixels
      ringClickSize: 10 // Pixels when clicking
    })

})