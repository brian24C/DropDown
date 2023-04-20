import React from "react";
import { NewEmployeeType } from "../types/employee";
import { Input, Text } from "@chakra-ui/react";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface Props {
  company: NewEmployeeType[];
}

const Information = ({ company }: Props) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Si se puede!</TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Razon Social</Th>
            <Th isNumeric>Codigo</Th>
            <Th isNumeric>telefono</Th>
            <Th isNumeric>NIT</Th>
          </Tr>
        </Thead>
        <Tbody>
          {company?.map((employee) => (
            <Tr key={employee.id}>
              <Td>{employee.nombre}</Td>
              <Td>{employee.razon_social}</Td>
              <Td isNumeric>{employee.codigo}</Td>
              <Td isNumeric>{employee.telefono}</Td>
              <Td isNumeric>{employee.nit}</Td>
            </Tr>
          ))}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
};

export default Information;

// return <div>{employee.nombre}</div>;
