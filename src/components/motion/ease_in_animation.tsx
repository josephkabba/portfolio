import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimateData = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  duration?: number;
};

export default function EaseInAnimation({
  children,
  className = "",
  duration = 1,
}: AnimateData) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variant = {
    visible: {
      opacity: 1,
      transition: { ease: "easeInOut", duration },
    },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      initial="hidden"
      animate={control}
      variants={variant}
    >
      {children}
    </motion.div>
  );
}
