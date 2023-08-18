import { Carousel } from '@material-tailwind/react';
import { BsAsterisk } from 'react-icons/bs';
import { exportOne, exportThree, exportTwo } from '../assets';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
const Experts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start({ opacity: 1, scale: 1 });
    }
  }, [isInView]);

  //#0D1D30
  return (
    <section className="text-white px-6 xl:px-20 pb-10 xl:pb-20  bg-dark flex items-center space-x-16 ">
      <div className="text-white flex items-center space-x-16 ">
        <Carousel
          autoplay
          autoplayDelay={5000}
          loop
          className="rounded-xl hidden lg:flex w-1/2  xl:w-2/3 h-full"
          nextArrow={() => false}
          prevArrow={() => false}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block cursor-pointer rounded-full h-[9px] transition-all  content-['']  w-[9px] ${
                    activeIndex === i ? 'bg-white ' : ' bg-[#304D58]'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}>
          <div className="flex items-center space-x-5 xl:space-x-9 mb-[50px]   bg-[#0D1D30] p-3 xl:p-6 rounded-[5em]">
            <motion.img
              initial={{ height: 0, opacity: 0 }}
              whileInView={{
                height: '100%',
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.5,
              }}
              src={exportOne}
              alt="img"
              className="rounded-full w-1/4 xl:w-1/3"
            />
            <div className="flex flex-col space-y-9 p-8 w-1/2">
              <motion.h1
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="text-2xl xl:text-4xl">
                Michelle Tumba
              </motion.h1>
              <motion.h6
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
                }}
                className="text-[12px] xl:text-base text-[#314663]">
                The agency founder
              </motion.h6>
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="text-sm xl:text-base">
                With over twenty years of industry experience,
                &apos;Darcy&apos;s Insurance products&apos; has learned a lot.
                The one thing we know for sure is that we&apos;re all about you.
                If you find searching for insurance frustrating, we are here to
                help.
              </motion.p>
              <motion.button
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
                }}
                className="bg-light font-bold text-black rounded-full px-5 py-2  xl:px-10 xl:py-4">
                Get a consultation
              </motion.button>
            </div>
          </div>
          <div className="flex items-center space-x-5 xl:space-x-9 mb-[50px]   bg-[#0D1D30] p-3 xl:p-6 rounded-[5em]">
            <motion.img
              initial={{ height: 0, opacity: 0 }}
              whileInView={{
                height: '100%',
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.5,
              }}
              src={exportTwo}
              alt="img"
              className="rounded-full w-1/4 xl:w-1/3"
            />
            <div className="flex flex-col space-y-9 p-8 w-1/2">
              <motion.h1
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="text-2xl xl:text-4xl">
               Georgia Green
              </motion.h1>
              <motion.h6
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
                }}
                className="text-[12px] xl:text-base text-[#314663]">
                Insurance appraiser
              </motion.h6>
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="text-sm xl:text-base">
                Hi! I estimate the value of the insured items and evaluate the
                insure events. Also, I conduct investigations, inspecting
                damaged cars and buildings. Therefore, I have a great
                responsibility for providing insurance 
              </motion.p>
              <motion.button
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
                }}
                className="bg-light font-bold text-black rounded-full px-5 py-2  xl:px-10 xl:py-4">
                Get a consultation
              </motion.button>
            </div>
          </div>
          {/* <div className="flex items-center space-x-5 xl:space-x-9 mb-[50px]   bg-[#0D1D30] p-3 xl:p-6 rounded-[5em]">
            <motion.img
              initial={{ height: 0, opacity: 0 }}
              whileInView={{
                height: '100%',
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.5,
              }}
              src={exportTwo}
              alt="img"
              className="rounded-full  w-1/4 xl:w-1/3"
            />
            <div className="flex flex-col space-y-9 p-8 w-1/2">
              <motion.h1
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                 className="text-2xl xl:text-4xl">
                Georgia Hill
              </motion.h1>
              <motion.h6
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
                }}
                  className="text-[12px] xl:text-base text-[#314663]">
                Insurance appraiser
              </motion.h6>
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}  className="text-sm xl:text-base">
                Hi! I estimate the value of the insured items and evaluate the
                insure events. Also, I conduct investigations, inspecting
                damaged cars and buildings. Therefore, I have a great
                responsibility for providing insurance to our clients. I hope
                you will be comfortable with us.
              </motion.p>
              <motion.button
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
                }}
                className="bg-light font-bold text-black rounded-full px-5 py-2  xl:px-10 xl:py-4">
                Get a consultation
              </motion.button>
            </div>
          </div> */}
          <div className="flex items-center space-x-5 xl:space-x-9 mb-[50px]   bg-[#0D1D30] p-3 xl:p-6 rounded-[5em]">
            <motion.img
              initial={{ height: 0, opacity: 0 }}
              whileInView={{
                height: '100%',
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.5,
              }}
              src={exportThree}
              alt="img"
              className="rounded-full  w-1/4 xl:w-1/3"
            />
            <div className="flex flex-col space-y-9 p-8 w-1/2">
              <motion.h1
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="text-2xl xl:text-4xl">
                Grace White
              </motion.h1>
              <motion.h6
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
                }}
                className="text-[12px] xl:text-base text-[#314663]">
                The agency founder
              </motion.h6>
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  type: 'spring',
                  mass: 0.4,
                  damping: 15,
                  duration: 0.8,
                }}
                className="text-sm xl:text-base">
                With over twenty years of industry experience,
                &apos;Darcy&apos;s Insurance products&apos; has learned a lot.
                The one thing we know for sure is that we&apos;re all about you.
                If you find searching for insurance frustrating, we are here to
                help.
              </motion.p>
              <motion.button
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
                }}
                className="bg-light font-bold text-black rounded-full px-5 py-2  xl:px-10 xl:py-4">
                Get a consultation
              </motion.button>
            </div>
          </div>
        </Carousel>

        <div className="flex space-x-3">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              mass: 0.4,
              damping: 15,
              duration: 0.8,
            }}>
            <BsAsterisk className="bg-white  my-3 text-black p-1 w-10 h-10 rounded-full animate-spin-slow" />
          </motion.div>
          <div className="text-6xl font-bold">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}>
              Our
            </motion.div>
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}>
              experts
            </motion.h1>{' '}
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              tr
              transition={{
                delay: 0.6,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}>
              say
            </motion.h1>{' '}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
