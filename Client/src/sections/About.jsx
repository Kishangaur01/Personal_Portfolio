import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const renderContent = () => {
    switch (activeTab) {
      case "skills":
        return (
          <ul className="list-disc pl-5 space-y-1 text-white">
            <li>Java</li>
            <li>Python</li>
            <li>React</li>
            <li>UI/UX</li>
            <li>DBMS</li>
            <li>Git, Github</li>
          </ul>
        );
      case "education":
        return (
          <ul className="list-disc pl-5 space-y-1 text-white">
            <li>B.Tech in Computer Engineering - Marwadi University</li>
            <li>Class 12th - Adani Public School</li>
            <li>Class 10th - Adani Public School</li>
          </ul>
        );
      case "certifications":
        return (
          <ul className="list-disc pl-5 space-y-1 text-white">
            <li>Machine Learning - Infosys Springboard</li>
            <li>Database Programming with SQL - Oracle</li>
            <li> CCNAv7: Switching, Routing, and Wireless Essentials - Cisco</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-16 bg-transparent">
      
      {/* Left Circuit Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="\public\images\Tech_2.jpg"
          alt="Circuit"
          className="w-full max-w-[400px] sm:max-w-[650px] h-auto object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 text-white max-w-xl">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="mb-6 leading-relaxed">
          I'm Kishan Kumar Gaur and my pronouns are He/Him, 
          a passionate programmer currently honing my skills at 
          Marwadi University. Originally from Rajkot. Proficient in both 
          Java and Python, I'm constantly seeking 
          new challenges and opportunities to expand my knowledge. I'm eager to 
          connect with like-minded individuals and collaborate on innovative projects. 
          Let's build something great together!
        </p>

        {/* Tabs */}
        <div className="flex gap-6 mb-4 text-white font-semibold">
          {["skills", "education", "certifications"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 ${
                activeTab === tab ? "border-white" : "border-transparent"
              } hover:border-white transition duration-200`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-sm sm:text-base">{renderContent()}</div>
      </div>
    </section>
  );
};

export default About;

