import React, { useEffect, useState } from "react";
import "./infiniteScroll.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { NewEmployeeType } from "../../types/employee";
import { HStack, Input, Text, useDisclosure } from "@chakra-ui/react";
import { getEmployee, getEmployee3 } from "../../lb/controller";
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
  const [hasMore, setHasMore] = useState(true);

  const getEmployeesData = async (paginacion: any) => {
    const { docs } = await getEmployee3(paginacion.last);
    console.log(docs);
    const allObject = docs.map((doc) => doc.data());
    console.log(allObject);
    const firstDoc = allObject.length;
    const lastDoc = allObject.length + 20;
    setPaginacion({ first: firstDoc, last: lastDoc });

    console.log({ firs: firstDoc, last: lastDoc });
    //setUsers((u) => allObject.concat(u));
    setUsers(allObject);
    setHasMore(firstDoc < company.length);
    console.log(firstDoc < company.length);
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
            getEmployeesData(paginacion.last);
          }}
          hasMore={true}
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
