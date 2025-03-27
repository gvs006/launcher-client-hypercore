import { motion } from "framer-motion";
import "./PlayButtonComponent.css";
import characterMock from "../assets/character.png"; // Mock de personagem

export const PlayButtonComponent = () => {
  return (
    <motion.button
      className="play-button"
      initial={{ opacity: 1 }}
      animate={{
        boxShadow: [
          "0px 0px 10px #d0269f",
          "0px 0px 20px #d0269f",
          "0px 0px 10px #d0269f"
        ],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror"
      }}
      whileHover={{
        scale: 1.15,
        boxShadow: "0px 0px 30px #d0269f",
        rotate: 2
      }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={characterMock} alt="Personagem Cyberpunk" className="button-img" />
      JOGAR
    </motion.button>
  );
};
