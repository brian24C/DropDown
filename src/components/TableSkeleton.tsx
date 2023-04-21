import { Skeleton, Stack } from "@chakra-ui/react";

const TableSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default TableSkeleton;
