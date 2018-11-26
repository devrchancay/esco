import React from "react";
import SocialNetworks from "./SocialNetworks";
import { shallow } from "enzyme";

const socialNetworks = [{ name: "Facebook", url: "https://facebook.com" }];

describe("SocialNetworks", function() {
  const wrapper = shallow(<SocialNetworks socialNetworks={socialNetworks} />);

  it("Check socialNetworks", () => {
    const firstItem = wrapper.find("ul li:first-child a");
    expect(wrapper.find("ul")).toHaveLength(1);
    expect(wrapper.find("ul li").length).toEqual(socialNetworks.length);
    expect(firstItem.text()).toEqual(socialNetworks[0].name[0]);
  });
});
