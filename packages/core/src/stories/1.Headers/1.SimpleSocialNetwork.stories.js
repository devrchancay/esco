import React from "react";
import { storiesOf } from "@storybook/react";
import { text, object } from "@storybook/addon-knobs";

import SimpleSocialNetwork from "../../components/Hero/SimpleSocialNetwork";

const stories = storiesOf("Headers|1. Simple Social Network", module);

stories.add("Simple Social network", () => {
  const title = text("title", "Hello this Title");
  const subTitle = text("subTitle", "Hello this subTitle");
  const socialNetworks = object("socialNetworks", [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" }
  ]);

  return (
    <SimpleSocialNetwork
      title={title}
      subTitle={subTitle}
      socialNetworks={socialNetworks}
    />
  );
});
