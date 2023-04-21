import { Table, Tr, Th, Td, Skeleton } from "@chakra-ui/react";

const TableSkeleton = () => {
  return (
    <div>
      <Table variant="simple">
        <thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Razon Social</Th>
            <Th>Codigo</Th>
            <Th>Telefono</Th>
            <Th>NIT</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Skeleton height="20px" width="120px" />
            </Td>
            <Td>
              <Skeleton height="20px" width="150px" />
            </Td>
            <Td>
              <Skeleton height="20px" width="110px" />
            </Td>
            <Td>
              <Skeleton height="20px" width="150px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
          </Tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableSkeleton;
