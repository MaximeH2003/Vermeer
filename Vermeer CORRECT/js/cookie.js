/*              AJOUT AIDE ANIMATION COOKIE             */

// function toggleNavBar() {
//     const navBar = document.getElementById('navBarPop');

//     // Si la barre de navigation est actuellement cachée, l'afficher. Sinon, la cacher.
//     if (navBar.style.display === 'none' || navBar.style.display === '') {
//         navBar.style.display = 'block';
//     } else {
//         navBar.style.display = 'none';
//     }
// }

// Fonction pour gérer le clic sur le bouton "accepter"
function hideCookieBar() {
    document.getElementById('cookie-banner').style.display = 'none';
}

// Fonction pour gérer le clic sur le bouton "refuser"
function keepCookieBar() {
    document.getElementById('cookie-paragraph1').style.display = 'none';
    document.getElementById('cookie-paragraph2').style.display = 'none';
    document.getElementById('cookie-paragraph3').style.display = 'none';

    // document.getElementById('cookie-banner').style.display = 'none';         finalement on le garde
    const cookieContent = document.getElementById('cookie-content');
    cookieContent.innerHTML = '<p>Êtes vous sûr de ne pas accepter les cookies ? Cela nous permettra de vous offrir des publicités pouvant vous intérésser.</p><button class="btn-refuser" id="cookieButton" onclick="hideCookieBar()">Refuser les cookie</button><button class="btn-accepter" id="cookieButton" onclick="hideCookieBar()">Accepter les cookie</button>';
    document.getElementById('cookie-banner').style.height = '6.5em';
    // document.getElementById('cookie-banner').style.margin = '20px' ;
    // document.getElementById('cookie-banner').style.right = '10px';


    document.getElementById('cookieButton').style.display = 'none';
}
