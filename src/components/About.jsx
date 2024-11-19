import React from "react";
import { FaTree, FaChild, FaChartLine, FaUsers, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white pt-24 text-black px-6 py-12 space-y-10">
      {/* Heading */}
      <motion.h1
        className="text-5xl bg-main bg-cover  rounded-md py-10 font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Anantya Digital Marketing Services (ADMS)
      </motion.h1>

      {/* Why Choose ADMS Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center underline decoration-yellow-400 mb-4">
          Why Choose ADMS for Your Medical Practice's Social Media?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="p-6 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaChartLine className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold">Data-Driven Strategies & Measurable Results</h3>
            <p className="text-gray-500 mt-2">
              We track content performance and provide regular reports, allowing us to optimize
              your campaigns effectively.
            </p>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FaUsers className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold">Focus on Patient Engagement</h3>
            <p className="text-gray-500 mt-2">
              Our strategies focus on engaging your target audience and building a loyal patient base.
            </p>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <FaHandsHelping className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold">Content Focused on Credibility & Trust</h3>
            <p className="text-gray-500 mt-2">
              We create informative content that establishes your practice as a trusted medical source.
            </p>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <FaChild className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold">Flexible & Customizable Packages</h3>
            <p className="text-gray-500 mt-2">
              We offer customizable social media packages to suit the unique needs of your practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="text-center space-y-12">
        <motion.h2
          className="text-2xl font-bold text-orange-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          15% Back to Children & Trees!
        </motion.h2>
        
        {/* Empowering Children Section */}
        <motion.div
          className="bg-yellow-500 text-gray-900 p-8 rounded-lg space-y-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaChild className="text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Empowering Children</h3>
          <p className="text-lg">
            15% of every deal we close is dedicated to supporting causes that empower and uplift children.
            This includes funding educational programs, supporting children's charities, and other initiatives
            that directly benefit the well-being of future generations.
          </p>
        </motion.div>
        
        {/* Environmental Responsibility Section */}
        <motion.div
          className="bg-green-500 text-gray-900 p-8 rounded-lg space-y-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FaTree className="text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Environmental Responsibility</h3>
          <p className="text-lg">
            In our commitment to sustainability, we dedicate 15% of each partnership to planting trees,
            contributing to a healthier environment and a brighter future.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
