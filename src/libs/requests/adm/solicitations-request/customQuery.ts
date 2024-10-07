import { useQuery } from "react-query";
import fetchData from "./fetchData";
import { AxiosError } from "axios";
import { solicitationsRequest } from "../../../types/requisitions/solicitations-request";
import { userType } from "../../../schemas/userSchema";



const useSoliciationsQuery = (): solicitationsRequest => {
    const fetch = () => {
        const { data, isLoading, error } = useQuery("api-data", () => fetchData(),
            { retry: 1 });
        const Error = error as AxiosError

        let listSolicitations: userType[] = [];

        data?.data.map((user) => {
            listSolicitations.push({
                id:user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                position: user.position,
                active: user.active,
                sectorID:user.sectorID,
                permissions:user.permissions
            })
        })

        return { listSolicitations, isLoading, Error }

    }
    return fetch();
}

export default useSoliciationsQuery;