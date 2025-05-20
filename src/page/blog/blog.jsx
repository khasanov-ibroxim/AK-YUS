import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Blog_db} from "@/page/Home/db/blog_db.jsx";
import "./blog.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';

const Blog = () => {
    const {blog_id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blog_id]);
    const currentIndex = Blog_db.findIndex((blog) => blog.id === parseInt(blog_id));
    const current_blog = Blog_db[currentIndex];

    // oldingi blogga o'tish
    const handlePrev = () => {
        const prevIndex = currentIndex === 0 ? Blog_db.length - 1 : currentIndex - 1;
        navigate(`/blog/${Blog_db[prevIndex].id}`);
    };

    // keyingi blogga o'tish
    const handleNext = () => {
        const nextIndex = currentIndex === Blog_db.length - 1 ? 0 : currentIndex + 1;
        navigate(`/blog/${Blog_db[nextIndex].id}`);
    };

    if (!current_blog) return <div>Blog topilmadi</div>;
    return (
        <div style={{paddingTop: "150px"}} className={"container"}>
            <div className="blog_title">
                <h1>{current_blog.name}</h1>
                <img src={current_blog.img} alt=""/>
            </div>

            <div className="blog_box">
                <div className="blog_content">
                    <p>What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of
                        the
                        coolest, most shopping-savvy people we know—from small-business owners to designers, artists,
                        and
                        actors—to tell us the story behind one of their most prized possessions.</p>
                    <h1>Who?</h1>
                    <p>Phoebe Sung and Peter Buer met and fell in love as fashion school students in mid-aughts Boston.
                        After they graduated, the couple began to craft together as a way to decompress from their
                        corporate
                        fashion jobs. They made jewelry, then bags, then home goods like wall hangings, which were
                        ultimately the gateway to launching their now-beloved New York–based textile brand Cold
                        Picnic.</p>

                    <div className="blog_content_img">
                        <img src={current_blog.img} alt=""/>
                    </div>

                    <p>Since 2010, Phoebe and Peter have been designing colorful, abstract rugs and bath mats that
                        double as
                        works of art. Nearly every collection is informed by old movies, either in composition (they
                        print
                        out stills and trace shapes over them) or palette (think retro hues). “There was one series of
                        films
                        that we were really inspired by that were all set in the desert, so the colors were very chalky
                        and
                        powdery but still saturated,” Phoebe shares. “We still use a lot of peaches and mints and
                        citrons
                        and tans.”</p>
                    <h1>What?</h1>
                    <p>The couple’s 1910s Ridgewood, Queens, home is filled with their own creations, including a HAY
                        sofa
                        (the Mags Soft Low sectional to be exact) that they reupholstered using hand-tufted rugs after
                        the
                        sofa’s original pink tweed got ruined. “We were trying to think of what kind of upholstery we
                        could
                        actually live with and the rugs are pretty durable,” Phoebe says. “We thought that something a
                        little bit heartier with a lot of color and design would survive our family.”</p>
                    <p>
                        For the sofa’s seat and back cushions, Phoebe and Peter chose designs from their Beau Travail
                        collections, which are an homage to the Claire Denis film of the same name. But instead of using
                        the
                        handmade, high-low pile wool rugs that are sold on the Cold Picnic website, Peter tufted the
                        rugs
                        himself—twice. “He bought a frame and a gun and he watched all these videos, but we used the
                        wrong
                        glue backing, so it was too stiff and he had to do it all over again,” Phoebe laments.
                    </p>
                    <h1>Where and When?</h1>
                    <p>Peter undertook this grueling project at home in 2021—injuring his back in the process.
                        “Everything
                        he does, he does very intensely. He just wanted to finish it, but then he put his back out and
                        couldn’t walk or get out of bed for a week after. He paid for it, but it was worth it,” Phoebe
                        says,
                        adding that a local upholsterer then covered the HAY sofa in the hand-tufted rugs and a
                        greenish-mustard wide wale corduroy.</p>
                    <h1>Why?</h1>
                    <p>In addition to being durable and stylish, the one of a kind sectional holds lots of sentimental
                        value
                        for the couple. “I actually had a mustard corduroy sofa growing up, so it’s nostalgic, but it is
                        our
                        take on it,” Phoebe explains. “And that’s how we think about designing. That’s why we always use
                        old
                        movies and these ’70s powdery palettes. It’s exactly our personal style, which is hard to
                        encapsulate.”</p>
                    <p>Phoebe and Peter paired their special sofa with one of the rugs that’s featured in the design,
                        the
                        Denis Denis, as well as a vintage coffee table, a Noguchi-style pendant, and a papier-mâché
                        tulip
                        lamp they made during the pandemic. “We thought using one of the rugs that it was based on would
                        be
                        too much, so we made a brown rug to go with it, but actually that was too much,” Phoebe says.
                        “The
                        effect was more low-key when we just really went for it and did the whole room in the same
                        print.”</p>
                </div>
                <div className="blog_social">
                    <div className="blog_social_link"><TelegramIcon/></div>
                    <div className="blog_social_link"><InstagramIcon/></div>
                    <div className="blog_social_link"><FacebookIcon/></div>
                </div>
            </div>


            <div className="blog_footer">
                <div className="blog_pagination">
                    <div className="blog_prev" onClick={handlePrev}>
                        <div className="blog_pagination_icon"><KeyboardBackspaceIcon/></div>
                        <div className="blog_pagination_content">
                            <span>Prev Post</span>
                            <span>{Blog_db[currentIndex === 0 ? Blog_db.length - 1 : currentIndex - 1].name}</span>
                        </div>
                    </div>
                    <div className="blog_next" onClick={handleNext}>
                        <div className="blog_pagination_content">
                            <span>Next Post</span>
                            <span>{Blog_db[currentIndex === Blog_db.length - 1 ? 0 : currentIndex + 1].name}</span>
                        </div>
                        <div className="blog_pagination_icon"><EastIcon/></div>
                    </div>
                </div>


                <div className="blog_contact">
                    <div className="blog_contact_title">
                        <h1>Leave a Reply </h1>
                        <p>Your email address will not be published. Required fields are marked *</p>
                    </div>
                    <div className="blog_form">
                        <div className="blog_textarea">
                            <p>Comment *</p>
                            <textarea rows={10}/>
                        </div>
                        <div className="blog_input_box">
                            <div className="blog_input">
                                <p>Name *</p>
                                <input type="text"/>
                            </div>
                            <div className="blog_input">
                                <p>Email *</p>
                                <input type="text"/>
                            </div>
                            <div className="blog_input">
                                <p>Website</p>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>

                    <div className="blog_btn">
                        <button className="blog_send">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;