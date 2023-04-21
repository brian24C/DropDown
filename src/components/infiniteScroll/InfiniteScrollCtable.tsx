import { useEffect, useState } from "react";
import "./InfiniteScrollC.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { NewEmployeeType } from "../../types/employee";
import {
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import TableSkeleton from "../TableSkeleton";
interface Props {
  company: NewEmployeeType[];
  onClick: (name: string) => void;
  search: string;
  isLoading: boolean;
}

const InfiniteScrollCtablePrueba = ({
  company,
  onClick,
  search,
  isLoading,
}: Props) => {
  const [users, setUsers] = useState<NewEmployeeType[]>([]);
  const [paginacion, setPaginacion] = useState(20);

  const [hasMore, setHasMore] = useState(true);

  const getEmployeesData2 = () => {
    const resultado = company.slice(0, paginacion);
    setUsers(resultado);

    setHasMore(paginacion < company.length);
  };

  useEffect(() => {
    getEmployeesData2();
  }, [paginacion, company]);

  if (isLoading === true) return <TableSkeleton></TableSkeleton>;

  return (
    <div className="infinite-scroll-container-table" id="infiniteScroll">
      <InfiniteScroll
        dataLength={users.length}
        next={() => {
          setPaginacion(paginacion + 20);
        }}
        hasMore={hasMore}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        loader={<Spinner color="red.500" />}
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
          </Table>
        </TableContainer>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollCtablePrueba;
