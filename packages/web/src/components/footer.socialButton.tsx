import type React from "react";

export const SocialButton: React.FC<{
  links: { text: string; link: string }[];
}> = ({ links }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {links.map((link, index) => (
        <button
          key={index}
          className="bg-gray-100 hover:bg-gray-200 hover:text-cyan-700 hover:font-bold hover:border-cyan-700 hover:border-4 text-gray-900 rounded-xl h-12 lg:h-20 transition-colors duration-200 flex items-center justify-center"
          onClick={() => window.open(link.link, "_blank")}
          aria-label={link.text}
        >
          <span className="font-space-mono text-sm font-semibold">{link.text}</span>
        </button>
      ))}
    </div>
  );
};
