import CriiptoAuth from '@criipto/auth-js';

var criiptoAuth = new CriiptoAuth({
  domain: 'samples.criipto.id',
  clientID: 'urn:criipto:samples:vue',
  store: sessionStorage,
});

export default criiptoAuth;
