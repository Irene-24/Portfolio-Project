function MenuHandler() {
    
    const menu = document.querySelector('.menu ul');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();

        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    window.addEventListener("resize", myFunction);
    function myFunction() {

        if (window.innerWidth >= 380 && menu.style.display === 'none') 
        {
            menu.style.display = 'block';
        }
        else if (window.innerWidth < 380)
        {
            menu.style.display = 'none';
        }
    } 

    
}

MenuHandler();