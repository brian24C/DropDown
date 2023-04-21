import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import { empresa_colecction } from "../lb/controller";
import { NewEmployeeType } from "../types/employee";
import { useEffect } from "react";

interface Props {
  setCompany: (company: NewEmployeeType[]) => void;
  setUsers: (users: NewEmployeeType[]) => void;
  setUsersfilter: (usersFilter: NewEmployeeType[]) => void;
  setIsLoading: (loadnig: boolean) => void;
}

const useGetEmployee = ({
  setCompany,
  setUsers,
  setUsersfilter,
  setIsLoading,
}: Props) => {
  return useEffect(
    () =>
      onSnapshot(
        empresa_colecction,
        (snapshot: QuerySnapshot<DocumentData>) => {
          setCompany(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );

          setUsers(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );

          setUsersfilter(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
          setIsLoading(false);
        }
      ),
    []
  );
};

export default useGetEmployee;
