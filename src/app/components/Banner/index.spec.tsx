import React from "react";
import { render } from "@testing-library/react";
import mockConsole, { RestoreConsole } from "jest-mock-console";
import BannerMain from ".";

describe("BannerMain", () => {
  
  it("renders without crashing", () => {
    const { getAllByAltText } = render(<BannerMain />);
    const images = getAllByAltText(/banner/);
    expect(images.length).toBe(2);
  });
});
