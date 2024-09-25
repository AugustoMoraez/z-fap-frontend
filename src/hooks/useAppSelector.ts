import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../libs/redux/store";


export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector