import Image from "next/image";
import { motion } from "framer-motion";
import mehdi from "@images/Cristiano-Ronaldo4.jpg";

const WorkedWith = ({ section }) => {
  return (
    <motion.div
      className="md:col-span-2 bg-gray-300 dark:bg-gray-900
			 rounded-3xl text-gray-700 dark:text-gray-100 aspect-2/1 pb-4 md:pb-0"
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
         
          
          
          <div className="text-xl md:text-4xl 2xl:text-4xl 2xl:mt-16 m-1 md:ml-9 ml-5 md:m-8 font-nunito font-bold d">
            
            
         
          
          <div style={{ textAlign: 'center' }}>
            
          
          <p style={{ marginRight: '10px',  fontSize: '40px', fontWeight: 'bold'}}>Worked With :</p>
        </div>
            
          </div>
        </div>
        
        <div className="grid grid-cols-2 flex flex-col ml-5 justify-center 2xl:mt-10 sm:-mt-6 sm:ml-8 md:ml-6">
          <div className="lg:text-xl xl:text-2xl 2xl:mr-20 font-nunito font-bold dark:text-gray-300">
            
            
            <a
              className="ml-1 underline-offset-2 underline focus:outline-none "
              href="https://www.instagram.com/babafinder"
              rel="noreferrer"
              target="_blank"
            >
              Babafinder
            </a> 
            
            
          </div>
          
          <br />
        
          

          <div className="lg:text-xl xl:text-2xl 2xl:mr-20 font-nunito font-bold dark:text-gray-300">
        
            <a
              className="ml-1 underline-offset-2 underline focus:outline-none "
              href="https://www.ahiddensociety.com/"
              rel="noreferrer"
              target="_blank"
            >

                AhiddenSociety 
                
            </a> 
            
            
        </div>
        
        <br />
        <div className="lg:text-xl xl:text-2xl 2xl:mr-20 font-nunito font-bold ">
        
            <a
              className="ml-1 underline-offset-2 underline focus:outline-none "
              href="https://flarebots.com/"
              rel="noreferrer"
              target="_blank"
              
            >
                Escape Notify ( Flare )
            </a> 
        </div>
        <br />
        
        
        <div className="lg:text-xl xl:text-2xl 2xl:mr-20 font-nunito font-bold dark:text-gray-300">
        
            <a
              className="ml-1 underline-offset-2 underline focus:outline-none "
              href="https://www.freya.studio/"
              rel="noreferrer"
              target="_blank"
              
            >

                Freya Studio 
            </a> 
        </div>
        
            <br />
            <br />

            
            

          
        </div>
      </div>
    </motion.div>
  );
};

export default WorkedWith;
