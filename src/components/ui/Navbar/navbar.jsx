import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Menu from '../Menu/menu';
import Logo from "../../../assets/Logo.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const handleToggleMenu = () => setIsOpen(prevState => !prevState);

  const lineVariants = {
    open: (width) => ({
      height: "2px",
      width,
      marginLeft: "auto",
      backgroundColor: "black",
    }),
    closed: {
      height: "2px",
      width: "100%",
      marginLeft: "auto",
      backgroundColor: "white",
    },
  };

  return (
    <header className="py-10">
      <nav className="flex items-center justify-between px-10">
        <img src={Logo} alt="" />
        <motion.div
          animate={isOpen ? "open" : "closed"}
          onClick={handleToggleMenu}
          className="w-[120px] z-50 cursor-pointer ml-auto h-6 flex flex-col justify-between items-center"
        >
          {[100, 75, 50].map((width, index) => (
            <motion.div
              key={index}
              variants={lineVariants}
              custom={`${width}%`}
              className="h-0.5 w-full"
            />
          ))}
        </motion.div>
        <AnimatePresence>
          {isOpen && <Menu />}
        </AnimatePresence>
      </nav>
    </header>
  );
}
