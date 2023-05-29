# Shipping App API

Esta es una APP para realizar un seguimiento preciso de envíos de documentos. Permite consultar su estado, detalle y localización de cada paquete.

## Stack
 React.js - Next.js - Tailwindcss - Socket.io
 
## Pruebas:
APP: https://shipping-app-p.vercel.app/
API: https://shipping-api-talo.herokuapp.com

## Características

- Consulta de paquetes.
- Notificación del estado de los paquetes.
- Registro de eventos de seguimiento.
- Geolocalización de paquetes.
- Comunicación en tiempo real utilizando WebSockets.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/talo94/shipping-app.git

   ```

2. Instala las dependencias:
  ```bash
   npm install
```
3. Configuración:
  Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias. Puedes utilizar el archivo .env.example como referencia. Para probar este proyecto en local necesitaras un  API KEY para el mapa de Google Maps.

4.Iniciar el servidor:
```bash
  npm run dev
```
5. Navega
   Abre en el navegador la siguiente url: http://localhost:3000
   
## Uso
1. Al abrir el enlace se listarán todos los paquetes que están en la base de datos y se seleccionará por defecto el primero asi:
  ![image](https://github.com/talo94/shipping-app/assets/25178778/4f7d8649-930c-47a4-a910-daa48b522991)

2. Puedes seleccionar otro paquete dando clic en las fechas el input:
 ![image](https://github.com/talo94/shipping-app/assets/25178778/f415506b-437b-4ef6-8ef7-d9f12f353e6b)
 
 3. Al recibir una notificación desde el Api se mostrará un toast y la información de la pantalla se actualizará automaticamente:
  ![image](https://github.com/talo94/shipping-app/assets/25178778/4d9fd7e3-f138-4c9c-a4e6-7602368130ae)

## API
 

## WebSocket

La API también utiliza WebSockets para enviar actualizaciones en tiempo real sobre los paquetes. Al recibir una actualización del paquete que está seleccionado, se actualizará el detalle junto con el mapa y se mostrará una Notificación para informar este cambio.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error, tienes ideas para nuevas características o mejoras, por favor, abre un issue o envía un pull request.

## Versión Mobile
![image](https://github.com/talo94/shipping-app/assets/25178778/bc37deb2-93dd-4d23-ba0b-041b110c71b3)

