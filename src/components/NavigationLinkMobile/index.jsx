/* eslint-disable react/prop-types */
import { SideBarContentLi } from "../../Animations/Motion/Variants";
import NavigationLink from "../NavigationLink";
import { motion } from "framer-motion";

export default function NavigationLinkMobile({ link, text }) {
  return (
    <motion.li variants={SideBarContentLi}>
      <NavigationLink link={link} className={""} text={text} />{" "}
    </motion.li>
  );
}
