import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import pricetag from "./price-tags.png"
import hand from "./handshake.png"
import people from "./people.png"
import gem from "./gem.png"
import custom from "./custom.png"
const Price = () => {
  // Expandable section logic
  const ExpandableSection = ({ price, description, details, style,titlestyle,icon,price1,duration }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className={`${style} shadow-lg flex flex-col items-center  mt-20   transform transition-transform duration-300 ease-in-out  mb-4`}>
        <img  className="h-28 mt-4" src={icon} alt="" />
        <h3 className={`${titlestyle} text-2xl mt-2 mb-4    font-semibold  px-4 py-1 `}>{price}</h3>
        <p className="text-gray-700 px-4 mb-4">{description}</p>
        <h1 className="text-center text-4xl">₹{price1} <span className="text-sm">{duration}</span></h1>
        {isExpanded && (
          <div className="mt-4 w-full">
            
          <ul className="list-disc ml-5 mt-4 text-gray-700 ">
            {details.map((detail, index) => (
              <li key={index} className="flex items-center text-sm">
                <FaCheckCircle className="text-blue-600 mr-2" />
                {detail}
              </li>
            ))}
          </ul>
            </div>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className=" mt-4 px-4 py-2  transition duration-300"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
    );
  };

  const SectionCard = ({ price, description, details, style }) => {
    return (
      <div className={`${style} shadow-lg rounded-lg p-6 transition-transform 
        duration-300 ease-in-out hover:scale-105 border border-gray-200 hover:border-gray-400`}>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-2">{price}</h3>
        <p className="text-gray-700">{description}</p>
        <ul className="list-disc ml-5 text-gray-600 mt-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center text-sm">
              <FaCheckCircle className="text-green-500 mr-2" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-white  pt-20 ">
      <div className="container mx-auto mt-12 px-4 md:px-8 max-w-7xl">
        {/* Pricing Header */}
        <div className="bg-pricing flex flex-col justify-center items-center h-44 rounded-md bg-cover shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 text-center">Pricing <span className="text-orange-500"> Packages</span> </h1>
          <p className="text-lg md:text-xl text-center">Explore Our Competitive Pricing for Comprehensive Digital Marketing Services – Growth is Just a Click Away!</p>
        </div>

        {/* Basic Plans Section */}
        <div className="mb-16 r p-10 ">
          
          <div className="grid grid-cols-1 r p-10 md:grid-cols-4 gap-6">
            <ExpandableSection
              icon={hand}
              price1={15000}
              price="Basic"

              duration="/mo"
              description="Essential online presence with targeted outreach for your growth."
              details={[
                "1 ad reel",
                "8 reels",
                "4 quotes",
                "4 posters",
                "2 carousels",
                "Free festival posts",
              ]}
              titlestyle=""
              style="bg-orange-50 border-orange-500  border-t-8 rounded-md" // Custom style for Basic Plans
              />
            <ExpandableSection
              price="Standard"
              price1={20000}
               duration="/mo"         
              icon={people}
              description="Comprehensive strategies for increased visibility and engagement."
              details={[
                "Everything included in Basic Plan",
                "12 reels/shorts",
                "1 long video",
                
              ]}
              titlestyle=""
              style=" bg-blue-50 border-t-8 border-blue-500   bg-cover z-10  rounded-md" // Custom style for Basic Plans
              />
            <ExpandableSection
              price="Premium"
              price1={25000}
               duration="/mo"           
              icon={gem}
              description="Advanced marketing solutions for maximum growth potential."
              details={[
                "Everything included in Standard Plan",
                "1 podcast",
               
              ]}
              titlestyle=" "
              style="bg-red-50  border-t-8 border-red-600    rounded-md" // Custom style for Basic Plans
              />
            <ExpandableSection
              price="Cusomised Plan"
              price1={5000}
              duration="Off"
              icon={custom}
              description="Tailored Digital Marketing Solutions for Your Brand's Unique Needs"
              details={[
                "5000 off on SEO and SMO",
                "Choose any services",
               
              ]}
              titlestyle=" "
              style="bg-zinc-300  border-t-8 border-zinc-600    rounded-md" // Custom style for Basic Plans
              />
          </div>
        </div>

        {/* Bonus Plans Section */}
        <div className="mb-16 mt-20">
          <div className="bg-gradient-to-tr from-blue-400 to-blue-800 h-20 w-full max-w-md  pt-4 items-center rounded-md mx-auto shadow-lg">
            <h2 className="text-2xl md:text-4xl font-semibold text-center text-white">Bonus Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExpandableSection
              price="Bonus-1"
              price1={10000}
              icon={pricetag}
              description=""
              details={[
                "1 ad reel",
                "3 reels",
                "4 quotes",
                "3 posters",
                "1 carousel",
              ]}
              titlestyle=""
              style="bg-zinc-100" // Custom style for Bonus Plans
              />
            <ExpandableSection
              price="Bonus-2"
              price1={5000}
              icon={pricetag}
              description=""
              details={[
                "Ad reel",
                "6 posters",
              ]}
              titlestyle=""
              style="bg-zinc-100" // Custom style for Bonus Plans
              />
          </div>
        </div>

        {/* Trials Section */}
        <div className="mb-16">
          <h2 className="text-2xl text-center bg-blue-500 w-32 text-white rounded-md py-1 font-semibold mb-4">Trials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <SectionCard
              price="₹200"
              description="Video (when the doctor provides the video)"
              details={[]}
              style="bg-zinc-50" // Custom style for Trials
            />
            <SectionCard
              price="₹2,500"
              description="1 week page handling (content provided by the doctor, we also run ads)"
              details={[]}
              style="bg-zinc-50" // Custom style for Trials
            />
            <SectionCard
              price="₹200"
              description="Sample Article"
              details={[]}
              style="bg-zinc-50" // Custom style for Trials
            />
          </div>
        </div>

        
        
      </div>
    </div>
  );
};

export default Price;
