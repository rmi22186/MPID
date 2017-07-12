$('.button1').click(function(){
    console.log('Attempt to Log Page View');
      mParticle.logPageView('www.google.com');
});

$('.button2').click(function(){
    console.log('Attempt to Log Transaction');
      mParticle.logEvent('Log Transaction',
                         mParticle.EventType.Transaction,
                         {'cost':300,'productId':'abc123'});
});

$('.button3').click(function(){
    console.log('Attempt to Log Commerce');
    var commerceTransactionAttributes = mParticle.eCommerce.createTransactionAttributes('id1', 'affiliation1', 'couponcode123, 300');
      mParticle.eCommerce.logPurchase(commerceTransactionAttributes);
});

$('.button4').click(function(){
    console.log('Attempt to Log PageEvent');
      mParticle.logEvent('Log Page Event',
                         mParticle.EventType.PageEvent,
                        {
                             button_number: 4,
                             color:'teal'
                         }
                     );
});

$('.button5').click(function(){
    console.log('Set User Property');
      mParticle.setUserIdentity(123123, 1);
});

$('.button6').click(function(){
    console.log('Set User Property');
      mParticle.setUserIdentity('abcd', 1);
});

$('.button7').click(function(){
    console.log('Set User Property');
      mParticle.setUserAttribute('longitude', 15);
});

$('.button8').click(function(){
    console.log('Set opt out');
      mParticle.setOptOut(true);
});
$('.button9').click(function(){
    console.log('Set opt in');
      mParticle.setOptOut(false);
});
