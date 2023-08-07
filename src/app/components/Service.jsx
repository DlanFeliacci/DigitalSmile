'use client'
import Image from "next/image"
import Photography from '../../../public/Photography-icon.png'
import PrinterIcon from '../../../public/printer.png'
import Webdesign from '../../../public/webdesign.png'
import Signage from '../../../public/signage.png'
import Catalogue from '../../../public/catalogue-icon.png'
import Logo from '../../../public/Logo-icon.png'

const Service = () => {
  return (
    <>
      <div className="custom-services h-auto max-w-full" loading='lazy'></div>
      {/* <div className="ml-[100px] w-[250px] md:w-[400px] lg:w-auto h-auto max-w-[600px] relative sm:bottom-[450px] lg:bottom-[500px] xl:bottom-[600px]">
        <p className="text-white font-black sm:leading-[40px] md:leading-[50px] lg:leading-[80px] text-start text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Working with specialists is the requirement for a quality work</p>
      </div> */}
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold lg:pb-[100px] md:leading-[60px]">
        Working With Specialists Is The Requirement For A Quality Work.
      </div>
      <section className="flex justify-center pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-base text-body-color text-gray-500">
                  You can purchase a high quality service with us and let us do the rest, here are our domain of expertise
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
          <ServiceCard
              title="Graphic Creation"
              details="Logo Creation , Graphical Charter , Print Label , Packaging... "
              icon={<Image src={Logo} className="group-hover:animate-wiggle"/>}
            />
            <ServiceCard
              title="Printing"
              details="Digital Printing / Offset Printing / Flexography / Heliogravure..."
              icon={<Image src={PrinterIcon} className="group-hover:animate-wiggle"/>}
            />
            <ServiceCard
              title="Signage System"
              details="Advertisment Signage / Road Pannel / Totem / Plaque..."
              icon={<Image src={Signage} className="group-hover:animate-wiggle"/>}
            />
            <ServiceCard
              title="Digital Marketing"
              details="Websites Creation / E-Commerce / Mobile App / Social Media Management..."
              icon={<Image src={Webdesign} className="group-hover:animate-wiggle"/>}
            />
            <ServiceCard
              title="Audiovisual Production"
              details="Photo Shooting - Video Shooting - Commercial - Business Portrait Photography..."
              icon={<Image src={Photography} className="group-hover:animate-wiggle"/>}
            />
            <ServiceCard
              title="Other"
              details="Lorem - Ipsum - Lorem - Ipsum ..."
              icon={<Image src={Catalogue} className="group-hover:animate-wiggle"/>}
            />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 group">
        <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
          <div
            className={`m-auto flex h-[130px] w-[130px] p-3 items-center justify-center rounded-2xl bg-primary`}
          >
            {icon}
          </div>
          <h4 className="text-center text-[#534092] mb-3 text-3xl font-semibold text-dark">{title}</h4>
          <p className="text-body-color text-justify">{details.split(/\r?\n/)}</p>
        </div>
      </div>
    </>
  );
};
