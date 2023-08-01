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
      <div className="custom-services h-auto max-w-full"></div>
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
              title="Graphic Creation"
              details="Our communication and advertising agency offers you these communication strategy consulting services which also include
              all of the production and implementation of all your communication operations.
              We will support you in all your graphic design projects, website design, digital transformation, printing
              digital & offset, Screen printing, Signage, Printing on Advertising Objects, Textiles... "
              icon={<Image src={Logo}/>}
            />
            <ServiceCard
              title="Printing"
              details="Has sed verum sed aptae medelarum aquae aquae his usus calentes navigerum has usus locis natura speciem captis plurimis ad Pompeius flumen medelarum et verum sorte has suapte pari dictione aquae emergunt iuris navigerum suapte regiones locis in delata flumen delata sorte emergunt his locis tractibus Iudaeis suapte provinciae sed."
              icon={<Image src={PrinterIcon}/>}
            />
            <ServiceCard
              title="Signage System"
              details="Company signage or professional signage refers to all of the means likely to indicate, inform or
              guide customers, employees and visitors to a point of sale or company premises. Report and vital for the company.
              Especially when you know that the first impression will never leave your visitors.
              Whether in terms of graphic design or the message to be conveyed, good signage has a significant impact on customers.
              and serves as an advertising office at a lower cost compared to conventional advertisements.
              To show a communication in accordance with your image, we will provide you with several solutions that will help you to
              better promote your Hotel."
              icon={<Image src={Signage}/>}
            />
            <ServiceCard
              title="Digital Marketing"
              details="The creation of websites, mobile apps, software and digital transformation is a job that requires expertise and mobilization
              of a whole team of professional and creative developers. Your website is the identity and the backbone of your communication.
              To carry out a web project, you must structure your offer, present your company and work on your commercial speech."
              icon={<Image src={Webdesign}/>}
            />
            <ServiceCard
              title="Audiovisual Production"
              details="Photos and videos make it possible to capture and fix the attention immediately because as the expression says: « an image is better than a thousand.
              words ! »
              We identify and analyze your target in order to make your message effective and persuasive to highlight your strengths and specificities. So make an impression with fast, efficient and economical communication."
              icon={<Image src={Photography}/>}
            />
            <ServiceCard
              title="Other"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<Image src={Catalogue}/>}
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
          <p className="text-body-color text-justify">{details}</p>
        </div>
      </div>
    </>
  );
};
