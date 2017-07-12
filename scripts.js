/* eslint-disable no-undef */


$('.logout').click(function(){
    window.console.log('Attempt to log logout');
    mParticle.Identity.logout();
});

$('.login').click(function(){
    window.console.log('Attempt to log login');
    mParticle.Identity.login();
});

$('.modify').click(function(){
    window.console.log('Attempt to log modify');
    mParticle.Identity.modify();
});
