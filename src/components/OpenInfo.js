import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const OpenInfo = ({ content }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <motion.div
      className="contactInfo"
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="contentTitle">Information at ease !</h4>
      <ul className="listInfo">
        <li>
          <div className="personalContactInfo">
            <div className="mediaWrap">
              <h6 className="infoType">{content}</h6>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default OpenInfo;
