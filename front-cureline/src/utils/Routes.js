import Doctars from "../components/doctars/Doctars";
import Slider from "../components/slider/Slider";
import ImageSlider from "../components/sliderimage/SliderImage";
import AdminPanel from "../pages/adminpanel/AdminPanel";
import AppointmentForm from "../pages/appointment/Appointment";
import Contact from "../pages/contact/Contact";
import AccountBox from "../register/accountBox";
import { SING_IN, DOCTAR, CONTACT, APPOINTMENT, ALBUM } from "./Consts";

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
    },
    {
        path: APPOINTMENT,
        element: <AppointmentForm/>
    },
    {
        path: ADMIN,
        element: <AdminPanel/>

    },
    {
        path: ALBUM,
        element: <ImageSlider/>
    }
]