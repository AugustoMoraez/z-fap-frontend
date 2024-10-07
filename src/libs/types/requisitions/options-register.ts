import { AxiosError } from "axios"
import { sector } from "../sector"

export type optionsRegisterRequest = {
    optionsRegister:sector[]|undefined,
    isLoading:boolean,
    Error: AxiosError<unknown, any> | null
}