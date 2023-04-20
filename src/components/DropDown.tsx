import { HStack, Input, Text, useDisclosure } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import PopUp from "./PopUp";
import { NewEmployeeType } from "../types/employee";
import Information from "./Information";
import { AiOutlineSearch } from "react-icons/ai";
import InfiniteScrollC from "./infiniteScroll/InfiniteScrollC";

interface Props {
  company: NewEmployeeType[];
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (name: string) => void;
  onIconClick: (name: string) => void;
}

const DropDown = ({
  company,
  search,
  onChange,
  onClick,
  onIconClick,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ position: "relative" }}>
        <HStack>
          <Input
            placeholder="Buscar por nombre"
            type="text"
            value={search}
            onChange={(e) => onChange(e)}
          />
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<AiOutlineSearch />}
            onClick={() => onIconClick(search)}
          />
        </HStack>
        <div
          style={{
            position: "absolute",
            background: "#fff",
            top: 40,
            left: 0,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            width: "100%",
          }}
        >
          {search && company.length ? (
            <div>
              <div>
                <Text
                  fontSize="md"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  cursor="pointer"
                >
                  {"add employee +"}
                </Text>
              </div>

              <InfiniteScrollC company={company} onClick={onClick} />
            </div>
          ) : null}
        </div>
      </div>
      {isOpen && <PopUp setIsOpen={setIsOpen} isOpen={isOpen} />}
    </>
  );
};

export default DropDown;
