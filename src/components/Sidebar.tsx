import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

interface SidebarProps {
  links: { href: string; text: string }[];
}

const Sidebar = ({ links }: SidebarProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <>
      <TiThMenu
        size={25}
        onClick={() => setOpenSidebar(!openSidebar)}
        className=""
      />
      {openSidebar && (
        <div className="absolute right-4 mt-2 w-60 leading-8 bg-white rounded-md shadow-lg py-2 z-20 transition-all ease-in-out duration-500">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
