$(document).ready(function() {
    $('#mobileBtn').on('click', function() {
        $('#mobileMenu').toggleClass('active');
        $('#mobileBtn').find('i').toggleClass('fa-x');
    });

    ScrollReveal().reveal('#navbar h2', {
        origin: 'left',
        duration: 2000,
        distance: '30%'
    });

    ScrollReveal().reveal('#navcontent', {
        origin: 'top',
        duration: 2000,
        distance: '50%'
    });

    ScrollReveal().reveal('#buttonnav', {
        origin: 'right',
        duration: 2000,
        distance: '30%'
    });
    ScrollReveal().reveal('#mobileBtn', {
        origin: 'right',
        duration: 2000,
        distance: '50%'
    });
});