import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { NewEmployeeType } from "../types/employee";

export const fireStore = getFirestore(app);

export const empresa_colecction = collection(fireStore, "empresa_bd");

export const SaveEmployee = (employee: NewEmployeeType) => {
  addDoc(collection(fireStore, "empresa_bd"), { ...employee });
};
