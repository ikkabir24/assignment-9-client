import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { ImCompass2 } from "react-icons/im";
import { LiaConnectdevelop } from 'react-icons/lia';
import { FaGoogleScholar } from 'react-icons/fa6';
import { MdOutlineStarRate } from 'react-icons/md';

const HowItWorks = () => {

  useEffect(() => {
    AOS.init({
      duration: '2500',
      delay: '1500'
    })
  }, [])

  const steps = [
    {
      title: "1. Explore Local Skills",
      description: "Browse a variety of skill listings in your area — from music and language to tech and wellness.",
      icon: <ImCompass2/> ,
    },
    {
      title: "2. Connect with Providers",
      description: "View provider profiles, check ratings, and reach out to book a session that fits your schedule.",
      icon: <LiaConnectdevelop/>,
    },
    {
      title: "3. Learn or Share",
      description: "Join sessions to learn something new or offer your own skills to others in your community.",
      icon: <FaGoogleScholar/>,
    },
    {
      title: "4. Rate & Grow",
      description: "Leave feedback, earn ratings, and build your reputation as a learner or provider.",
      icon: <MdOutlineStarRate />,
    },
  ];

  return (
    <section className="py-10 px-4 md:px-8" id="how-it-works">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="text-gray-600 mb-10">
          SkillSwap makes learning and sharing skills easy, local, and rewarding.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              data-aos="zoom-in">

              <div className="text-8xl mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;