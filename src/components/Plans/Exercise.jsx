import React from 'react';
import { NavLink } from 'react-router-dom';



const Exercise = () => {
  return (
    <div className="bg-gray-100 pt-20  text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-exercise h-screen">
        <div className="absolute inset-0  flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Elevating Clinics with Digital Marketing</h1>
          <p className="text-lg text-white mb-6">A Comprehensive Guide</p>
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

      {/* Why Digital Marketing Services for Clinics */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Why Digital Marketing Services for Clinics?</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">
          In the competitive healthcare landscape, clinics need to harness the power of digital marketing to stand out and attract patients. By implementing targeted digital strategies, clinics can improve patient acquisition, build brand awareness, and enhance community engagement.
        </p>
      </section>

      {/* General Digital Marketing Strategies for Clinics */}
      <section className="py-16 px-6 bg-main bg-cover">
        <h2 className="text-3xl font-bold text-center mb-12">General Digital Marketing Strategies for Clinics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{strategy.title}</h3>
              <p>{strategy.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services for Clinics */}
      <section className="py-16 px-6 bg-plans bg-cover ">
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
  { title: "Digital marketing for clinics", description: "Utilizing tailored strategies to enhance the clinic's online presence and attract new patients." },
  { title: "Social media marketing for healthcare providers", description: "Engaging with patients through platforms like Facebook, Instagram, and LinkedIn." },
  { title: "Medical clinic marketing", description: "Creating specialized campaigns to promote clinic services and attract a specific patient demographic." },
  { title: "Clinic marketing", description: "Highlighting clinic specialties and success stories through comprehensive digital campaigns." },
  { title: "Healthcare marketing", description: "Developing holistic marketing strategies to enhance the clinic's brand and patient reach." },
  { title: "Doctor marketing", description: "Promoting individual doctors and their expertise to build trust and personal connections with patients." }
];

const services = [
  { image: "https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "Website Design for Doctors", description: "Designing informative, user-friendly websites that provide a seamless experience for patients." },
  { image: "https://img.freepik.com/premium-vector/search-engine-optimization_773186-1008.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "SEO for Medical Clinics", description: "Optimizing clinic websites to rank higher on search engines, making it easier for patients to find relevant healthcare information." },
  { image: "https://img.freepik.com/premium-vector/pay-per-click-internet-advertising_773186-1437.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "PPC Advertising for Healthcare", description: "Running targeted pay-per-click campaigns to drive immediate traffic and attract potential patients." },
  { image: "https://img.freepik.com/free-vector/social-tree-concept-illustration_114360-4898.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "Social Media Management for Clinics", description: "Managing and curating content across social media platforms to maintain a professional and engaging online presence." },
  { image: "https://img.freepik.com/premium-vector/colorful-picture-woman-using-laptop-with-facebook-screen_835895-17070.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "Facebook Marketing for Doctors", description: "Utilizing Facebook’s advertising tools to reach a wide audience and share clinic updates, patient testimonials, and health tips." },
  { image: "https://img.freepik.com/premium-vector/follow-us-facebook-logo-3d-social-media-network-graphic_1147429-8209.jpg?ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", title: "Instagram Marketing for Healthcare", description: "Leveraging visual content on Instagram to engage with patients through posts, stories, and live sessions." }
];

export default Exercise;
