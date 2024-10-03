import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { useEffect } from "react";
import { Load } from "../components/loader";

type Prop = {
    children: JSX.Element;
}

export const RequiredAuth = ({ children }: Prop) => {
    const navigate = useNavigate();
    const user = useAppSelector(state => state.user.CurrentUser);

    useEffect(() => {
        if (!user) {
            navigate("/auth/login");
        }
    }, [user, navigate]);  

    if (user) {
        return children; 
    }

    
    return <Load/>;
};
