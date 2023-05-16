import Link from "next/link";
import Image from "next/image";

const icons = [
  {
    name: "LinkedIn",
    icon: "svg/linkedin-icon.svg",
    link: "https://www.linkedin.com/company/water-monster-io/",
  },
  {
    name: "Instagram",
    icon: "svg/instagram-icon.svg",
    link: "https://www.instagram.com/watermonster.io/",
  },
  {
    name: "Facebook",
    icon: "svg/facebook-icon.svg",
    link: "https://www.facebook.com/watermonster.io",
  },
];

export default function Footer() {
  return (
    <div className="bg-darkgray bg-icons-gray flex flex-col md:flex-row gap-4 justify-between items-center px-5 sm:px-36 pb-5 sm:py-5 w-full mx-auto">
      <div className="flex items-center justify-between space-x-6 text-white font-semibold text-xs w-72 order-3 md:order-1">
        <p>2023 © Water Monster</p>
        <p>
          <Link href="#">Terms of Service</Link>
        </p>
      </div>
      <div className="flex justify-center items-center sm:mt-0 mt-5 order-1 md:order-2">
        <div className="flex space-x-10">
          {icons.map((icon) => (
            <a
              href={icon.link}
              key={icon.name}
              className="w-12 h-12 bg-darkgray border-2  rounded-full flex items-center justify-center hover:filter hover:invert"
            >
              <Image
                src={icon.icon}
                alt={icon.name}
                height={48}
                width={48}
                className="w-4 h-4"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end space-x-3 md:w-72 order-2 md:order-3">
        <label htmlFor="language-select" className="sr-only">
          Language
        </label>
        <select
          id="language-select"
          className="px-4 py-2 rounded-full bg-white text-sm font-medium text-black border-2 border-white
          focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent hover:cursor-pointer"
        >
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
}
