// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.Server.defaults({
  delay: 500,
  force404: false,
  ignore: (xhr) => {
    return true;
  }
})

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('$ is not defined')) {
    return false
  }

  if(err.message.includes('undefined'))
    return false
})

/*Cypress.on('fail', (error, runnable) => {
  debugger

  // we now have access to the err instance
  // and the mocha runnable this failed on

  throw error // throw error to have test still fail
})*/

// Alternatively you can use CommonJS syntax:
// require('./commands')

  /*Cypress.on('fail', (error, runnable) => {
    debugger
  
    // we now have access to the err instance
    // and the mocha runnable this failed on
  
    thro
    w error // throw error to have test still fail
  })*/

