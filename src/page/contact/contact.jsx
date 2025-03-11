import React from 'react';
import "./contact.css"
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ForumIcon from '@mui/icons-material/Forum';
import Header from "@/component/header/header.jsx";

const Contact = () => {
    return (
        <div className={"container-sm top_def_100"}>
           <Header title={"Contact"} subtitle={"Contact"}/>
            <div className="row pt-5 pb-5">
                <div data-aos="fade-up" className="col-lg-3">
                    <div className="contact_top_item">
                        <div className="contact_circle">
                            <PlaceIcon/>
                        </div>
                        <h3>Store Address</h3>
                        <p>PO Box 16122 Collins Street West Victoria 8007 Australia </p>
                    </div>
                </div>
                <div data-aos="fade-up" className="col-lg-3">
                    <div className="contact_top_item">
                        <div className="contact_circle">
                            <LocalPhoneIcon/>
                        </div>
                        <h3> Call Info </h3>
                        <p> Open a chat or give us call at <br/> <span>+61 3 8376 6284</span></p>
                        <br/>

                    </div>
                </div>
                <div data-aos="fade-up" className="col-lg-3">
                    <div className="contact_top_item">
                        <div className="contact_circle">
                            <EmailIcon/>
                        </div>
                        <h3> Email Support </h3>
                        <p> Sent mail to <br/> <span>support@mixtas.com</span></p>
                    </div>
                </div>
                <div data-aos="fade-up" className="col-lg-3">
                    <div className="contact_top_item">
                        <div className="contact_circle">
                            <ForumIcon/>
                        </div>
                        <h3> Live Support </h3>
                        <p>Live chat service <br/> <span>https://www.livechat.com</span></p>
                    </div>
                </div>
            </div>


            <div className="row pt-5 pb-5">
                <div className="col-lg-6">
                    <div className="form">
                        <h3 data-aos="fade-up">get in touch</h3>

                        <div className="form_input" >
                            <input type="text" placeholder={"Your name"}/>
                        </div>
                        <div className="form_input">
                            <input type="text" placeholder={"Your phone"}/>
                        </div>
                        <div className="form_input">
                            <textarea rows={8} type="text" placeholder={"Your message"}/>
                        </div>
                        <button>Send message</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18349.371310759878!2d69.17889118194583!3d41.22352844999204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5a589fd6c6db%3A0x742c395a6266d457!2sSimma%20Hotel%20Spa%20%26%20Waterpark!5e1!3m2!1sru!2s!4v1741276810895!5m2!1sru!2s"
                            width="100%" height="100%" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;