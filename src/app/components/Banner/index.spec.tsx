import React from "react";
import { render } from "@testing-library/react";
import mockConsole, { RestoreConsole } from "jest-mock-console";
import BannerMain from ".";

describe("BannerMain", () => {
  
  it("renders without crashing", () => {
    const { getAllByRole } = render(<BannerMain />);
    const images = getAllByRole("img");
    console.log(images)
    expect(images.length).toBe(1);
  });
});
