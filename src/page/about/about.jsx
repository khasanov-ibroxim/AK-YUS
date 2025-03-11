import React, {useState} from 'react';
import "./about.css"
import Header from "@/component/header/header.jsx";
import AboutComponent from "@/page/about/components/about_component.jsx";
import OStoryComponent from "@/page/about/components/o_story_component.jsx";
import OMissionComponent from "@/page/about/components/o_mission_component.jsx";
import WithUsComponent from "@/page/about/components/with_us_component.jsx";

const About = () => {
    const [tabs, setTabs] = useState(0);
    console.log(tabs)
    return (
        <div className="about top_def_100">
            <div className="about_header">
                <h1>Discover the Art of Dressing <i>Where Every Stitch Tells a Story</i> and Every Outfit Paints a
                    Picture</h1>
            </div>
            <div className="container-sm">

                <div className="about_tabs">
                    <div className={tabs === 0 ? "tabs_item isActive" : "tabs_item"} onClick={() => setTabs(0)}>About
                        Mixtas
                    </div>
                    <div className={tabs === 1 ? "tabs_item isActive" : "tabs_item"} onClick={() => setTabs(1)}>Our
                        Story
                    </div>
                    <div className={tabs === 2 ? "tabs_item isActive" : "tabs_item"} onClick={() => setTabs(2)}>Our
                        Misson
                    </div>
                    <div className={tabs === 3 ? "tabs_item isActive" : "tabs_item"} onClick={() => setTabs(3)}>Conntect
                        with Us
                    </div>
                </div>


                <div className="about_content  pt-5 pb-5">
                    {tabs === 0 && <AboutComponent/>}
                    {tabs === 1 && <OStoryComponent/>}
                    {tabs === 2 && <OMissionComponent/>}
                    {tabs === 3 && <WithUsComponent/>}
                </div>

            </div>
        </div>
    );
};

export default About;