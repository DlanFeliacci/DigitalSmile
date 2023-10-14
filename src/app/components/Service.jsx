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
      <div className="custom-services h-auto max-w-full" loading="lazy"></div>
      {/* <div className="ml-[100px] w-[250px] md:w-[400px] lg:w-auto h-auto max-w-[600px] relative sm:bottom-[450px] lg:bottom-[500px] xl:bottom-[600px]">
        <p className="text-white font-black sm:leading-[40px] md:leading-[50px] lg:leading-[80px] text-start text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Working with specialists is the requirement for a quality work</p>
      </div> */}
      <div className="backdrop-blur-sm bg-black/30  text-center absolute top-[65%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2  p-4 md:leading-[60px]  rounded-lg">
        <p className="text-white opacity-80 text-3xl md:text-5xl font-bold">Working With Specialists Is The Requirement For A Quality Work</p>
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
                  You can purchase a high quality service with us and let us do
                  the rest, here are our domain of expertise
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <ServiceCard
              title="Graphic Creation"
              // details="Logo Creation , Graphical Charter , Print Label , Packaging... "
              details={
                <div className="text-center">
                  <p className="hover:scale-110 duration-200">Graphical Charter</p>
                  <p className="hover:scale-110 duration-200">Logo Cretion</p>
                  <p className="hover:scale-110 duration-200">Packaging</p>
                  <p className="hover:scale-110 duration-200">Label</p>
                </div>
              }
              icon={
                <Image
                  src={Logo}
                  alt="img"
                  className="group-hover:animate-wiggle"
                />
              }
            />
            <ServiceCard
              title="Printing"
              details={
                <div className="text-center">
                  <p className="hover:scale-110 duration-200">Digital Printing</p>
                  <p className="hover:scale-110 duration-200">Offset Printing</p>
                  <p className="hover:scale-110 duration-200">Flexography</p>
                  <p className="hover:scale-110 duration-200">Heliogravure</p>
                </div>
              }
              icon={
                <Image
                  src={PrinterIcon}
                  alt="img"
                  className="group-hover:animate-wiggle"
                />
              }
            />
            <ServiceCard
              title="Signage System"
              details={
                <div className="text-center">
                  <p className="hover:scale-110 duration-200">Advertisment Signage</p>
                  <p className="hover:scale-110 duration-200">Road Pannel</p>
                  <p className="hover:scale-110 duration-200">Totem</p>
                  <p className="hover:scale-110 duration-200">Plaque</p>
                </div>
              }
              icon={
                <Image
                  src={Signage}
                  alt="img"
                  className="group-hover:animate-wiggle"
                />
              }
            />
            <ServiceCard
              title="Digital Marketing"
              details={
                <div className="text-center">
                  <p className="hover:scale-110 duration-200">Social Media Management</p>
                  <p className="hover:scale-110 duration-200">Websites Creation</p>
                  <p className="hover:scale-110 duration-200">E-Commerce</p>
                  <p className="hover:scale-110 duration-200">Mobile App</p>
                </div>
              }
              icon={
                <Image
                  src={Webdesign}
                  alt="img"
                  className="group-hover:animate-wiggle"
                />
              }
            />
            <ServiceCard
              title="Audiovisual Production"
              // details="Photo Shooting - Video Shooting - Commercial - Business Portrait Photography..."
              details={
                <div className="text-center">
                  <p className="hover:scale-110 duration-200">Business Portrait Photography</p>
                  <p className="hover:scale-110 duration-200">Photo Shooting</p>
                  <p className="hover:scale-110 duration-200">Video Shooting</p>
                  <p className="hover:scale-110 duration-200">Commercial</p>
                </div>
              }
              icon={
                <Image
                  src={Photography}
                  alt="img"
                  className="group-hover:animate-wiggle"
                />
              }
            />
            <ServiceCard
              title="Other"
              details={
                <div className="text-center">
                  <p className="hover:scale-110 duration-200">Empty</p>
                  <p className="hover:scale-110 duration-200">Empty</p>
                  <p className="hover:scale-110 duration-200">Empty</p>
                  <p className="hover:scale-110 duration-200">Empty</p>
                </div>
              }
              icon={
                <Image
                  src={Catalogue}
                  alt="img"
                  className="group-hover:animate-wiggle"
                />
              }
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
          <div className="text-body-color text-justify font-semibold cursor-pointer">{details}</div>
        </div>
      </div>
    </>
  );
};
