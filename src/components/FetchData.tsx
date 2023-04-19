import React, { useEffect, useState } from "react";
import { empresa_colecction } from "../lb/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { NewEmployeeType } from "../types/employee";
import Information from "./Information";

interface Props {
  company: NewEmployeeType[];
}

const FetchData = ({ company }: Props) => {
  return (
    <>
      {company && company.length ? (
        <div>
          {company?.map((employee) => (
            <Information key={employee.id} employee={employee} />
          ))}
        </div>
      ) : (
        <h2>searching...</h2>
      )}
    </>
  );
};

export default FetchData;
