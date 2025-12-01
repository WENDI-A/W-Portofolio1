import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-2">WENDIMAGEGN ABERA</h3>
          <p>
            Innovative Full-Stack Web Developer crafting high-performance, scalable solutions with cutting-edge technologies and industry-leading methodologies.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('about');
                  if (section) {
                    const headerOffset = 80;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="hover:text-purple-500"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skill"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('skill');
                  if (section) {
                    const headerOffset = 80;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="hover:text-purple-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('projects');
                  if (section) {
                    const headerOffset = 80;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="hover:text-purple-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('contact');
                  if (section) {
                    const headerOffset = 80;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="hover:text-purple-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/WENDI-A" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors duration-300">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/wendimagegn-abera" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="mailto:wendiabera660@gmail.com" className="hover:text-purple-500 transition-colors duration-300">
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-300 dark:border-gray-700"></hr>
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} WENDIMAGEGN ABERA. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;