import React from "react";
import { NewEmployeeType } from "../types/employee";

interface Props {
  employee: NewEmployeeType;
}

const Information = ({ employee }: Props) => {
  return <div>{employee.nombre}</div>;
};

export default Information;
