import React from "react";

import Post from "./Post";

export default {
  title: "Components/Post",
  component: Post
};

const Template = args => (
  <Post
    content="I'm working on using figma and using Next js with Storybook."
    date="10/25/21"
  />
);

export const Default = Template.bind({});
