import React from "react";
import Button from "./Button";
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled, MdOutlineMailOutline } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { RiFileList2Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { LiaSignOutAltSolid } from "react-icons/lia";

export default {
  title: "Form/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Home = Template.bind({});
export const Explore = Template.bind({});
export const Notification = Template.bind({});
export const Messages = Template.bind({});
export const Lists = Template.bind({});
export const Communities = Template.bind({});
export const Premium = Template.bind({});
export const Profile = Template.bind({});
export const More = Template.bind({});
export const Signout = Template.bind({});

Home.args = {
  icon: <MdHomeFilled />,
  text: "Home",
};
Explore.args = {
  icon: <FiSearch />,
  text: "Explore",
};
Notification.args = {
  icon: <GrNotification />,
  text: "Notification",
};
Messages.args = {
  icon: <MdOutlineMailOutline />,
  text: "Messages",
};
Lists.args = {
  icon: <RiFileList2Line />,
  text: "Lists",
};
Communities.args = {
  icon: <GoPeople />,
  text: "Communities",
};
Premium.args = {
  icon: <FaXTwitter />,
  text: "Premium",
};
Profile.args = {
  icon: <IoPersonOutline />,
  text: "Profile",
};
More.args = {
  icon: <CgMoreO />,
  text: "More",
};

Signout.args = {
  icon: <LiaSignOutAltSolid />,
  text: "Sign Out",
};
