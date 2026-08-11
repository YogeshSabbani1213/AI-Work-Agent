import api from "../api/api";

// This interface describes the data that our frontend
// sends to the backend.
//
// TypeScript uses this interface to make sure that
// processWork() receives the correct data structure.
//An interface describes the shape of an object.
interface WorkRequest {
  request: string;
}

// This interface describes the response we currently
// expect from our backend.
interface WorkResponse {
  success: boolean;
  message: string;
  data: {
    request: string;
  };
}

// This function is responsible for calling the
// POST /api/work endpoint.
//
// Keeping API calls inside services means our React
// components don't need to know endpoint URLs.
export const processWork = async (data: WorkRequest): Promise<WorkResponse> => {
  const response = await api.post<WorkResponse>("/work", data);//"The response from this request should be treated as a WorkResponse."
  
    console.log("responseData:",response.data)
  return response.data;
};