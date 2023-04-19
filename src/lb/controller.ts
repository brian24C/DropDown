import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

export const fireStore = getFirestore(app);

// EMPRESA COLECCIONT

export const empresa_colecction = collection(fireStore, "empresa_bd");
