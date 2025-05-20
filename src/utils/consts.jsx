import Home from "../page/Home/home.jsx";
import Contact from "../page/contact/contact.jsx";
import About from "@/page/about/about.jsx";
import Faqs from "@/page/faqs/faqs.jsx";
import Blog from "@/page/blog/blog.jsx";


// routers url
export const HOME = "/"
export const ABOUT = "/about"
export const FAQS = "/faqs"
export const CONTACT = "/contact"
export const BLOG = "/blog/:blog_id"


// routers
export const ROUTERS =[
    {
        Path:HOME,
        Component:Home
    },
    {
        Path:ABOUT,
        Component:About
    },
    {
        Path:FAQS,
        Component:Faqs
    },
    {
        Path:CONTACT,
        Component:Contact
    },
    {
        Path:BLOG,
        Component:Blog
    },
]