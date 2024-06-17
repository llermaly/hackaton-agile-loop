import { useMutation } from "@tanstack/react-query";
import { fetchRunQuery } from "../services/query";

export const useMutationRunQuery = () => {
  return useMutation({
    mutationFn: fetchRunQuery,
  });
};
