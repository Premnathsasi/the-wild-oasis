import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLoggingin } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      console.log(data);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error("Email or Password are incorrect!");
    },
  });
  return { login, isLoggingin };
}
