import React from "react";
import Link from "next/link";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function NavbarMain() {
  const isLoggedIn = false;

  return (
    <Navbar fluid={false} rounded={false}>
      <Navbar.Brand href="/">
        <Link href="/">
          <img
            src="/images/logos/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="SaudiShop"
          />
        </Link>
      </Navbar.Brand>

      <div className="flex md:order-2 items-center justify-center">
        {isLoggedIn &&
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>}

        <a href="" className="mx-3 sm:mx-4 md:mx-6">
          <FontAwesomeIcon
            icon={faUser}
            className="text-gray-500"
            style={{ width: 22 }}
          />
        </a>
        <a href="" className="mx-3 sm:mx-4 md:mx-6">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-500"
            style={{ width: 22 }}
          />
        </a>
        <Link href="/wishlist" className="">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-gray-500 mx-3 sm:mx-4 md:mx-6 cursor-pointer"
            style={{ width: 22 }}
          />
        </Link>

        <Link href="/cart">
          <span className="mx-3 sm:mx-4 md:mx-6 mr-10 relative cursor-pointer">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-gray-500"
              style={{ width: 22 }}
            />
            <span className="bg-primary text-white pl-1.5 text-sm rounded-full h-5 w-5 absolute -top-3 -right-2">
              0
            </span>
          </span>
        </Link>

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          <Link href="/" className="uppercase">
            HOME
          </Link>
        </Navbar.Link>

        <Navbar.Link>
          <Dropdown
            arrowIcon={true}
            trigger="hover"
            inline={true}
            label={"SHOP"}
          >
            <Dropdown.Item>Category 1</Dropdown.Item>
            <Dropdown.Item>Category 2</Dropdown.Item>
            <Navbar.Toggle />
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link href="/">
          <Link href="/" className="uppercase">
            PACKAGES
          </Link>
        </Navbar.Link>
        <Navbar.Link href="/">
          <Link href="/" className="uppercase">
            JUST IN
          </Link>
        </Navbar.Link>
        <Navbar.Link href="/">
          <Link href="/" className="uppercase">
            SALE
          </Link>
        </Navbar.Link>

        <Navbar.Link href="/">
          <Link href="/" className="uppercase">
            SALE
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
