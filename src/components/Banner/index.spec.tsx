import { useDeviceDetect } from "@/hooks/useDevice";
import BannerMain from ".";
import wrapperRender from "@/tests/render";

jest.mock("@/hooks/useDevice");

describe("BannerMain", () => {
  // it("renders mobile banner when isMobile is true", () => {
  //   (useDeviceDetect as jest.Mock).mockReturnValue({ isMobile: true });

  //   const { getByAltText } = wrapperRender(<BannerMain />);

  //   const mobileBanner = getByAltText("banner-mobile");
  //   expect(mobileBanner).toBeInTheDocument();
  // });

  it("renders desktop banners when isMobile is false", () => {
    (useDeviceDetect as jest.Mock).mockReturnValue({ isMobile: false });

    const { getByAltText, getAllByAltText } = wrapperRender(<BannerMain />);

    const banner1 = getAllByAltText("banner")[0];
    const banner2 = getAllByAltText("banner")[1];

    expect(banner1).toBeInTheDocument();
    expect(banner2).toBeInTheDocument();
  });
});
