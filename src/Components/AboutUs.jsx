import Footer from "./Footer";
import Navbar from "./Navbar";
import arif from "../assets/arif.jpg";
import rasedul from "../assets/rasedul.jpg";
import ratul from "../assets/ratul.jpeg";
import iqbal from "../assets/iqbal.jpg";
import shishir from "../assets/shishir.jpg";

const AboutUs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="text-gray-600 mt-4">
          Learn more about our team, goals, purpose, and mission.
        </p>
      </div>

      {/* Our Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-500 mb-6 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={ratul}
              alt="Team Member"
              className="w-44 h-44 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-700">Mehedi Hasan Ratul</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={shishir}
              alt="Team Member"
              className="w-44 h-44  mx-auto rounded-full mb-4 object-cover "
            />
            <h3 className="text-lg font-bold text-gray-700">Shishir Mondal</h3>
            <p className="text-gray-500">CTO</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={arif}
              alt="Team Member"
              className="w-44 h-44 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-bold text-gray-700">Md. Arif Hossain</h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={iqbal}
              alt="Team Member"
              className="w-44 h-44 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-700">Md. Iqbal Hasan</h3>
            <p className="text-gray-500">Product Manager</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={rasedul}
              alt="Team Member"
              className="w-44 h-44 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-700">Md. Rasedul Islam</h3>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
        </div>
      </section>

         {/* Our Goal */}
         <div className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Goal</h2>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to create a society where equality, justice, and meritocracy prevail. 
            We aim to end discriminatory practices and ensure equal opportunities for everyone 
            to succeed, regardless of their background. By fostering fairness and equity, 
            we seek to build a future that empowers individuals to thrive.
          </p>
        </div>

        {/* Our Purpose */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-green-500 mb-4">Our Purpose</h2>
          <p className="text-gray-700 leading-relaxed">
            Our purpose is to seek justice for the oppressed and honor the sacrifices of those 
            who have fought for equality. We strive to inspire a new era of accountability, fairness, 
            and hope for future generations. By shedding light on past injustices, we aim to create 
            lasting change and uphold the dignity of every individual.
          </p>
        </div>

        {/* Our Mission */}
        <div>
          <h2 className="text-3xl font-semibold text-red-500 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our mission is to champion the cause of equality and justice through systemic reform 
            and community empowerment. We are committed to:
          </p>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            <li>Empowering people by advocating for systemic reforms.</li>
            <li>Demanding justice for the lives lost and injustices endured.</li>
            <li>Fostering unity and building a fair, inclusive society.</li>
            <li>Raising awareness by amplifying the voices of those affected.</li>
            <li>Preserving the legacy of martyrs for lasting societal change.</li>
          </ul>
        </div>
      
      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default AboutUs;
