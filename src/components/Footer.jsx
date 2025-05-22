import { platformLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 flex justify-center">
      <div className="text-center">
        <h3 className="text-md font-semibold mb-4">
          © 2025 Swastik Company. All rights reserved.
        </h3>
        <ul className="space-y-2">
          {platformLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-neutral-300 hover:text-white">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
