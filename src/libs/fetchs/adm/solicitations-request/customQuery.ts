import { useQuery } from "react-query";
import fetchData from "./fetchData";
import { AxiosError } from "axios";
import { userType } from "../../../schemas/userSchema";

const useSolicitationsQuery = (): { listSolicitations: userType[]; isLoading: boolean; error: AxiosError | null } => {
    const { data, isLoading, error } = useQuery("solicitationsRequest", fetchData, { retry: 1 });

    const listSolicitations: userType[] = data?.data || []; 

    return { listSolicitations, isLoading, error: error as AxiosError | null }; 
}

export default useSolicitationsQuery;
