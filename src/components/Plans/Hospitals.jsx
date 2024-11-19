import React from 'react';
import { NavLink } from 'react-router-dom';

const Hospitals = () => {
  return (
    <div className="bg-gray-100 pt-20 text-gray-900">
      {/* Hero Section */}
      <section className="relative  bg-center h-screen bg-hospital bg-cover">
        <div className="absolute inset-0 flex pb-20 flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4 transition-all duration-300 ease-in-out hover:text-dark-orange">
            Transforming Healthcare with Digital Marketing
          </h1>
          <p className="text-lg text-white mb-6 transition-all duration-300 ease-in-out hover:text-dark-green">
            A Blueprint for Hospitals
          </p>
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

      {/* Why Digital Marketing Services for Hospitals */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Why Digital Marketing Services for Hospitals?</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">
          In today's rapidly evolving digital landscape, hospitals and medical practices must leverage digital marketing to enhance their reach and patient engagement. By employing a comprehensive digital marketing strategy, healthcare institutions can effectively communicate their services, build trust, and improve patient outcomes.
        </p>
      </section>

      {/* General Digital Marketing Strategies for Hospitals */}
      <section className="py-16 px-6 bg-main bg-cover">
        <h2 className="text-3xl font-bold text-center mb-12">General Digital Marketing Strategies for Hospitals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">{strategy.title}</h3>
              <p>{strategy.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services for Hospitals */}
      <section className="py-16 px-6 bg-plans bg-cover">
        <h2 className="text-3xl font-bold text-center mb-12">Specific Services and Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center hover:shadow-lg transition-all duration-300 ease-in-out">
              <img src={service.image} alt={service.title} className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>


      <div className="flex justify-center py-12 ">
        <NavLink to='/price' className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out">
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
  { title: "Digital marketing for hospitals", description: "Utilizing data-driven strategies to increase online presence and patient interaction." },
  { title: "Social media marketing for healthcare", description: "Engaging patients through platforms like Facebook, Instagram, and LinkedIn." },
  { title: "Medical practice marketing", description: "Customizing campaigns to attract and retain patients for specific medical practices." },
  { title: "Hospital marketing", description: "Showcasing hospital services and specialties through targeted digital campaigns." },
  { title: "Healthcare marketing", description: "Implementing holistic marketing tactics to enhance the overall brand image." },
  { title: "Doctor marketing", description: "Promoting individual doctors and their expertise to build a personal connection with patients." }
];

const services = [
  { image: "https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg", title: "Website Design for Doctors", description: "Creating user-friendly, informative websites tailored to medical professionals." },
  { image: "https://img.freepik.com/premium-vector/search-engine-optimization_773186-1008.jpg", title: "SEO for Medical Practices", description: "Optimizing website content to rank higher on search engines, making it easier for patients to find relevant healthcare information." },
  { image: "https://img.freepik.com/premium-vector/pay-per-click-internet-advertising_773186-1437.jpg", title: "PPC Advertising for Healthcare", description: "Running pay-per-click campaigns to drive targeted traffic and attract potential patients." },
  { image: "https://img.freepik.com/free-vector/social-tree-concept-illustration_114360-4898.jpg", title: "Social Media Management for Hospitals", description: "Managing and curating content across social media platforms to maintain a consistent and professional online presence." },
  { image: "https://img.freepik.com/premium-vector/colorful-picture-woman-using-laptop-with-facebook-screen_835895-17070.jpg", title: "Facebook Marketing for Doctors", description: "Utilizing Facebook’s advertising tools to reach a broad audience and share updates, patient testimonials, and health tips." },
  { image: "https://img.freepik.com/premium-vector/follow-us-facebook-logo-3d-social-media-network-graphic_1147429-8209.jpg", title: "Instagram Marketing for Healthcare", description: "Leveraging visual content on Instagram to engage with patients through posts, stories, and live sessions." }
];

export default Hospitals;
