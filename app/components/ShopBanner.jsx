import React from 'react'
import bag from "../assets/bag.png";
import im2 from "../assets/im2.png";
import im3 from "../assets/im3.png";
import im4 from "../assets/im4.png";

function ShopBanner() {
    return (
        <div>
            <section className="shop-our-brand flex justify-center mx-auto px-4 sm:px-8">
                <div className="w-full max-w-[1720px] h-auto bg-[#BBA887] rounded-[9px] lg:rounded-[50px]">
                    {/* Title */}
                    <div className="text-white font-[500] text-[32px] sm:text-[40px] leading-[48px] sm:leading-[60px] flex justify-center pt-[40px] sm:pt-[80px]">
                        Shop Our Brand
                    </div>

                    {/* Product Items */}
                    <div className="flex flex-wrap justify-center gap-[36px] pt-[40px] pb-[50px] ">
                        {/* Product Card 1 */}
                        <div className="w-full sm:w-[340px] h-[430px] flex-col border-2 rounded-[20px] text-white  mx-[20px] lg:mx-0">
                            <div className="h-[302px] bg-[#FAF7EB] rounded-t-[20px] flex justify-center items-center">
                                <img src={bag} alt="" className="w-[250px] h-[250px]" />
                            </div>
                            <div className="pl-[18px]">
                                <div className="pt-[10px] text-[16px] sm:text-[18px]">Killa Dinks Pickleball Bag</div>
                                <div className="text-[18px] sm:text-[20px]">$79.99 USD</div>
                                <button className="my-[10px] py-[6px] text-[16px] sm:text-[18px] text-[#BBA887] bg-[#FAF7EB] px-6 rounded-[20px]">
                                    Choose Options
                                </button>
                            </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="w-full sm:w-[340px] h-[430px] flex-col border-2 rounded-[20px] text-white  mx-[20px] lg:mx-0">
                            <div className="h-[302px] bg-[#FAF7EB] rounded-t-[20px] flex justify-center items-center">
                                <img src={im2} alt="" className="w-[250px] h-[250px]" />
                            </div>
                            <div className="pl-[18px]">
                                <div className="pt-[10px] text-[16px] sm:text-[18px]">
                                    Kids Killa Dinks x Flow Society Short
                                </div>
                                <div className="text-[18px] sm:text-[20px]">$38.00 USD</div>
                                <button className="my-[10px] py-[6px] text-[16px] sm:text-[18px] text-[#BBA887] bg-[#FAF7EB] px-6 rounded-[20px]">
                                    Choose Options
                                </button>
                            </div>
                        </div>

                        {/* Product Card 3 */}
                        <div className="w-full sm:w-[340px] h-[430px] flex-col border-2 rounded-[20px] text-white  mx-[20px] lg:mx-0">
                            <div className="h-[302px] bg-[#FAF7EB] rounded-t-[20px] flex justify-center items-center">
                                <img src={im3} alt="" className="w-[250px] h-[250px]" />
                            </div>
                            <div className="pl-[18px]">
                                <div className="pt-[10px] text-[16px] sm:text-[18px]">Killa Dinks - Rush-01</div>
                                <div className="text-[18px] sm:text-[20px]">$89.99 USD</div>
                                <button className="my-[10px] py-[6px] text-[16px] sm:text-[18px] text-[#BBA887] bg-[#FAF7EB] px-6 rounded-[20px]">
                                    Choose Options
                                </button>
                            </div>
                        </div>

                        {/* Product Card 4 */}
                        <div className="w-full sm:w-[340px] h-[430px] flex-col border-2 rounded-[20px] text-white  mx-[20px] lg:mx-0">
                            <div className="h-[302px] bg-[#FAF7EB] rounded-t-[20px] flex justify-center items-center">
                                <img src={im4} alt="" className="w-[250px] h-[250px]" />
                            </div>
                            <div className="pl-[18px]">
                                <div className="pt-[10px] text-[16px] sm:text-[18px]">Womenssss Athletic Tank Top</div>
                                <div className="text-[18px] sm:text-[20px]">$29.99 USD</div>
                                <button className="my-[10px] py-[6px] text-[16px] sm:text-[18px] text-[#BBA887] bg-[#FAF7EB] px-6 rounded-[20px]">
                                    Choose Options
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ShopBanner;
