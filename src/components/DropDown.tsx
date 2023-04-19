import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";

import { BsChevronDown } from "react-icons/bs";
import PopUp from "./PopUp";
import { NewEmployeeType } from "../types/employee";
import Information from "./Information";

interface Props {
  company: NewEmployeeType[];
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const DropDown = ({ company, search, onChange }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleOptionClick = () => {
    // Mostrar el Popup cuando se haga clic en una opción del dropdown
    setShowPopup(true);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => onChange(e)}
          placeholder="Buscar por nombre"
        />
        <div
          style={{
            position: "absolute",
            background: "#fff",
            top: 24,
            left: 0,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            width: "100%",
          }}
        >
          {company && company.length ? (
            <div>
              {company?.map((employee) => (
                <Information key={employee.id} employee={employee} />
              ))}
            </div>
          ) : (
            <h2>Buscando...</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default DropDown;
