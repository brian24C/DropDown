import { ChangeEvent, useState } from "react";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import DropDown from "./components/DropDown";
import { NewEmployeeType, typesearch } from "./types/employee";
import { Text } from "@chakra-ui/react";
import useGetEmployee from "./hooks/useGetEmployee";
import InfiniteScrollCtable from "./components/infiniteScroll/InfiniteScrollCtable";

function App() {
  //const [users, setUsers] = useState<NewEmployeeType[]>([]);
  const [search, setSearch] = useState("");
  const [company, setCompany] = useState<NewEmployeeType[]>([]);
  const [usersfilter, setUsersfilter] = useState<NewEmployeeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchChange = (
    filtertype: typesearch,
    searchTerm: string | null,
    e: ChangeEvent<HTMLInputElement> | null
  ) => {
    setSearch(e?.target.value || searchTerm || "");
    filter(e?.target.value || searchTerm || "", filtertype);
  };

  const filter = (searchTerm: string, filter: typesearch) => {
    if (searchTerm === "") {
      setUsersfilter(company);
    } else {
      let resultsSearch = company.filter((element) => {
        if (
          element[filter!]
            ?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ) {
          return element;
        }
      });
      setUsersfilter(resultsSearch);
    }
  };

  // const filter_grid = (searchTerm: string, filter: typesearch) => {
  //   let resultsSearch = company.filter((element) => {
  //     if (
  //       element[filter]
  //         ?.toString()
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase())
  //     ) {
  //       return element;
  //     }
  //   });
  //   setSearch(searchTerm);
  //   setUsersfilter(resultsSearch);
  // };

  useGetEmployee({ setCompany, setUsersfilter, setIsLoading });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "100px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main" padding={10}>
        <Box justifyContent="center">
          <HStack spacing={5} paddingLeft={2} marginBottom={30} padding={5}>
            <DropDown
              search={search}
              company={usersfilter}
              onChange={(filtertype, searchTerm, e) =>
                handleSearchChange(filtertype, searchTerm, e)
              }
              onClick={(e) => handleSearchChange(typesearch.nombre, e, null)}
              onIconClick={(e) =>
                handleSearchChange(typesearch.nombre, e, null)
              }
              setSearch={setSearch}
            />
          </HStack>

          <HStack paddingLeft={5}>
            <div style={{ textAlign: "center" }}>
              <Text fontSize="5xl">Infinite Scroll</Text>

              <div>
                <InfiniteScrollCtable
                  company={usersfilter}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </HStack>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
