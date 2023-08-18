import { useEffect, useRef } from 'react';
import { bmw, drugs, house, lifeguard, readingRoom } from '../assets';
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from 'framer-motion';

const BestChoice = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start({ opacity: 1, scale: 1 });
    }
  }, [isInView]);

  return (
    <AnimatePresence>
      <motion.section
        ref={ref}
        className="text-white  px-6 xl:px-20 pb-10 xl:pb-20  pt-24  bg-dark flex flex-col ">
        <motion.div className=" space-y-6 ">
          <motion.div className="grid grid-cols-4 ">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}
              className="col-span-2 relative">
              <motion.img
                initial={{ boxShadow: 'none' }}
                whileHover={{
                  boxShadow: '0 0 50px rgb(255,255,255,0.3)',
                }}
                transition={{
                  delay: 0.2,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                src={readingRoom}
                alt="readingRoom"
                className=" xl:h-[360px] w-full rounded-[4rem]"
              />
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="bg-dark rounded-full absolute top-[80%] xl:top-[78%] left-[5%] px-5 xl:px-10 p-3 xl:py-5">
                Home insurance
              </motion.p>
            </motion.div>
            <motion.div className="col-span-1 flex justify-center items-center">
              <motion.img
                initial={{ height: 0, boxShadow: 'none', opacity: 0 }}
                whileHover={{
                  boxShadow: '0 0 50px rgb(255,255,255,0.3)',
                }}
                whileInView={{
                  height: '360px',
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                src={lifeguard}
                alt="lifeguard"
                className="rounded-full  "
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}
              className="col-span-1 bg-[#0D1D30] py-4 xl:py-8 px-5 xl:px-10 w-full flex flex-col justify-between rounded-[2rem] xl:rounded-[4rem]">
              <div>
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8,
                    type: 'spring',
                    mass: 0.4,
                    damping: 15,
                    duration: 0.8,
                  }}
                  className="text-2xl xl:text-4xl font-bold">
                  Best Choice
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1,
                    type: 'spring',
                    mass: 0.4,
                    damping: 15,
                    duration: 0.8,
                  }}
                  className="pt-5">
                  Not all insurance are the same. That&apos;s why agency knows
                  that your insurance should be customized to fit your situation
                </motion.p>
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="bg-bright text-black rounded-full text-sm xl:text-base  px-10 py-4">
                View all services
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div className="grid grid-cols-3 gap-x-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.4,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}
              className="w-full  relative">
              <motion.img
                whileHover={{
                  boxShadow: '0 0 50px rgb(255,255,255,0.3)',
                }}
                src={bmw}
                alt="bmw"
                className="w-full rounded-[4rem]"
              />
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.6,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="bg-dark rounded-full absolute top-[70%] left-[8%] xl:left-[5%] px-5 xl:px-10 p-3 xl:py-5">
                Vehicle damage
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.6,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}
              className="w-full relative">
              <motion.img
                whileHover={{
                  boxShadow: '0 0 50px rgb(255,255,255,0.3)',
                }}
                src={house}
                alt="bmw"
                className="w-full rounded-[4rem]"
              />
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.8,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="bg-dark rounded-full absolute top-[70%] left-[8%] xl:left-[5%] px-5 xl:px-10 p-3 xl:py-5">
                Mortgage insurance
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.8,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}
              className="w-full relative">
              {' '}
              <motion.img
                whileHover={{
                  boxShadow: '0 0 50px rgb(255,255,255,0.3)',
                }}
                src={drugs}
                alt="bmw"
                className="w-full rounded-[4rem]"
              />
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 2,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="bg-dark rounded-full absolute top-[70%] left-[8%] xl:left-[5%] px-5 xl:px-10 p-3 xl:py-5">
                Medical expenses
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default BestChoice;
