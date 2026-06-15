import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      right: "0",
      opacity: "0.25",
      mixBlendMode: "lighten",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  const backgroundImage = "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1920";

  return (
    <section className="landing" style={styles.landing}>
      <Draw />
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a Developer")
                .pauseFor(1500)
                .deleteChars(9)
                .typeString("Designer")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Bringing your ideas to life")
                .start();
            }}
          />
        </div>
      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={backgroundImage}
          alt="Developer workspace"
        />
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
