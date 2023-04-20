# Utiliza la imagen de Node.js como base
FROM nginx

# Establece el directorio de trabajo en /app
WORKDIR /usr/share/react

# Copia el archivo de configuración de paquetes a /app
RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs

COPY package*.json ./

RUN npm install
COPY . .

RUN npm run build

#Borrar el catch 
RUN rm -r /usr/share/nginx/html/*

RUN cp -a dist/. /usr/share/nginx/html
