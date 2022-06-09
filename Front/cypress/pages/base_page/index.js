
export default class Base {

    static visit(path = "") {
        cy.visit(path);
    }

    static explicitWait(seconds = 2000){
        cy.wait(seconds)
    }

    static implicitWait(method = "GET", endpoint = "", alias='loadPageFirst', status = 200){
        cy.intercept({
            method: method,
            url: endpoint,
        }).as(alias);

        cy.wait(`@${alias}`, { timeout: Cypress.env('global_timeout') }).its('response.statusCode').should('equal', status)
    }

    static getElement(elementID, pScroll = true){
        if(pScroll)
            return cy.get(elementID, { timeout: Cypress.env('global_timeout') }).scrollIntoView()
        else
            return cy.get(elementID, { timeout: Cypress.env('global_timeout') })
    }

    static getElementByXPath(element, index = undefined, scrollIntoView = false) {
        let elem;

        if (typeof index !== 'undefined' || index >= 0) {
            if(!scrollIntoView)
                elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') }).eq(index)
            else
                elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') }).eq(index).scrollIntoView()
        } else {
            if(!scrollIntoView)
                elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') })
            else
                elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') }).scrollIntoView()
        }

        return elem;
    }

    static getElementText(element, index = undefined) {
        return this.getElement(element, index).should('be.visible').invoke('text')
    }

    static getElementTextByXpath(element, index = undefined) {
        return this.getElementBy(element, index).should('be.visible').invoke('text')
    }

    static clickElement(elementID){
        return this.getElement(elementID).click({force: true});
    }


    static clickElementByXpath(elementID){
        return this.getElementByXPath(elementID).click({force: true});
    }

    
    static typeElement(elementID, text, opt_delay=10){
        this.getElement(elementID).type(text, { force: true, delay: opt_delay});
    }

    static typeElementByXpath(elementID, text){
        this.getElementByXPath(elementID).type(text, { force: true });
    }

    static validateUrlPartialEndpoint(endpoint){
        cy.url({ timeout: Cypress.env('global_timeout')}).should('include', endpoint)
    }


    static validateElementText(elementID, text){
        this.getElement(elementID).should('have.text', text)
    }

    static validateElementInnerText(elementID, text){
        this.getElement(elementID).should('have.text', text)
    }

    static validatePageContainsText(text){
        cy.contains(text, { timeout: Cypress.env('global_timeout') }).should('be.visible')
    }

}

