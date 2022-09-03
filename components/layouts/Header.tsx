import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import content from "../../content.json";

export default function Header() {
  const isLoggedIn = false;

  const [barVisibility, setBarVisibility] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    position >= 120 ? setBarVisibility(true) : setBarVisibility(false);
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className={`navbar-main-area bg-white shadow ${
          barVisibility ? "fixed-nav" : "not-fixed-nav"
        }`}
      >
        <div className="container mx-auto">
          <Navbar fluid={false} rounded={false}>
            <Navbar.Brand href="/">
              <Link href="/">
                <img
                  src="/images/logos/logo.svg"
                  className="mr-3 h-12 md:h-16"
                  alt={content.name}
                />
              </Link>
            </Navbar.Brand>

            <div className="flex md:order-2 items-center justify-center">
              {isLoggedIn && (
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
                </Dropdown>
              )}

              <Link href="/my-account" className="">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-black hover:text-primary cursor-pointer ml-3"
                  style={{ width: 22 }}
                />
              </Link>
              <Link href="/" className="">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-black hover:text-primary cursor-pointer ml-3"
                  style={{ width: 22 }}
                />
              </Link>
              <Link href="/cart" className="">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-black hover:text-primary cursor-pointer ml-3"
                  style={{ width: 22 }}
                />
              </Link>

              <Link href="/cart">
                <span className="relative text-black hover:text-primary cursor-pointer ml-3 mr-3 md:mr-0">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-black hover:text-primary"
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
                <Link href="/">
                  <span className="transition uppercase text-primary hover:text-primary-light text-base">
                    HOME
                  </span>
                </Link>
              </Navbar.Link>

              <Navbar.Link href="/" active={true}>
                <Link href="/category">
                  <span className="transition uppercase text-primary hover:text-primary-light text-base">
                    LUCKY OFFER
                  </span>
                </Link>
              </Navbar.Link>

              <Navbar.Link href="/">
                <Link href="/category" className="uppercase">
                  <span className="transition uppercase text-primary hover:text-primary-light text-base">
                    SHOP PACKAGES
                  </span>
                </Link>
              </Navbar.Link>

              {/* <Navbar.Link href="/">
                <Link href="/" className="uppercase">
                <span className="transition uppercase text-primary hover:text-primary-light text-base">
                  VAPE
                </span>
                </Link>
              </Navbar.Link> */}

              <Navbar.Link>
                <Dropdown
                  arrowIcon={true}
                  trigger="click"
                  inline={true}
                  label={
                    <span className="text-primary hover:text-primary-light">
                      VAPE
                    </span>
                  }
                >
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Vape Mod Kit
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Pods System Vape
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Coil System Vape
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Disposable Vape
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Popular Vape
                      </span>
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </Navbar.Link>

              <Navbar.Link>
                <Dropdown
                  arrowIcon={true}
                  trigger="click"
                  inline={true}
                  label={
                    <span className="text-primary hover:text-primary-light">
                      E-JUICE
                    </span>
                  }
                >
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Salt Nic
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Vape Juice
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Popular E-juice
                      </span>
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </Navbar.Link>

              <Navbar.Link>
                <Dropdown
                  arrowIcon={true}
                  trigger="click"
                  inline={true}
                  label={
                    <span className="text-primary hover:text-primary-light">
                      ACCESSORIES
                    </span>
                  }
                >
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Disposable pods
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Vape Pods
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Vape Coils
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Vape Tank
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Vape Battery
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        RDA / RDTA
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Vape Tools
                      </span>
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </Navbar.Link>

              <Navbar.Link>
                <Dropdown
                  arrowIcon={true}
                  trigger="click"
                  inline={true}
                  label={
                    <span className="text-primary hover:text-primary-light">
                      SHISHA HOOKAH
                    </span>
                  }
                >
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Hookah
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Flavour
                      </span>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/category">
                      <span className="text-primary hover:text-primary-light">
                        Tools
                      </span>
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
}
