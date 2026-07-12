import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { motion } from "framer-motion";
import secanLogo from "@/assets/secan-logo.png";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { TwitterXIcon } from "@/components/icons/TwitterXIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { YoutubeIcon } from "@/components/icons/YoutubeIcon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "About SECAN",
      subMenu: [
        { name: "Our Mission", link: "/about" },
        { name: "Executive Council", link: "/coming-soon" },
        { name: "History", link: "/coming-soon" },
      ],
    },
    {
      name: "Membership",
      subMenu: [
        { name: "Categories", link: "/coming-soon" },
        { name: "Apply", link: "/membership/apply" },
      ],
    },
    {
      name: "Events",
      subMenu: [
        { name: "Upcoming Conferences", link: "/events" },
        { name: "Past Events", link: "/coming-soon" },
      ],
    },
    {
      name: "Publications",
      subMenu: [
        { name: "JECA Journal", link: "/publications/jeca" },
        { name: "Newsletter", link: "/publications/newsletter" },
        { name: "Position Statements", link: "/publications/statements" },
      ],
    },
    {
      name: "Awards & Fellowship",
      subMenu: [
        { name: "Fellowship", link: "/fellowship" },
        { name: "Award Categories", link: "/awards" },
      ],
    },
    {
      name: "Resources",
      subMenu: [
        { name: "Member Directory", link: "/coming-soon" },
        { name: "FAQ", link: "/coming-soon" },
      ],
    },
    { name: "Career Center", link: "/coming-soon" }, // no submenu
  ];

  const socialIcons = [
    { label: "Facebook", href: "https://www.facebook.com/share/1CN4JuvLoS/", icon: FacebookIcon },
    { label: "Twitter", href: "https://x.com/SECAN_NG", icon: TwitterXIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/secanig?fbclid=IwVERDUARG9N1leHRuA2FlbQIxMABzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR6Cff4vexj5b3_rdD9qmKr-mwPgZS6-mGWcV7Rs1flf539gmFtwnZQMMTCUJw_aem_3HzIRyA84es9xpLPsM9_Kg", icon: LinkedInIcon },
    { label: "YouTube", href: "#", icon: YoutubeIcon },
  ];
  return (
    <>
      {/* Top Bar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 hidden lg:flex justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 w-60">
            <img src={secanLogo} alt="SECAN Logo" />
          </Link>

          <div className="flex justify-end items-center gap-5">
            <div className="flex items-center gap-6 text-sm">
              <a
                href="/coming-soon"
                className="text-green-700 hover:text-primary transition lg:text-xs font-semibold"
              >
                Member Portal
              </a>
              <a
                href="/coming-soon"
                className="text-green-700 hover:text-primary transition lg:text-xs font-semibold"
              >
                Join SECAN
              </a>
              <a
                href="/coming-soon"
                className="text-green-700 hover:text-primary transition lg:text-xs font-semibold"
              >
                Contact Us
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                {socialIcons.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
              {/* <button className="text-green-600 hover:text-primary transition p-1">
                <Search size={18} />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-[0_1px_2px_0_rgb(0,0,0,0.05)] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex lg:justify-end justify-between items-center py-2 gap-8">
            {/* Logo */}
            <Link to="/" className="lg:hidden flex items-center gap-2 w-50">
              <img src={secanLogo} alt="SECAN Logo" />
            </Link>

            {/* Desktop Menu — dropdown pattern from El-Neema */}
            <NavigationMenu className="hidden lg:flex justify-start">
              <NavigationMenuList>
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.subMenu ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-green-700 text-sm lg:text-xs font-bold uppercase">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="p-0 border-none">
                          <ul className="grid gap-1 w-[220px] bg-[#fff] m-0 rounded-md p-2">
                            {item.subMenu.map((subItem, subIndex) => (
                              <li key={subIndex} className="">
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={subItem.link}
                                    className="block rounded-md px-3 py-2 text-sm text-green-700 hover:bg-green-100 hover:text-primary"
                                  >
                                    {subItem.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.link}
                        className="text-green-700 hover:text-primary transition text-sm lg:text-xs
                        font-bold uppercase px-3 py-2 inline-block"
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Button - Desktop */}
            <div className="hidden lg:block">
              <button
                className="bg-red-400 hover:bg-secondary/90 text-white px-4 py-2 rounded font-semibold
              text-sm
               transition transform hover:scale-105"
              >
                JOIN SECAN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-green-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu — accordion for items with submenus */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden pb-4 border-t border-green-200"
            >
              {menuItems.map((item, index) =>
                item.subMenu ? (
                  <Accordion key={index} type="single" collapsible>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="text-sm font-medium text-green-700 py-2">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col pl-3">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.link}
                                className="block py-2 text-sm text-green-600 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    key={index}
                    to={item.link}
                    className="block py-2 text-green-700 hover:text-primary transition text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <div className="flex items-center gap-4 my-3">
                <div className="flex gap-3">
                  {socialIcons.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className="text-gray-600 hover:text-primary transition"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
                {/* <button className="text-green-600 hover:text-primary transition p-1">
                  <Search size={18} />
                </button> */}
              </div>

              <div className="my-3 w-full">
                <button
                  className="bg-red-400 hover:bg-secondary/90 text-white px-4 py-2 rounded font-semibold
              text-sm
               transition transform hover:scale-105 w-full"
                >
                  JOIN SECAN
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}
