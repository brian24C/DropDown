import React, { useEffect, useState } from "react";
import "./InfiniteScrollC.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { NewEmployeeType } from "../../types/employee";
import {
  HStack,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { getEmployee, getEmployee2, getEmployee3 } from "../../lb/controller";
interface Props {
  company: NewEmployeeType[];
  onClick: (name: string) => void;
}

const InfiniteScrollC = ({ company, onClick }: Props) => {
  const [users, setUsers] = useState<NewEmployeeType[]>([]);
  const [paginacion, setPaginacion] = useState({
    first: 0,
    last: 20,
  });
  const [isLoading, setIsLoading] = useState(true);

  const [hasMore, setHasMore] = useState(true);

  const getEmployeesData = async (paginacion: any) => {
    const { docs } = await getEmployee3(paginacion.last);
    const data_total = await getEmployee2();

    console.log(docs);
    const allObject = docs.map((doc) => doc.data());
    const data_total_object = data_total.docs.map((doc) => doc.data());
    console.log(allObject);
    const firstDoc = allObject.length;
    const lastDoc = allObject.length + 20;
    setPaginacion({ first: firstDoc, last: lastDoc });

    console.log({ firs: firstDoc, last: lastDoc });
    setUsers(allObject);
    setHasMore(firstDoc < data_total_object.length);
    console.log(firstDoc < data_total_object.length);
  };

  const getEmployeesData2 = (start: number, final: number) => {
    const resultado = company.slice(0, final);

    const firstDoc = final;
    const lastDoc = final + 20;

    setPaginacion({ first: firstDoc, last: lastDoc });
    setUsers(resultado);
  };
  useEffect(() => {
    getEmployeesData(paginacion);
  }, []);

  return (
    <div className="infinite-scroll-container" id="infiniteScroll">
      {paginacion !== null ? (
        <InfiniteScroll
          dataLength={users.length}
          next={() => {
            //getEmployeesData2(paginacion.first, paginacion.last);
            getEmployeesData(paginacion.last);
          }}
          hasMore={hasMore}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          loader={<h4> Loading ...</h4>}
          scrollableTarget="infiniteScroll"
        >
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
                {users?.map((employee) => (
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
        </InfiniteScroll>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfiniteScrollC;
