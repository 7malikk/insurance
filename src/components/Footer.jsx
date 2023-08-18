import { MdDateRange } from 'react-icons/md';
import { FaRegLifeRing } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section className="bg-dark text-white ">
      <div className="flex justify-between w-full gap-x-20 xl:gap-x-40  px-6 xl:px-20 pb-10 xl:pb-20  ">
        <div className="w-1/2 space-y-10">
          <motion.h4
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
            }}
            className="text-5xl font-bold ">
            Need numbers?
          </motion.h4>
          <div className="flex justify-between w-full">
            <motion.p
              initial={{ y: 10, scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                y: 0,
                opacity: 1,
                originX: 0,
              }}
              transition={{
                delay: 0.4,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}
              className="bg-white px-5 py-2 rounded-full text-black">
              Travel
            </motion.p>
            <motion.p
              initial={{ y: 10, scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                y: 0,
                opacity: 1,
                originX: 0,
              }}
              transition={{
                delay: 0.6,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}
              className="bg-[#141B28]  px-5 py-2 rounded-full">
              Health
            </motion.p>
            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                originX: 0,
              }}
              transition={{
                delay: 1,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}
              className="bg-[#141B28]  px-5 py-2 rounded-full">
              CASCO
            </motion.p>
            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,

                opacity: 1,
                originX: 0,
              }}
              transition={{
                delay: 1,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}
              className="bg-[#141B28]  px-5 py-2 rounded-full">
              Mortage
            </motion.p>
            <motion.p
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
              className="bg-[#141B28]  px-5 py-2 rounded-full">
              Fire
            </motion.p>
          </div>
          <div className="space-y-10">
            <form className="flex justify-between w-full">
              <label className="space-y-2">
                <motion.p
                  initial={{ y: 10, scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    originX: 0,
                  }}
                  transition={{
                    delay: 0.6,
                    type: 'spring',
                    mass: 0.4,
                    damping: 15,
                    duration: 0.8,
                  }}
                  className="text-sm">
                  Enter the country
                </motion.p>
                <motion.input
                  initial={{ y: 10, scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    originX: 0,
                  }}
                  transition={{
                    delay: 0.8,
                    type: 'spring',
                    mass: 0.4,
                    damping: 15,
                    duration: 0.8,
                  }}
                  type="text"
                  placeholder="Australia"
                  className="outline-none bg-[#1F283D]  px-5 py-3  rounded-full"
                />
              </label>
              <label className="space-y-2 relative">
                <motion.p
                  initial={{ y: 10, scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    originX: 0,
                  }}
                  transition={{
                    delay: 0.8,
                    type: 'spring',
                    mass: 0.4,
                    damping: 15,
                    duration: 0.8,
                  }}
                  className="text-sm">
                  Choose travel dates
                </motion.p>
                <motion.input
                  initial={{ x: 10, scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    x: 0,
                    opacity: 1,
                    originX: 0,
                  }}
                  transition={{
                    delay: 1,
                    type: 'spring',
                    mass: 0.4,
                    damping: 15,
                    duration: 0.8,
                  }}
                  type="text"
                  placeholder="11 Apr - 20 Apr"
                  className="outline-none bg-[#1F283D]  px-5 py-3 rounded-full"
                />
                <motion.div
                  initial={{ x: 10, scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    x: 0,
                    opacity: 1,
                    originX: 0,
                  }}
                  transition={{
                    delay: 1,
                    type: 'spring',
                    mass: 0.4,
                    damping: 15,
                    duration: 0.8,
                  }}
                  className="absolute top-[41%] right-3 ">
                  <MdDateRange className="text-[#425275] w-7 h-7 z-10" />
                </motion.div>
              </label>
            </form>
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
              className="bg-bright text-white w-full rounded-full   px-10 py-4">
              Calculate
            </motion.button>
          </div>
        </div>
        <div className="w-1/2 space-y-10">
          <div>
            <motion.h3
              initial={{ y: 10, scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                y: 0,
                opacity: 1,
                originX: 0,
              }}
              transition={{
                delay: 0.6,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}>
              Insurance services
            </motion.h3>
            <motion.ul
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
              className="flex space-x-6  text-[#656c75]">
              <li>Meidcal expenses</li>
              <li>Family health insurance</li>
            </motion.ul>
            <motion.ul
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
              className="flex space-x-6 text-[#656c75]">
              <li>Vehicle damage</li>
              <li>Property loss</li>
              <li>Fire</li>
            </motion.ul>
          </div>
          <div>
            <motion.h3
              initial={{ x: 10, scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                x: 0,
                opacity: 1,
                originX: 0,
              }}
              transition={{
                delay: 0.8,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}>
              Company
            </motion.h3>
            <motion.ul
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
              className="flex space-x-6  text-[#656c75]">
              <li>About us</li>
              <li>Career</li>
              <li>Help</li>
              <li>FAQ</li>
              <li>Blog</li>
            </motion.ul>
          </div>
          <div>
            <motion.h3
              initial={{ x: 10, scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                x: 0,
                opacity: 1,
                originX: 0,
              }}
              transition={{
                delay: 1,
                type: 'spring',
                mass: 0.4,
                damping: 15,
                duration: 0.8,
              }}>
              Bonus
            </motion.h3>
            <motion.ul
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
              className="flex space-x-6  text-[#656c75]">
              <li>Gift certificate</li>
              <li>Affiliate Program</li>
              <li>Trainings</li>
            </motion.ul>
          </div>
        </div>
      </div>

      <div className="flex  pt-24   px-6 xl:px-20 rounded-t-xl items-center justify-between p-6  from-[#10323a] text-white bg-gradient-to-t to-[#0C1018] ">
        <div className="flex items-center  space-x-5">
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
            <FaRegLifeRing className="w-14 h-14 animate-spin-slow text-white z-10" />
          </motion.div>
          <motion.h4
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              type: 'spring',
              mass: 0.5,
              damping: 15,
              duration: 0.8,
            }}>
            Darsy&apos;s insurance products
          </motion.h4>
        </div>

        <motion.h4
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            type: 'spring',
            mass: 0.6,
            damping: 15,
            duration: 0.8,
          }}
          className="underline">
          Privacy Policy
        </motion.h4>
      </div>
    </section>
  );
};

export default Footer;
