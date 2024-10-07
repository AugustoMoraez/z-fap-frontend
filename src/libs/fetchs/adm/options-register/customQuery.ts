import { useQuery } from "react-query";
import fetchData from "./fetchData";
import { AxiosError } from "axios";
import { sector } from "../../../types/sector";
import { optionsRegisterRequest } from "../../../types/requisitions/options-register";

const useOptionsRegisterQuery = ():optionsRegisterRequest => {
    const { data, isLoading, error } = useQuery("optionsRegister", fetchData, { retry: 1 });

    const optionsRegister:sector[] = data?.data || []; 

    return { optionsRegister, isLoading, Error: error as AxiosError | null }; 
}

export default useOptionsRegisterQuery;
