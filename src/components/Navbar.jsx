"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function NavItem({ children, href }) {
  const handleScroll = (e, href) => {
    e.preventDefault(); // Prevent the default anchor behavior

    // Find the target element by its ID (assuming the href is the ID of the section)
    const targetElement = document.querySelector(href);

    if (targetElement) {
      // Scroll to the target element with an offset of 20px
      window.scrollTo({
        top: targetElement.offsetTop - 30, // Adjust the scroll position by 20px
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };

  return (
    <li className="nav-link">
      <span className="cursor-pointer" onClick={(e) => handleScroll(e, href)}>
        {children}
      </span>
    </li>
  );
}
const NAV_MENU = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Contact us",
    href: "#contact-us",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-0 transition-all ${
        isScrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-6 md:px-16">
        <Link
          href="/"
          className={`text-lg font-bold transition-colors ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <Image
            src="/PELISWAN-ENERGY.png"
            alt="Peliswan Energy Logo"
            width={100}
            height={100}
            className="mr-2"
          />
        </Link>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex transition-colors ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <button
          className={`ml-auto block lg:hidden transition-colors ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
          onClick={handleOpen}
        >
          {open ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      {open && (
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
