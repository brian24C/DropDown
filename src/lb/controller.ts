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

export const getEmployee = async (num: number, lastDoc: NewEmployeeType) => {
  const result = await getDocs(
    query(
      empresa_colecction,
      orderBy("nombre", "asc"),

      startAfter(lastDoc.id),
      limit(num)
    )
  );

  return result;
};

export const getEmployee2 = async () => {
  const result = await getDocs(
    query(empresa_colecction, orderBy("nombre", "asc"))
  );
  return result;
};

export const getEmployee3 = async (num: number) => {
  const result = await getDocs(query(empresa_colecction, limit(num)));

  return result;
};
