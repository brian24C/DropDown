export const generarIdAleatorio = (longitud: number) => {
  const caracteresPermitidos =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const caracteresPermitidosLength = caracteresPermitidos.length;
  const valoresAleatorios = new Uint32Array(longitud);
  window.crypto.getRandomValues(valoresAleatorios);
  let idGenerado = "";
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = valoresAleatorios[i] % caracteresPermitidosLength;
    idGenerado += caracteresPermitidos[indiceAleatorio];
  }
  return idGenerado;
};
