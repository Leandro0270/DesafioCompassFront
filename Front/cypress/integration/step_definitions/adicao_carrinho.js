import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'

import {Automation_Practice} from '../../pages/adicao_carrinho/index'



Given(`que estou na pagina home`, () => {
    Automation_Practice.acessar_home();
})

When(`pesquiso pelo produto {string}`, (produto) =>{
    Automation_Practice.preencher_pesquisa(produto)
    Automation_Practice.clicar_pesquisa();
    Automation_Practice.salvar_informacoes_produto();
})

When(`clico no botão Add to cart do primeiro produto`, () =>{
    Automation_Practice.adicionar_primeiro_produto();
})


Then(`o produto deve ser adicionado ao carrinho`,() =>{
    Automation_Practice.verificar_item_carrinho()
    Automation_Practice.clicar_no_botao_de_checkout()
    Automation_Practice.validar_redirecionamento_checkout()
    Automation_Practice.verificar_item_checkout()
})
