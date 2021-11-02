import React from "react";

import Bio from "./Bio";

export default {
  title: "Components/Bio",
  component: Bio
};

const Template = args => (
  <Bio
    headshot="https://lh3.googleusercontent.com/a-/AOh14GjHOZkxn2NhM_JH8nvW5FmzW1ZmGAQt7Y5mADG-=s288-p-no"
    name="JC Picol"
    tagline="Creating beautiful user expierence for new decentralized tech "
    role="Frontend Developer"
  />
);

export const Default = Template.bind({});
