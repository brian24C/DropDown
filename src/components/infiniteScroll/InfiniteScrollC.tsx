import { useEffect, useState } from "react";
import "./InfiniteScrollC.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { NewEmployeeType } from "../../types/employee";
import { Text } from "@chakra-ui/react";
import { getEmployee2, getEmployee3 } from "../../lb/controller";
interface Props {
  company: NewEmployeeType[];
  onClick: (name: string) => void;
}

const InfiniteScrollC = ({ company, onClick }: Props) => {
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
          loader={<h4> Loading ...</h4>}
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
