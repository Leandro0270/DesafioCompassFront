#language: pt
@carrinho
Funcionalidade: Adicionar item no carrinho
    Como usuário do chat
    Quero poder acessar a página de um produto e adicionar o produto no carrinho

    Contexto:
        Dado que estou na pagina home

        Esquema do Cenario: Pesquisa de produto
            Quando pesquiso pelo produto "<produto>"
            E clico no botão Add to cart do primeiro produto
            Então o produto deve ser adicionado ao carrinho

            Exemplos:
            |produto           |
            |Faded Short Sleeve|

