Para correr la app en Docker

- docker build . -t website:latest
- docker run -it --rm -d -p 8080:80/tcp --name web website
  Para ver tu contenedor correr
- docker ps -a

Luego ingresar a http://localhost:8080/

Fotos del funcionamiento de mi app:
