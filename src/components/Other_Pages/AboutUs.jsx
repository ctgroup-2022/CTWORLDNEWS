import Navbar from "../Navbar/Navbar";

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className=" flex justify-center items-center min-h-screen mt-8 mb-8">
      {/* Main Container */}
      <div className="bg-white w-11/12 md:w-10/12 lg:w-4/5 p-8 shadow-lg overflow-y-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          About CEETEEWORLD
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Your premier source for college news and updates across all CT
          institutions.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Who We Are */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="leading-relaxed text-gray-700">
              <strong>CEETEEWORLD</strong> is the one-stop platform for
              delivering timely and accurate news about CT institutions. From
              college events and achievements to essential announcements, we
              ensure that you stay updated with everything happening on campus.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h2>
            <p className="leading-relaxed text-gray-700">
              At CEETEEWORLD, our mission is to create a connected and informed
              community. We aim to provide a unified platform that bridges the
              communication gap between students, faculty, and institutions. By
              keeping our audience updated with real-time information, we help
              strengthen engagement and collaboration.
            </p>
          </section>

          {/* Our Values */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Core Values
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Accuracy:</strong> Ensuring all news and updates are
                reliable and verified.
              </li>
              <li>
                <strong>Transparency:</strong> Delivering clear and honest
                information.
              </li>
              <li>
                <strong>Community:</strong> Building a stronger connection
                between students and institutions.
              </li>
              <li>
                <strong>Timeliness:</strong> Keeping you updated in real-time
                with relevant announcements.
              </li>
            </ul>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Contact Us
            </h2>
            <p className="leading-relaxed text-gray-700">
              We would love to hear from you! For inquiries, feedback, or
              suggestions, reach out to us at:
              <br />
              <a
                href="mailto:contact@ceeteeworld.com"
                className="text-blue-600 underline"
              >
                contact@ceeteeworld.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
