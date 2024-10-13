const mainMenu = document.querySelector( '.main-head' );
window.addEventListener( 'scroll', ()=> {
    if( this.scrollY > 100 ){
        mainMenu.classList.add( 'slidedown' );
    }else{
        mainMenu.classList.remove( 'slidedown' );
    }
} );