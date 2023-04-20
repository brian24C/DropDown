export interface NewEmployeeType {
  codigo?: string;
  id?: string;
  nit?: string;
  nombre?: string;
  razon_social?: string;
  telefono?: string;
}
export enum typesearch {
  codigo = "codigo",
  id = "id",
  nit = "nit",
  nombre = "nombre",
  razon_social = "razon_social",
  telefono = "telefono",
}
