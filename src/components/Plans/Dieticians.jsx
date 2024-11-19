import React from 'react';
import { NavLink } from 'react-router-dom';



const Dieticians = () => {
  return (
    <div className="bg-gray-100 pt-20 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-dietician bg-cover bg-center h-screen">
        <div className="absolute inset-0   flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Powering Dieticians <span className='text-orange-500'> & Nutritionists </span>  with Digital Marketing</h1>
          <p className="text-lg text-white mb-6">A Strategic Approach</p>
          <div>

          <NavLink to="/consult" className="bg-orange-500 mr-4 text-white rounded-3xl px-4 py-2 transition duration-500 text-lg ease-in-out hover:bg-black hover:text-orange-500">
          Get Free Consultation
        </NavLink>
        <NavLink to='/price' className="bg-blue-600 hover:bg-blue-700 rounded-3xl text-white font-bold py-2 px-4  text-lg">
          View Pricing
        </NavLink>
          </div>
        </div>
      </section>

      {/* Why Digital Marketing Services for Dieticians */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Why Digital Marketing Services for Dieticians & Nutritionists?</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">
          To thrive in the digital age, dieticians and nutritionists must embrace digital marketing to enhance their visibility and connect with patients. By adopting a comprehensive digital strategy, nutrition professionals can effectively promote their services, engage with clients, and build a robust online presence.
        </p>
      </section>

      {/* General Digital Marketing Strategies for Dieticians & Nutritionists */}
      <section className="py-16 px-6 bg-main bg-cover bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">General Digital Marketing Strategies for Dieticians & Nutritionists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{strategy.title}</h3>
              <p>{strategy.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services for Dieticians */}
      <section className="py-16 px-6 bg-plans bg-cover bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Specific Services and Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
              <img src={service.image} alt={service.title} className="w-24 h-24 mb-4"/>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>

      <div className="flex justify-center py-12 ">
      <NavLink to='/price' className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg">
          View Pricing
        </NavLink>  
      </div>
      </section>

      {/* Pricing Button */}
    </div>
  );
};

// Data for strategies and services
const strategies = [
  { title: "Digital marketing for dieticians and nutritionists", description: "Employing specialized strategies to boost online visibility and attract clients." },
  { title: "Social media marketing for healthcare professionals", description: "Engaging with audiences through platforms like Facebook, Instagram, and LinkedIn." },
  { title: "Nutrition clinic marketing", description: "Creating targeted campaigns to highlight the unique services of nutrition clinics." },
  { title: "Dietician marketing", description: "Promoting the expertise of dieticians to attract a loyal client base." },
  { title: "Healthcare marketing", description: "Developing comprehensive marketing plans to elevate the brand of healthcare providers." },
  { title: "Doctor marketing", description: "Showcasing the skills of healthcare professionals to foster patient trust." }
];

const services = [
  { image: "https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "Website Design for Dieticians", description: "Crafting user-friendly websites for a seamless client experience." },
  { image: "https://img.freepik.com/premium-vector/search-engine-optimization_773186-1008.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "SEO for Nutrition Clinics", description: "Optimizing content to rank higher on search engines and attract clients." },
  { image: "https://img.freepik.com/premium-vector/pay-per-click-internet-advertising_773186-1437.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "PPC Advertising for Healthcare", description: "Running pay-per-click campaigns to drive targeted traffic." },
  { image: "https://img.freepik.com/free-vector/social-tree-concept-illustration_114360-4898.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "Social Media Management", description: "Curating content across social platforms for a professional presence." },
  { image: "https://img.freepik.com/premium-vector/colorful-picture-woman-using-laptop-with-facebook-screen_835895-17070.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "Facebook Marketing for Dieticians", description: "Using Facebook ads to reach a broad audience." },
  { image: "https://img.freepik.com/premium-vector/follow-us-facebook-logo-3d-social-media-network-graphic_1147429-8209.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "Instagram Marketing for Healthcare", description: "Engaging clients through visual content on Instagram." }
];

export default Dieticians;
