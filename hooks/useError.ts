import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";

function useError() {
  const toast = useToast();
  const handleError = (err: unknown) => {
    toast({
      description:
        err instanceof AxiosError
          ? err.response?.data.message
          : "Terjadi Kesalahan",
      status: "error",
    });
  };

  return { handleError };
}

export default useError;
