import API from "./api";

export const applyJob = async (
  userId,
  jobId,
  token
) => {

  const response = await API.post(
    `/applications/${userId}/${jobId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};