import Image from "next/image"
import Photography from '../../../public/Photography-icon.png'
import PrinterIcon from '../../../public/Printer-icon.png'
import Webdesign from '../../../public/Webdesign-icon.png'
import Catalogue from '../../../public/catalogue-icon.png'
import Logo from '../../../public/Logo-icon.png'

const Service = () => {
  return (
    <>
      <div className="custom-services"></div>
      <section className="flex justify-center pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Services
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <ServiceCard
              title="Photography"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<Image src={Photography}/>}
            />
            <ServiceCard
              title="Printing"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<Image src={PrinterIcon}/>}
            />
            <ServiceCard
              title="Web Design"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<Image src={Webdesign}/>}
            />
            <ServiceCard
              title="Packaging"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<Image src={Catalogue}/>}
            />
            <ServiceCard
              title="Photography"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<Image src={Photography}/>}
            />
            <ServiceCard
              title="Logo"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<Image src={Logo}/>}
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
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
          <div
            className={`m-auto flex h-[130px] w-[130px] p-3 items-center justify-center rounded-2xl bg-primary`}
          >
            {icon}
          </div>
          <h4 className="text-center text-[#534092] mb-3 text-3xl font-semibold text-dark">{title}</h4>
          <p className="text-center text-body-color">{details}</p>
        </div>
      </div>
    </>
  );
};
