import Image from "next/image";
import { motion } from "framer-motion";
import mehdi from "@images/mehdi.png";
//import Transparentpfp from "@images/png-clipart-cristiano-ronaldo-football-player-team-sport-cristiano-ronaldo.png";
const IntroCard = ({ section }) => {
  return (
    <motion.div
      className="md:col-span-2 bg-white dark:bg-gray-900
			 rounded-3xl text-gray-600 dark:text-gray-300 aspect-2/1 pb-4 md:pb-0"
      whileHover="groupHover"
      animate={{ opacity: ["all"].includes(section) ? 1 : 1 }}
      variants={{
        groupHover: {
          scale: 1.01,
          transition: {
            duration: 1000,
            ease: "easeInOut",
          },
        },
      }}
    >
      
      <div className="relative overflow-hidden"> 

      

        <div className="md:hidden absolute top-8 right-10 rotate-10 -mt-10 w-[400px]">
          
          
        </div>
        <div className="">
        
          <motion.div
            variants={{ groupHover: { y: 220 } }}
            style={{ rotate: 180, zIndex: 20 }}
            className="hidden 2xl:block absolute -top-32 2xl:-top-52 right-10 rotate-180
						-mt-10 w-32 2xl:w-60"
          >
            
          </motion.div>
        </div>
        <div>
          <motion.div
            variants={{ groupHover: { y: 150 } }}
            style={{ rotate: 180, zIndex: 20 }}
            className="2xl:hidden absolute -top-32 2xl:-top-52 right-10 rotate-90 -mt-10 w-32 2xl:w-60"
          >
            
            
          </motion.div>
         
          
          
          <div className="text-3xl md:text-4xl 2xl:text-4xl 2xl:mt-16 m-6 md:ml-6 ml-5 md:m-8 font-nunito font-bold">
         
          
          <div style={{ textAlign: 'center' }}>
          
          <p style={{ marginRight: '10px' }}>Hi, I'm mehdi</p>
            
        <Image src={mehdi}  width={125} height={175} className="rounded-full" />
        </div>
            
          </div>
        </div>
        
        <div className="flex flex-col ml-5 justify-center 2xl:mt-10 sm:-mt-6 sm:ml-8 md:ml-6">
          <div className="lg:text-xl xl:text-2xl 2xl:mr-20 font-nunito dark:text-gray-300">
            {" "}
            Developer and student at{" "}
            <a
              className="ml-1 underline-offset-2 underline focus:outline-none"
              href="https://www.univ-lille.fr/"
              rel="noreferrer"
              target="_blank"
            >
              
              University of Lille
            </a>
          </div>
          

          <div className="lg:text-xl xl:text-2xl 2xl:mr-20 font-nunito dark:text-gray-300">
            {" "}
            currently working at {" "}
            <a
              className="ml-1 underline-offset-2 underline focus:outline-none"
              href="https://whop.com/arcana-ltd/"
              rel="noreferrer"
              target="_blank"
            >

                Arcana 
            </a>{" "}
            as a full time developer and co founder and developer of {" "}
            <a
              className="ml-1 underline-offset-2 underline focus:outline-none"
              href="https://www.tikeymanager.com/main"
              rel="noreferrer"
              target="_blank"
            >
              Tikey
            </a>
            </div>
            <br />
            <br />

            
            

          
        </div>
      </div>
    </motion.div>
  );
};

export default IntroCard;
