import { BsAsterisk } from 'react-icons/bs';
import { momChild } from '../assets';
import { motion } from 'framer-motion';

const Support = () => {
  return (
    <div className="bg-dark flex items-center w-full justify-between  px-6 xl:px-20 pb-10 xl:pb-20  text-white ">
      <div className="text-6xl font-bold">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            type: 'spring',
            mass: 0.4,
            damping: 15,
            duration: 0.8,
          }}>
          Support
        </motion.h1>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            type: 'spring',
            mass: 0.4,
            damping: 15,
            duration: 0.8,
          }}>
          at every
        </motion.h1>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            type: 'spring',
            mass: 0.4,
            damping: 15,
            duration: 0.8,
          }}
          className="text-[128px]">
          Step
        </motion.h1>
      </div>

      <div className="w-1/4 space-y-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            type: 'spring',
            mass: 0.4,
            damping: 15,
            duration: 0.8,
          }}>
          <BsAsterisk className="bg-white my-3 text-black p-1 w-10 h-10 rounded-full animate-spin-slow" />
          <p className="py-3">
            Participate in the{' '}
            <span className="text-light">loyalty program</span>. Pay for the
            service online to get bonuses for our other services. We have a lot
            of bonuses!.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            type: 'spring',
            mass: 0.4,
            damping: 15,
            duration: 0.8,
          }}>
          <BsAsterisk className="bg-white my-3 text-black p-1 w-10 h-10 rounded-full animate-spin-slow" />
          <p className="py-3">
            We offer a choice of low dedactibles and include no cost value-added
            services
          </p>
        </motion.div>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            type: 'spring',
            mass: 0.4,
            damping: 15,
            duration: 0.8,
          }}
          className="border-bright text-bright border w-full rounded-full  px-10 py-4">
          Choose a fund
        </motion.button>
      </div>
      <motion.img
        initial={{ height: 0, opacity: 0 }}
        whileInView={{
          height: '100%',
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
          type: 'spring',
          mass: 0.4,
          damping: 15,
          duration: 0.8,
        }}
        src={momChild}
        alt="ballon"
        className="rounded-full "
      />
    </div>
  );
};

export default Support;
