import { useEffect, useState } from "react";
import "./InfiniteScrollC.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { NewEmployeeType } from "../../types/employee";
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
import { getEmployee2, getEmployee3 } from "../../lb/controller";
interface Props {
  company: NewEmployeeType[];
  onClick: (name: string) => void;
}

const InfiniteScrollCtablePrueba = ({ company, onClick }: Props) => {
  const [users, setUsers] = useState<NewEmployeeType[]>([]);
  // const [paginacion, setPaginacion] = useState({
  //   first: 0,
  //   last: 20,
  // });
  const [paginacion, setPaginacion] = useState(20);

  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const getEmployeesData2 = () => {
    const resultado = company.slice(0, paginacion);
    setUsers(resultado);
    console.log(company);
    setHasMore(paginacion < company.length);
  };

  useEffect(() => {
    getEmployeesData2();
  }, [paginacion, company]);

  return (
    <div className="infinite-scroll-container-table" id="infiniteScroll">
      {paginacion !== null ? (
        <InfiniteScroll
          dataLength={users.length}
          next={() => {
            setPaginacion(paginacion + 20);
            //getEmployeesData(paginacion.last);
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

export default InfiniteScrollCtablePrueba;
