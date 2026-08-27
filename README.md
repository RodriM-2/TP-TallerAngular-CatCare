# Trabajo Practico 'Cat Care'
## Realizado para seminario 'Introduccion a Angular' (2026)

### Link a [StackBlitz](https://stackblitz.com/~/github.com/RodriM-2/TP-TallerAngular-CatCare) para testing online 

### [LinkedIn](https://www.linkedin.com/in/rodrigo-membrilla-2a4065402/)

### Desglose basico

➤ El proyecto es una simulacion de carrito de compras muy basico realizado con fines de entender el funcionamiento de componentes standalone y la comunicacion mediante el uso de servicios.

➤ La manera en la que funciona es; mediante el 'slider' usted puede agregar cualquier gato disponible asignandole su dia correspondiente (Cada gato incluye sus propios dias). Luego, puede confirmar el horario en el carrito de compras y este quedara reservado. En caso de querer liberar los horarios, la seccion 'Chequear Gatos' en la parte superior contiene una opcion para esto.

### Componentes y sus funciones

➤ El folder **cat-schedule** contiene los componentes la pagina principal (Listado y carrito de compra) mientras que **cat-checking** contiene la seccion secundaria para liberar los horarios de todas las mascotas

➤ folder **"cat-cart"** corresponde al carrito de compras (lado derecho) donde pueden verse los gatos donde usted ya ha seleccionado un horario y esperan a confirmacion

➤➤  **cat-cart-service** e **input-confirm-put** a su vez funcionan junto al carrito para pushear el cambio del dia seleccionado de los gatos seleccionados

➤ folder **cat-list** es donde se procesa el listado de los gatos para que sean seleccionables por el usuario junto al **input-string-array** el cual es el slider.

➤ ➤  **cat-data** es el servicio por el cual se comunica el listado y trae todos los gatos disponibles desde la base de datos.

➤ **free-all-cats** es el mecanismo usado para liberar los horarios de todos los gatos
