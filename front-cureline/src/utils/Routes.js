import Doctars from "../components/doctars/Doctars";
import Slider from "../components/slider/Slider";
import Contact from "../pages/contact/Contact";
import AccountBox from "../register/accountBox";
import { SING_IN, DOCTAR, CONTACT } from "./Consts";

export const publicRoutes = [
    {
        path: SING_IN,
        element: <AccountBox/>
    },
    {
        path: HOME,
        element: <Slider/>
    },
    {
        path: DOCTAR,
        element: <Doctars/>

    },
    {
        path: CONTACT,
        element: <Contact/>
    }
]