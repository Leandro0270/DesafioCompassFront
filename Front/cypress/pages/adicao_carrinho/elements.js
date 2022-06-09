export const ELEMENTS = {
    
    ELEMENTS:{
        XPATH_INPUT_SEARCH_BUTTON: "//button[@name='submit_search']",
        XPATH_INPUT_FIRST_ITEM: '//ul[@class="product_list grid row"]/li[1]//a[@title="Add to cart"]',
        XPATH_INPUT_FIRST_ITEM_NAME: '//ul[@class="product_list grid row"]/li[1]//a[@class="product-name"]',
        XPATH_INPUT_FIRST_ITEM_PRICE: '//ul[@class="product_list grid row"]/li[1]//div[@class="left-block"]//span[@itemprop="price"]',
        XPATH_INPUT_CHECKOUT_BUTTON: '//a[@title="Proceed to checkout"]',
        XPATH_INPUT_CHECKOUT_NAME: '//td[@class="cart_description"]//a',
        INPUT_CHECKOUT_PRICE:'#total_product',
        INPUT_ORDER_ITEM_NAME: "#layer_cart_product_title",
        INPUT_ORDER_ITEM_PRICE: "#layer_cart_product_price",
        INPUT_SEARCH:"#search_query_top"
    }
}