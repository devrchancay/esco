import React from "react";
import { storiesOf } from "@storybook/react";
import { object } from "@storybook/addon-knobs";

import SocialNetworks from "../../components/Atoms/SocialNetworks";

const stories = storiesOf("Atoms|1. Social Networks", module);

stories.add("Social Networks", () => {
  const socialNetworks = object("socialNetworks", [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" }
  ]);

  return <SocialNetworks socialNetworks={socialNetworks} />;
});
