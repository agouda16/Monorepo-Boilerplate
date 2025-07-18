export const Footer = () => (
  <footer className="bg-black text-white py-10">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div>&copy; 2025 Amruth Gouda. All rights reserved.</div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-gray-300">
          Instagram
        </a>
        <a
          href="https://github.com/agouda16"
          target="_blank"
          className="hover:text-gray-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/amruth-gouda/"
          target="_blank"
          className="hover:text-gray-300"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);
