import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";
import Banner1 from "../../../assets/banner1.webp";
import Banner2 from "../../../assets/banner2.webp";
import { useDeviceDetect } from "@/hooks/useDevice";

function BannerMain() {
  const { isMobile } = useDeviceDetect();
  return (
    <Carousel
      autoPlay
      indicators
      cycleNavigation
      navButtonsAlwaysVisible
      height={isMobile ? 600 : 800}
      animation="fade"
      IndicatorIcon={isMobile}
      fullHeightHover
      interval={1}
    >
      <Paper>
        <Image src={Banner1} alt="banner" layout="fill" objectFit="cover" />
      </Paper>
      <Paper>
        <Image src={Banner2} alt="banner" layout="fill" objectFit="cover" />
      </Paper>
    </Carousel>
  );
}
export default BannerMain;
