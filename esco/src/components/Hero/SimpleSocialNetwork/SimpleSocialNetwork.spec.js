import React from "react";
import SimpleSocialNetwork from "./SimpleSocialNetwork";
import { shallow } from "enzyme";

const title = "Hello put here Title";
const subTitle = "Hello put here Title";
const socialNetworks = [{ name: "Facebook", url: "https://facebook.com" }];

describe("SimpleSocialNetwork", function() {
  const wrapper = shallow(
    <SimpleSocialNetwork
      title={title}
      subTitle={subTitle}
      socialNetworks={socialNetworks}
    />
  );
  it("Check title", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("h1").text()).toEqual(title);
  });

  it("Check subtitle", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find("h2").text()).toEqual(title);
  });

  it("Check socialNetworks", () => {
    const firstItem = wrapper.find("ul li:first-child a");
    expect(wrapper.find("ul")).toHaveLength(1);
    expect(wrapper.find("ul li").length).toEqual(socialNetworks.length);
    expect(firstItem.text()).toEqual(socialNetworks[0].name[0]);
  });
});
