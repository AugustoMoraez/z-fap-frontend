import { AxiosError } from "axios"
import { userType } from "../../schemas/userSchema"

export type solicitationsRequest = {
    listSolicitations:userType[]|undefined,
    isLoading:boolean,
    Error: AxiosError<unknown, any> | null
}