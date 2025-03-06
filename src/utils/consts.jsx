import Home from "../page/Home/home.jsx";
import Contact from "../page/contact/contact.jsx";


// routers url
export const HOME = "/"
export const CONTACT = "/contact"


// routers
export const ROUTERS =[
    {
        Path:HOME,
        Component:Home
    },
    {
        Path:CONTACT,
        Component:Contact
    },
]