import Doctars from "../components/doctars/Doctars";
import Slider from "../components/slider/Slider";
import ImageSlider from "../components/sliderimage/SliderImage";
import AdminPanel from "../pages/adminpanel/AdminPanel";
import AppointmentForm from "../pages/appointment/Appointment";
import Contact from "../pages/contact/Contact";
import { questions } from "../../src/components/faq/questions";
import AccountBox from "../register/accountBox";
import SingleQuestion from "../components/faq/Faq";
import { SING_IN, DOCTAR, CONTACT, APPOINTMENT, ALBUM, HOME, ADMIN, FAQ } from "./Consts";
const [cards] = useState(questions);

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
    },
    {
        path: FAQ,
        element: (
            <section className="max-w-screen-md mx-auto py-20 px-4">
                <h1 className="text-center uppercase tracking-widest font-bold mb-8">
                    Вопросы и ответы
                </h1>
                <section className="grid grid-cols-1 gap-8">
                    {cards.map((card, index) => (
                        <SingleQuestion {...card} key={index} />
                    ))}
                </section>
            </section>
        )
    }
];
