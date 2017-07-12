/* eslint-disable no-undef */

var devOptions = {
    apiKey: 'e001b2b2eb5da649a42c633563135de1', //apiKey for ParticleBox QA app
    initialIdentity: {
        userIdentities: {
            5: 'test123',
            6: 'foo@bar.com'
        },
        copyUserAttributes: true
    }
};
mParticle.init(devOptions);
