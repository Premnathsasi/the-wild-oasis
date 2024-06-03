import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useFetchCabin() {
  //The below useQuery hook is used to fetch data from database
  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { isLoading, cabins };
}
