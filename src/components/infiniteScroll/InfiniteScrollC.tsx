import React, { useEffect, useState } from "react";
import "./infiniteScroll.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { NewEmployeeType } from "../../types/employee";
import { HStack, Input, Text, useDisclosure } from "@chakra-ui/react";
import { getEmployee, getEmployee2 } from "../../lb/controller";
interface Props {
  company: NewEmployeeType[];
  onClick: (name: string) => void;
}

const InfiniteScrollC = ({ company, onClick }: Props) => {
  const [users, setUsers] = useState<NewEmployeeType[]>([]);
  const [paginacion, setPaginacion] = useState({
    first: 0,
    last: 4,
  });

  const getEmployeesData = async (paginacion: any) => {
    const { docs } = await getEmployee2(paginacion.last);
    console.log(docs);
    const allObject = docs.map((doc) => doc.data());
    const firstDoc = allObject.length;
    const lastDoc = allObject.length + 4;
    setPaginacion({ first: firstDoc, last: lastDoc });
    console.log({ firs: firstDoc, last: lastDoc });
    setUsers((p) => allObject.concat(p));
  };
  console.log({
    afuera: "afuera",
    firs: paginacion.first,
    last: paginacion.last,
  });
  useEffect(() => {
    getEmployeesData(paginacion);
  }, []);

  return (
    <div className="infinite-scroll-container" id="infiniteScroll">
      {users.length != 0 ? (
        <InfiniteScroll
          dataLength={users.length}
          next={() => {
            getEmployeesData({ ...paginacion });
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
          <ul>
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
          </ul>
        </InfiniteScroll>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfiniteScrollC;
