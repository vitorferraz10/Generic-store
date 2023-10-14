import { JSXElementConstructor, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

const wrapperRender = (
  component: ReactElement<string | JSXElementConstructor<Element>>,
  options?: RenderOptions<typeof import("@testing-library/dom/types/queries")>
) => render(component, { ...options });

export default wrapperRender;
