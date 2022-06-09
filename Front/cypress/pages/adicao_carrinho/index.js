import Base from '../base_page/index'

const el = require('./elements').ELEMENTS;
let name
let price

function replicar_info(){
        cy.xpath(el.ELEMENTS.XPATH_INPUT_FIRST_ITEM_NAME).then(($nome) => {
            const nome = $nome.prop('title')
            name = nome
        
            
        })
        cy.xpath(el.ELEMENTS.XPATH_INPUT_FIRST_ITEM_PRICE).then(($preco) => {
            const preco = $preco.html() 
            price = preco
        })

        cy.fixture("adicao_carrinho.json").then((itens) =>{

        itens.nome = name
        itens.price = price          
        })


}

export class Automation_Practice extends Base{
    static acessar_home(){
            super.visit(Cypress.env("practice"))
        }


    static preencher_pesquisa(produto){
        super.typeElement(el.ELEMENTS.INPUT_SEARCH, produto)

    }
    static clicar_pesquisa(){
       
        super.clickElementByXpath(el.ELEMENTS.XPATH_INPUT_SEARCH_BUTTON)

    }

    static salvar_informacoes_produto(){
        replicar_info();
    }
                

    static adicionar_primeiro_produto(){
        super.clickElementByXpath(el.ELEMENTS.XPATH_INPUT_FIRST_ITEM)
    }

    static verificar_item_carrinho(){
        super.validatePageContainsText("Product successfully added to your shopping cart")
        super.validateElementInnerText(el.ELEMENTS.INPUT_ORDER_ITEM_NAME, name)
        super.getElement(el.ELEMENTS.INPUT_ORDER_ITEM_PRICE).then(($preco) => {
            const precoAssert = $preco.html()
            expect(price).to.contain(precoAssert)
        })
    }

    static clicar_no_botao_de_checkout(){
        super.clickElementByXpath(el.ELEMENTS.XPATH_INPUT_CHECKOUT_BUTTON)
    }

    static validar_redirecionamento_checkout(){
        super.validatePageContainsText("Shopping-cart summary")
        super.validateUrlPartialEndpoint("/index.php?controller=order")

    }
    static verificar_item_checkout(){
        super.getElementByXPath(el.ELEMENTS.XPATH_INPUT_CHECKOUT_NAME).then(($btn) => {
            const nameAssert = $btn.html()
            expect(name).to.contain(nameAssert)
        })
        super.getElement(el.ELEMENTS.INPUT_CHECKOUT_PRICE).then(($preco) => {
            const precoAssert = $preco.html()
            expect(price).to.contain(precoAssert)
        })
    }
    
    









}