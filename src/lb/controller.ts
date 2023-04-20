import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  startAfter,
  startAt,
} from "firebase/firestore";
import { app } from "./firebase";
import { NewEmployeeType } from "../types/employee";

export const fireStore = getFirestore(app);

// EMPRESA COLECCIONT

export const empresa_colecction = collection(fireStore, "empresa_bd");

export const SaveEmployee = (employee: NewEmployeeType) => {
  addDoc(collection(fireStore, "empresa_bd"), { ...employee });
};

export const getEmployee = async (num: number, lastDoc: {}) => {
  const result = await getDocs(
    query(
      empresa_colecction,
      orderBy("nombre", "asc"),
      limit(num),
      startAfter(lastDoc)
    )
  );
  return result;
};

export const getEmployee2 = async (num: number) => {
  const result = await getDocs(
    query(empresa_colecction, orderBy("nombre", "asc"), limit(num))
  );
  return result;
};
