import { NewEmployeeType } from "../types/employee";
import Information from "./Information";

interface Props {
  company: NewEmployeeType[];
}

const FetchData = ({ company }: Props) => {
  return (
    <>{company && company.length ? <Information company={company} /> : null}</>
  );
};

export default FetchData;
