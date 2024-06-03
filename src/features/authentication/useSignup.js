import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success("User sucessfully created!");
    },
  });
  return { isLoading, signUp };
}
