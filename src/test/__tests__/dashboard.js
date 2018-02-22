import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import configureStore from "redux-mock-store";
const mockStore = configureStore();

import Dashboard from "../../components/Dashboard";

describe("<Dashboard />", () => {
  it("renders an `.weather-dashboard`", () => {
    const wrapper = render(<Dashboard store={mockStore({})}/>);
    expect(wrapper.hasClass("weather-dashboard")).toBe(true);
  });

  // it("should contain app title", () => {
  //   const wrapper = shallow(<Dashboard store={mockStore({})}/>);
  //   expect(wrapper.find(".heading"));
  // });
});