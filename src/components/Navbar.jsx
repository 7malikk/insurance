import { FaRegLifeRing } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { RiKey2Line } from 'react-icons/ri';
import { motion } from 'framer-motion';

const sectionVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childrenVariants = {
  initial: {
    scale: 0,
    opacity: 0,
    
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      className="flex rounded-t-xl items-center justify-between px-6 xl:px-20 py-6 from-[#10323a] text-white bg-gradient-to-b to-[#0C1018] ">
      <motion.div variants={childrenVariants}>
        <FaRegLifeRing className="w-14 h-14 animate-spin-slow text-bright z-10" />
      </motion.div>
      <ul className="flex space-x-10">
        <motion.li variants={childrenVariants}>Home</motion.li>
        <motion.li
          variants={childrenVariants}
          className="flex space-x-4 items-center">
          <p>Services</p> <BsChevronDown />
        </motion.li>
        <motion.li variants={childrenVariants}>About us</motion.li>
        <motion.li variants={childrenVariants}>Blog</motion.li>
        <motion.li variants={childrenVariants}>Career</motion.li>
      </ul>
      <div className="space-x-20 flex items-center">
        <motion.button
          variants={childrenVariants}
          className="bg-light text-black rounded-full   px-10 py-2">
          Contact us
        </motion.button>
        <motion.button
          variants={childrenVariants}
          className="flex  items-center space-x-4">
          {' '}
          <RiKey2Line className="w-7 h-7" /> <p>Login</p>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Navbar;
