import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Team = () => {
    return (<>
        <section className="overflow-hidden pt-28 relative text-gray-300 font-base bg-gray-900 body-font">
        <div className="z-40 leading-none  absolute top-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#374151"></path>
    </svg>
</div>

          <Image src="/assets/background/zodiac.jpg" fill className="opacity-20"/>

        <div className="container px-5 py-14 mx-auto  md:px-20">
        <motion.div
     initial={{  y: 100,opacity:0}}
     whileInView={{ y: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }} className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-bold font-heading title-font mb-4 text-green-500">About Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </motion.div>
          <div className="flex flex-wrap -m-4">
          <motion.div
     initial={{  x: -100,opacity:0}}
     whileInView={{ x: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 1.2 }} className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">Deepak Karmchandani</h2>
                  <h3 className="text-gray-300 font-medium  mb-3">Role 1</h3>
                  <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
     initial={{  x: 100,opacity:0}}
     whileInView={{ x: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 1.2 }} className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201"/>
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">Mukul</h2>
                  <h3 className="text-gray-300 font-medium  mb-3">Role 2</h3>
                  <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
            </div>
              </motion.div>
         </div>
        </div>
      </section>

      <section className="pt-6 pb-8 relative text-gray-300 bg-gray-700 body-font">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#111827"></path>
    </svg>
</div>

<div className="leading-none rotate-180 absolute bottom-0 left-0 w-full overflow-hidden">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#111827"></path>
    </svg>
</div>
  <div className="container mx-auto flex px-5 py-36 items-center justify-center flex-col">
  <motion.div
     initial={{  y: 100,opacity:0}}
     whileInView={{ y: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 1.2 }} className="text-center lg:w-2/3 w-full pb-12">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-heading font-bold text-white"><span className="text-green-500"> MSME </span>registered</h1>
      <p className="leading-relaxed mb-8 ">The Ministry of Micro, Small and Medium Enterprises is the ministry in the Government of India. It is the apex executive body for the formulation and administration of rules, regulations and laws relating to micro, small and medium enterprises in India.</p>
      <div className="flex justify-center">
        <Link href="https://msme.gov.in/">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Visit MSME website</button>
        </Link>
      </div>
    </motion.div>
 
    <motion.div
     initial={{  y: 100,opacity:0}}
     whileInView={{ y: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 1.4 }} className="shadow-2xl shadow-blue-800 relative rounded-xl w-5/6 mb-14">
    <Image height={200} width={200} className=" w-full z-10 relative  object-cover object-center rounded-xl" alt="hero" src="/assets/msmeCertificate.jpg"/>

    {/* <div className="bg-green-500/40 w-full h-full absolute rounded-lg p-8 top-0  "></div> */}
    <div className="bg-blue-500/50 w-full h-full absolute rounded-lg  top-5  "></div>
      <div className="bg-blue-500/20 w-full h-full absolute rounded-lg scale-95  top-12  "></div>
      <div className="bg-blue-500/10 w-full h-full absolute rounded-lg scale-90 top-20  "></div>

    </motion.div>
 </div>
</section>
      </>
    )
}

export default Team
