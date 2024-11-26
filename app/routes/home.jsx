import React from "react";
import CapturedMoments from "~/components/CapturedMoments";
import CustomizePebble from "~/components/CustomizePebble";
import Footerx from "~/components/Footerx";
import HomePageBanner from "~/components/HomePageBanner";
import MobileCapturedMoments from "~/components/MobileCapturedMoments";
import NewsLetter from "~/components/NewsLetter";
import OurWork from "~/components/OurWork";
import ShopBanner from "~/components/ShopBanner";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <>
            <div className="bg-[#FAF7EB] w-full overflow-hidden px-[10px] ">
                <HomePageBanner />
                <OurWork />
                <Testimonials />
                <ShopBanner />
                <div className="hidden lg:block">
                    <CapturedMoments />
                </div>
                <div className="lg:hidden block">
                    <MobileCapturedMoments />
                </div>
                <NewsLetter />
            </div>
            <div className="overflow-hidden">
                <Footerx />
            </div>
        </>
    );
};

export default Home;