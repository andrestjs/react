const products = [
    {
        id : 1,
        title : 'Iphone 8',
        description : 'El iPhone 8 es un smartphone de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 779,
        category:'celulares',
        pictureUrl : 'https://w7.pngwing.com/pngs/770/457/png-transparent-iphone-8-plus-iphone-x-apple-4g-telephone-iphone8-gadget-mobile-phone-mobile-phones.png'
    },
    {
        id : 2,
        title : 'Iphone X',
        description : 'El iPhone X es un smartphone de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 679,
        category:'celulares',
        pictureUrl : 'https://w7.pngwing.com/pngs/279/6/png-transparent-space-gray-iphone-x-iphone-x-iphone-8-plus-iphone-7-samsung-galaxy-telephone-iphone-x-gadget-mobile-phone-case-mobile-phone.png'
    },
    {
        id : 3,
        title : 'Iphone XS',
        description : 'El iPhone XS es un smartphone de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 879,
        category:'celulares',
        pictureUrl : 'https://img2.freepng.es/20190606/fjy/kisspng-apple-iphone-xs-max-iphone-xr-iphone-6-64-gb-electronics-apple-iphone-xs-max-512-gb-gold-eu-o-5cf9c12e98c138.0963858115598717906257.jpg'
    },
    {
        id : 4,
        title : 'Iphone 12',
        description : 'El iPhone 8 es un smartphone de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 979,
        pictureUrl :'https://storage.comprasmartphone.com/smartphones/apple-iphone-12.png'
    },
    {
        id : 5,
        title : 'Ipad Pro',
        description : 'El Ipad Pro es un dispositivo de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 1779,
        category : 'tablets',
        pictureUrl :'https://w7.pngwing.com/pngs/560/832/png-transparent-ipad-pro-12-9-inch-2nd-generation-apple-lightning-ipad-repair-electronics-gadget-mobile-phone.png'
    },
    {
        id : 6,
        title : 'Tablet Lenovo',
        description : 'La tablet Lenovo es un dipositivo de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 1279,
        category : 'tablets',
        pictureUrl :'https://w7.pngwing.com/pngs/261/872/png-transparent-samsung-galaxy-tab-2-lenovo-a10-tablet-android-ips-panel-large-pearl-gadget-electronics-netbook.png'
    },
    {
        id : 7,
        title : 'Surface',
        description : 'El Surface es un dispositivo de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 1979,
        category : 'tablets',
        pictureUrl :'https://img2.freepng.es/20180418/ufe/kisspng-surface-pro-2-surface-pro-3-surface-pro-4-tablet-5ad6dc1a565313.3341290715240304903536.jpg'
    },
    {
        id : 8,
        title : 'MacBook Pro',
        description : 'El Macbook Pro es un dispositivo de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 3979,
        category : 'notebooks',
        pictureUrl :'https://w7.pngwing.com/pngs/918/793/png-transparent-macbook-pro-13-inch-macbook-air-laptop-macbook-gadget-electronics-laptop.png'
    },
    {
        id : 9,
        title : 'Laptop Asus',
        description : 'El Asus es un dispositivo de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 2779,
        category : 'notebooks',
        pictureUrl :'https://w7.pngwing.com/pngs/391/725/png-transparent-laptop-asus-computer-laptop-electronics-netbook-computer.png'
    }
];

export const getProducts = () => {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(products)
        },800)
    })
}

export const getItem = (id) => {
    
    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(products.filter(prod => prod.id == id))
        },800)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products.filter(prod => prod.category == category))
        },300)
    })
}
