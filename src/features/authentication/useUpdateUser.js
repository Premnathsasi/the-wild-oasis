import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      toast.success("User profile sucessfully updated");
      queryClient.setQueryData(["user"], data.user);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser, isLoading };
}
