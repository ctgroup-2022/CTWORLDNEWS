
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook


const TermsOfService = () => {
      const { theme } = useTheme(); // Get theme context value
    
  return (
    <>

<div className={`flex justify-center items-center min-h-screen pt-28 pb-8 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`}>
      {/* Main Container */}
      <div className={`w-11/12 md:w-10/12 lg:w-4/5 p-8 shadow-lg overflow-y-auto ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>
        <h1 className={`text-4xl font-bold mb-6 text-center ${theme === 'light' ? 'text-[#195CA0]' : 'text-[#FBCC14]'}`}>
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Last Updated: August 25, 2024
        </p>

        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="leading-relaxed">
              Welcome to <strong>CEETEEWORLD</strong>! By accessing or using our
              website, you agree to comply with and be bound by the following
              terms and conditions. Please review them carefully.
            </p>
          </section>

          {/* User Agreement */}
          <section>
            <h2 className="text-xl font-semibold mb-2">User Agreement</h2>
            <p className="leading-relaxed">
              By using our website, you confirm that you are at least 13 years
              old and have the legal capacity to enter into this agreement. If
              you do not agree to these terms, please do not access or use our
              website.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-semibold mb-2">
              Intellectual Property Rights
            </h2>
            <p className="leading-relaxed">
              All content, including text, images, logos, and graphics on
              CEETEEWORLD, is our intellectual property or licensed to us.
              Unauthorized reproduction or distribution is strictly prohibited.
            </p>
          </section>

          {/* Use of Website */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Permitted Use</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                You may use our website for personal, non-commercial purposes.
              </li>
              <li>
                You agree not to engage in unauthorized activities, including
                hacking, scraping, or uploading malicious content.
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
            <p className="leading-relaxed">
              CEETEEWORLD is not responsible for any damages, losses, or
              liabilities resulting from your use of the website. The content
              provided is for informational purposes only.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to update or modify these Terms of Service at
              any time without prior notice. Please check this page periodically
              for updates.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions regarding these terms, please contact us
              at{" "}
              <a
                href="mailto:info@ctgroup.in"
                className="text-blue-600 underline"
              >
            info@ctgroup.in
              </a>
              
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default TermsOfService;
