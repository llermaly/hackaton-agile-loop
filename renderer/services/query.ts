import axiosInstance from "./axios";

interface RunQueryProps {
  query: string;
}

export const fetchRunQuery = async (props: RunQueryProps) => {
  const { data } = await axiosInstance.post("/query", props);

  return data;
};
