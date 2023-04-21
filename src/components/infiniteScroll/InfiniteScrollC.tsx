import { useEffect, useState } from "react";
import "./InfiniteScrollC.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { NewEmployeeType } from "../../types/employee";
import { Spinner, Text } from "@chakra-ui/react";

interface Props {
  company: NewEmployeeType[];
  onClick: (name: string) => void;
}

const InfiniteScrollC = ({ company, onClick }: Props) => {
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

  return (
    <div className="infinite-scroll-container" id="infiniteScroll">
      {paginacion !== null ? (
        <InfiniteScroll
          dataLength={users.length}
          next={() => {
            //getEmployeesData2(paginacion.first, paginacion.last);
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
          {users?.map((employee) => {
            return (
              <Text
                key={employee.id}
                fontSize="xl"
                onClick={() => {
                  onClick(employee.nombre!);
                }}
                cursor="pointer"
              >
                {" "}
                {employee.nombre}
              </Text>
            );
          })}
        </InfiniteScroll>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfiniteScrollC;
