import React from "react";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

type SlideProps = {
  children: React.ReactNode;
  direction: "left" | "right";
};

const Slide = ({ children, direction }: SlideProps) => {
  const controls = useAnimation();

  const variants = {
    hidden: {
      x: `${direction === "left" ? "-" : ""}100%`,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.2,
      },
    },
  };

  return (
    <InView>
      {({ inView, ref }) => {
        if (inView) {
          controls.start("visible");
        }
        return (
          <motion.div
            ref={ref}
            initial="hidden"
            variants={variants}
            animate={controls}
          >
            {children}
          </motion.div>
        );
      }}
    </InView>
  );
};

export default Slide;
