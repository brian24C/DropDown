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
    <>{company && company.length ? <Information company={company} /> : null}</>
  );
};

export default FetchData;
