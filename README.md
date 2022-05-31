#Proyecto de Ecommerce de el curso de React.js by CoderHouse 
##Primera entrega del proyecto Final

En esta primera entrega del proyecto se realizo la navegacion con 'react-router-dom' que es un complemento de react que nos facilita un monton el trabajo con la navegacion en nuestra app.

### Rutas creadas
Se crearon las siguientes rutas : 
#### '/'
Esta ruta nos muestra todos los productos listados
#### '/item/:id'
En esta ruta podemos visualizar los detalles de cada producto listado
#### '/category/:id'
En esta ruta podemos ver los productos filtrados por una categoria

### Nav (Link)
Los enlaces 'Link' se agregaron en en componente 'Nav.jsx' y estos funcionan de la siguiente manera
#### Link en logo 
Redirecciona al listado de todos los productos
#### Link en Categorias (Celulares,Tablets,Notebooks)
Redireccionan al listado de productos segun la categoria
#### Link en los items listados (Agregado en Item.jsx)
Redirecciona al detalle de producto segun su Id
