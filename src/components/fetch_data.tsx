import React, { useEffect, useState } from "react";
import { empresa_colecction } from "../lb/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { NewEmployeeType } from "../types/empleados";

const Prueba = () => {
  const [empleados, setEmpleados] = useState<NewEmployeeType[]>([]);

  useEffect(
    () =>
      onSnapshot(
        empresa_colecction,
        (snapshot: QuerySnapshot<DocumentData>) => {
          setEmpleados(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }
      ),
    []
  );

  console.log(empleados, "hotels");
  return <div>prueba</div>;
};

export default Prueba;
