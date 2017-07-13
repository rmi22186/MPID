/* eslint-disable no-undef */

var userIdentitiesInput = {};
var userIdentitiesForApiRequest;
var copyUserAttributes = true;
var apiRequest;
var apiRequestCopy;


$('.build').click(function() {
    var userIdentityType1 = $('#userIdentityType1').val();
    var userIdentityType2 = $('#userIdentityType2').val();
    var userIdentityType3 = $('#userIdentityType3').val();

    if (userIdentityType1) {
        userIdentitiesInput[$('#userIdentityType1').val()] = $('#userIdentityValue1').val();
    }
    if (userIdentityType2) {
        userIdentitiesInput[$('#userIdentityType2').val()] = $('#userIdentityValue2').val();
    }
    if (userIdentityType3) {
        userIdentitiesInput[$('#userIdentityType3').val()] = $('#userIdentityValue3').val();
    }
    showUserIdentity();

    userIdentitiesForApiRequest = userIdentitiesInput;
    userIdentitiesInput = {};

    apiRequestCopy = apiRequest = {
        apiKey: 'e001b2b2eb5da649a42c633563135de1',
        initialIdentity: userIdentitiesForApiRequest,
        copyUserAttributes: copyUserAttributes
    };
    apiRequest = {};
})

function showUserIdentity() {
    $('.userIdentities').html(JSON.stringify(apiRequestCopy));
}

$('#copyUserAttributes').click(function() {
    copyUserAttributes = this.checked;
});












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

$('.logPageView').click(function(){
    window.console.log('Attempt to log page view');
    mParticle.logPageView();
});

$('.cookies').click(function(){
    window.console.log('Attempt to remove localstorage');
    mParticle.persistence.removeLocalStorage();
    window.console.log('new cookies: ' + mParticle.persistence.getLocalStorage());
    clearPage();
});

$('.init').click(function() {
    mParticle.init(devOptions);
});

setTimeout(function() {
    var data = mParticle.persistence.getLocalStorage(),
        currentSessionMPIDs = data.currentSessionMPIDs,
        currentUserMPID = data.currentUserMPID,
        currentSessionMPIDsHTML = '';
    window.console.log('localstorage');
    window.console.log(data);
    currentSessionMPIDs.forEach(function(mpid) {
        window.console.log(mpid);
        currentSessionMPIDsHTML += ('<li>' + mpid + '</li>');
    });
    window.console.log(currentSessionMPIDsHTML);

    $('.currentSessionMPIDs').html(currentSessionMPIDsHTML);
    window.console.log(currentSessionMPIDsHTML);
    $('.currentUserMPID').html(currentUserMPID);
}, 1000);


function clearPage() {
    $('.userIdentities').html('');
    $('.currentSessionMPIDs').html('');
    $('.currentUserMPID').html('');
}
