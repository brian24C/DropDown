import { NewEmployeeType } from "../types/employee";

import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
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
        <TableCaption></TableCaption>
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
      </Table>
    </TableContainer>
  );
};

export default Information;
