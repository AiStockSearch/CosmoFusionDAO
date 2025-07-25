import type React from "react";

export const SocialButton: React.FC<{
  links: { text: string; link: string }[];
}> = ({ links }) => {
  return (
    <div className="flex flex-row w-full gap-4 grid grid-cols-2 md:grid-cols-4">
      {(Array.isArray(links) ? links : []).map((x, idx) => (
        <a
          key={idx}
          href={x.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[4.2rem] font-space wrap items-center 
          justify-center rounded-xl text-white transition-colors duration-200 
          border-2 border-white
          bg-cyan-900 font-bold hover:border-cyan-900 hover:bg-white hover:font-bold hover:text-cyan-900 
          lg:h-[3.9rem]"
        >
          {x.text}
        </a>
      ))}
    </div>
  );
};
