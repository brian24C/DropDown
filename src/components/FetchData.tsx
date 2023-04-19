import React, { useEffect, useState } from "react";
import { empresa_colecction } from "../lb/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { NewEmployeeType } from "../types/employee";
import Information from "./Information";

const FetchData = () => {
  const [company, setCompany] = useState<NewEmployeeType[]>([]);

  useEffect(
    () =>
      onSnapshot(
        empresa_colecction,
        (snapshot: QuerySnapshot<DocumentData>) => {
          setCompany(
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

  return (
    <>
      {company && company.length ? (
        <div>
          {company?.map((employee) => (
            <Information key={employee.id} employee={employee} />
          ))}
        </div>
      ) : (
        <h2>No hay</h2>
      )}
    </>
  );
};

export default FetchData;
