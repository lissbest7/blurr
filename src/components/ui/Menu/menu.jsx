import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Logo from '../../../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const navigate = useNavigate();

  const handleHoverStart = () => setHoveredImage(true);
  const handleHoverEnd = () => setHoveredImage(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 95% 5%)" }}
      animate={{ clipPath: "circle(150% at 100% 0)" }}
      exit={{ clipPath: "circle(0% at 95% 5%)" }}
      transition={{ duration: 0.5 }}
      className="bg-white h-screen fixed w-full z-20 top-0 left-0 text-customblack"
    >
      <nav className="flex items-center justify-between px-10 py-10">
        <div className="invert">
          <img src={Logo} alt="" />
        </div>
        <motion.div
          className="relative z-30 cursor-pointer ml-auto h-6 flex flex-col justify-between items-center"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {[100, 75, 50].map((width, index) => (
            <motion.div
              key={index}
              variants={{
                open: { height: "2px", width: "100%", marginLeft: "auto" },
                closed: { height: "2px", width: `${width}%`, marginLeft: "auto" },
              }}
              className="bg-customblack w-full"
            />
          ))}
        </motion.div>
      </nav>
      <ul className="flex flex-col mt-24 gap-12 font-bold w-fit uppercase">
        {['Home', 'About', 'Works', 'Features'].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ opacity: 0.8 }}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onClick={() => {
              if (item === 'Works') {
                handleNavigation('/works');
              } else if (item === 'Home') {
                handleNavigation('/home');
              } else if (item === 'About') {
                handleNavigation('/about');
              } else if (item === 'Features') {
                handleNavigation('/features');
              }
            }}
            className="text-9xl leading-[100px] cursor-pointer"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
