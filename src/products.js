const products = [
    {
        id : 1,
        title : 'Iphone 8',
        description : 'El iPhone 8 es un smartphone de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 779,
        pictureUrl : 'https://w7.pngwing.com/pngs/770/457/png-transparent-iphone-8-plus-iphone-x-apple-4g-telephone-iphone8-gadget-mobile-phone-mobile-phones.png'
    },
    {
        id : 2,
        title : 'Iphone X',
        description : 'El iPhone X es un smartphone de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 779,
        pictureUrl : 'https://w7.pngwing.com/pngs/279/6/png-transparent-space-gray-iphone-x-iphone-x-iphone-8-plus-iphone-7-samsung-galaxy-telephone-iphone-x-gadget-mobile-phone-case-mobile-phone.png'
    },
    {
        id : 3,
        title : 'Iphone XS',
        description : 'El iPhone XS es un smartphone de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 779,
        pictureUrl : 'https://img2.freepng.es/20190606/fjy/kisspng-apple-iphone-xs-max-iphone-xr-iphone-6-64-gb-electronics-apple-iphone-xs-max-512-gb-gold-eu-o-5cf9c12e98c138.0963858115598717906257.jpg'
    },
    {
        id : 4,
        title : 'Iphone 12',
        description : 'El iPhone 8 es un smartphone de gama alta, pero a pesar de ello, Apple ha querido comercializar este modelo a un precio bastante asequible',
        price : 779,
        pictureUrl :'https://storage.comprasmartphone.com/smartphones/apple-iphone-12.png'
    }
];

export const getProducts = () => {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(products)
        },2000)
    })
}

