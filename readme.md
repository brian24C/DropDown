## DEPLOY en VERCEL:
https://app-dropdown.vercel.app/
### Autor: 
- Brian Josue Castro Cuela


## Instrucciones para ejecutar la aplicación en Docker
### Construir la imagen Docker
- docker build . -t website:latest

- docker run -it --rm -d -p 8080:80/tcp --name web website

Luego ingresar a http://localhost:8080/

### Fotos de funcionamiento app:

#### Drop-down dónde se en la 1era opcion se puede agregar un nuevo empleado
![scroll](https://user-images.githubusercontent.com/109192347/233522582-0f4a8e44-19c6-4f7f-a365-8f997ac6c95e.png)
#### A medida que se va deslizando y llega a los 20 resultados entonces van apareciendo más busquedas automaticamente
![dropdown más resultados](https://user-images.githubusercontent.com/109192347/233522818-2b0ebb87-e63a-4506-9823-52ca1fba74ff.png)
#### Cuando se presiona en "ADD NEW EMPLOYEE" te saldrá este popup dónde podrás agregar un nuevo empleado.
![popup](https://user-images.githubusercontent.com/109192347/233522941-d8277615-4e45-4faf-8da2-737ae98cd53c.png)
#### Al hacer click en algunos de la busqueda del dropdown o en la lupa azul permite filtrar. 
![filterSearch](https://user-images.githubusercontent.com/109192347/233523070-1f5e55ae-bc37-4fb0-a7be-012ed5bf5475.png)
