import { BsAsterisk } from 'react-icons/bs';
import { CgArrowLongDown } from 'react-icons/cg';
import { balloon } from '../assets';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <section className="text-white  px-6 xl:px-20 pb-10 xl:pb-20 bg-dark pt-12 flex  ">
      <div className="w-1/2 h-full mr-5 xl:mr-0 space-y-14 xl:space-y-0 text-7xl xl:text-[105px] font-extrabold">
        <motion.h1
          initial={{ x: '-200vw' }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.2,
            type: 'spring',
            mass: 0.4,
            damping: 15,
            duration: 0.8,
          }}>
          Darcy&apos;s{' '}
        </motion.h1>{' '}
        <motion.h1
          initial={{ x: '-200vw' }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.4,
            type: 'spring',
            mass: 0.4,
            damping: 15,
            duration: 0.8,
          }}>
          Insurance
        </motion.h1>{' '}
        <motion.h1
          initial={{ x: '-200vw' }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.6,
            type: 'spring',
            mass: 0.4,
            damping: 15,
            duration: 0.8,
          }}>
          Products
        </motion.h1>
      </div>
      <div className="xl:w-1/2 flex justify-between">
        <div className=" w-1/2 xl:w-1/3 flex flex-col justify-between">
          <motion.div
            initial={{ x: '-200vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.7,
              type: 'spring',
              mass: 0.4,
              damping: 15,
              duration: 0.8,
            }}
            className="space-y-6">
            <BsAsterisk className="bg-white  my-3 text-black p-1 w-10 h-10 rounded-full animate-spin-slow" />
            <p className="py-3">
              Our <span className="underline text-light">plans</span> are saving
              policyholders 30% - 60% on premiums
            </p>
          </motion.div>
          <motion.div
            initial={{ x: '-200vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              type: 'spring',
              mass: 0.4,
              damping: 15,
              duration: 0.8,
            }}>
            <BsAsterisk className="bg-white my-3 text-black p-1 w-10 h-10 rounded-full animate-spin-slow" />
            <p className="py-3">
              We offer a choice of low dedactibles and include no cost
              value-added services
            </p>
          </motion.div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '20%', opacity: 1 }}
            transition={{
              delay: 1.1,
              type: 'spring',
              mass: 0.4,
              damping: 15,
              duration: 0.8,
            }}
            className=" bg-gradient-to-t from-[#171D2C] to-[#0C1018] rounded-full w-fit ">
            <CgArrowLongDown className="w-10 h-24" />
          </motion.div>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: '100%',
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
            type: 'spring',
            mass: 0.4,
            damping: 15,
            duration: 0.8,
          }}
          className="w-1/2 flex justify-center">
          <motion.img
            initial={{ boxShadow: 'none' }}
            animate={{
              boxShadow: '0 0 50px rgb(255,255,255,0.3)',
            }}
            transition={{
              delay: 1.8,
              type: 'spring',
              mass: 0.4,
              damping: 15,
              duration: 0.8,
            }}
            src={balloon}
            alt="ballon"
            className="rounded-full h-full w-3/4 "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
