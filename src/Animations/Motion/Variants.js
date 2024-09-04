export const SideBar = {
  open:{
    display: "block",
    width: "16rem",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
      mass: 0.7,
      duration: 0.6,
      restDelta: 2,
    },
  },
  close: {
    display: "none",
    width: "0rem",
    transition: {
      type: "spring",
      duration: 0.6,
      delay: 0.5,
    },
  },
};

export const SideBarContentUl = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  close: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export const SideBarContentLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  close: {
    y: 70,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
