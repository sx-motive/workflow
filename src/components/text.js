import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 1.15,
    },
  },
};

export default function Text(props) {
  return (
    <>
      {props.caption ? (
        <SplitText
          className={`text caption ${props.size} ${
            props.className ? props.className : ""
          }`}
          LineWrapper={({ children }) => (
            <div className="line-wrapper">{children}</div>
          )}
          WordWrapper={({ children }) => (
            <motion.span
              initial="hidden"
              animate="visible"
              variants={list}
              className="word-wrapper"
            >
              {children}
            </motion.span>
          )}
          LetterWrapper={({ children }) => (
            <motion.div className="letter-wrap">
              <motion.span
                className="letter"
                initial={{ skewY: 25, y: "90%" }}
                whileInView={{
                  skewY: 0,
                  y: 0,
                  transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1.2,
                  },
                }}
                viewport={{ once: false }}
              >
                {children}
              </motion.span>
            </motion.div>
          )}
        >
          {props.children}
        </SplitText>
      ) : (
        <SplitText
          className={`text paragraph ${props.className ? props.className : ""}`}
          LineWrapper={({ children }) => (
            <p className="line-wrap">
              <motion.span
                className="text-line"
                initial={{ opacity: 0, y: "90%" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1.2,
                  },
                }}
                viewport={{ once: false }}
              >
                {children}
              </motion.span>
            </p>
          )}
        >
          {props.children}
        </SplitText>
      )}
    </>
  );
}
