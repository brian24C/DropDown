import React from "react";
import { NewEmployeeType } from "../types/employee";

interface Props {
  employee: NewEmployeeType;
}

const Information = ({ employee }: Props) => {
  console.log(employee);
  return <div>{employee.nombre}</div>;
};

export default Information;
