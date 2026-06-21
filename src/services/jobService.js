import API from "./api";

export const getAllJobs = async () => {

  const response = await API.get("/jobs");

  return response.data;
};