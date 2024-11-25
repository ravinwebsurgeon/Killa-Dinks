import React from "react";
import CapturedMoments from "~/components/CapturedMoments";
import CustomizePebble from "~/components/CustomizePebble";
import Footerx from "~/components/Footerx";
import HomePageBanner from "~/components/HomePageBanner";
import NewsLetter from "~/components/NewsLetter";
import OurWork from "~/components/OurWork";
import ShopBanner from "~/components/ShopBanner";
import Testimonials from "~/components/testimonials";

const Home = () => {
    return (
        <>

            <div className="bg-[#FAF7EB] w-full overflow-hidden px-[10px] ">
                <HomePageBanner />
                <OurWork />
                <CustomizePebble />
                <Testimonials />
                <ShopBanner />
                <CapturedMoments />
                <NewsLetter />
            </div>
            <div className="overflow-hidden">
                <Footerx />
            </div>

        </>
    );
};

export default Home;