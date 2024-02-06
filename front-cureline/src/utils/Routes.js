import Slider from "../components/slider/Slider";
import AccountBox from "../register/accountBox";
import { SING_IN } from "./Consts";

export const publicRoutes = [
    {
        path: SING_IN,
        element: <AccountBox/>
    },
    {
        path: HOME,
        element: <Slider/>
    }
]