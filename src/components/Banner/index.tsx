"use-client";
import Image from "next/image";
import Banner1 from "@/assets/banner.jpg";
import Banner2 from "@/assets/sales-banner.jpg";
import BannerMobile from "@/assets/mobile-banner.jpg";
import { useDeviceDetect } from "@/hooks/useDevice";
import Slider from "react-slick";
import { settings } from "./types";

function BannerMain() {
  const { isMobile } = useDeviceDetect();

  return (
    <div className="max-w-screen-[2000px] relative mx-auto mt-6 h-[400px] md:h-[700px] overflow-hidden mb-6">
      <Slider {...settings}>
        <div className="w-full h-full flex items-center justify-center">
          <Image src={Banner1} alt="banner" width={2000} height={720} />
        </div>
        <div className="max-[2000px] mx-auto h-[720px]">
          <Image src={Banner2} alt="banner" width={2000} height={720} />
        </div>
      </Slider>

      {isMobile && (
        <Image
          alt="banner-mobile"
          src={BannerMobile}
          fill
          sizes="(max-width: 768px) 100vw"
        />
      )}
    </div>
  );
}
export default BannerMain;
