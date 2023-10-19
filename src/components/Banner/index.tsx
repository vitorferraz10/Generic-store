"use-client";
import Image from "next/image";
import Banner1 from "@/assets/banner.jpg";
import Banner2 from "@/assets/sales-banner.jpg";
import { useDeviceDetect } from "@/hooks/useDevice";
import Slider from "react-slick";
import { settings } from "./types";

function BannerMain() {
  const { isMobile } = useDeviceDetect();

  return (
    <div className="max-w-screen-[2000px] relative mx-auto mt-6 h-[400px] md:h-[700px] overflow-hidden mb-6 flex flex-col justify-center content-center md:mt-20">
      <Slider {...settings}>
        <div className="w-full h-full flex items-center justify-center">
          <Image className="mx-auto" src={Banner1} alt="banner" width={2000} height={isMobile ? 300 : 720} />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Image  className="mx-auto" src={Banner2} alt="banner" width={2000} height={720} />
        </div>
      </Slider>
    </div>
  );
}
export default BannerMain;
