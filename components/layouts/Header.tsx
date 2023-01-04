/**
 * Internal dependencies.
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import content from "../../content.json";
import { IRootReducer } from "../../interfaces/reducers";
import Link from "next/link";

/**
 * External dependencies.
 */
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { getCategoriesAction } from "../../store/layouts/action";
import { isSignedIn, isSignedOut } from "../../store/auth/action";
import { getUserDataAction } from "../../store/users/action";
import { useRouter } from "next/router";


export default function Header() {
  const [barVisibility, setBarVisibility] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();
  const { categories } = useSelector((state: IRootReducer) => state.layout);
  const signOut = useSelector((state: IRootReducer) => state.auth.isSignedOut);
  const signIn = useSelector((state: IRootReducer) => state.auth.isSignedIn);
  console.log('signIn', signIn)
  const handleScroll = () => {
    const position = window.pageYOffset;
    position >= 120 ? setBarVisibility(true) : setBarVisibility(false);
    setSrollPosition(position);
  };
  useEffect(() => {
    dispatch(getCategoriesAction());
    dispatch(isSignedIn());
    dispatch(getUserDataAction());
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickMenuLink = (category, toggleBackdrop, isMainCategory = false) => {
    let categoryType = "";

    if (isMainCategory && category.short_code === "groceries") {
      categoryType = "main-category";
    } else {
      categoryType = "category";
    }

    // if (toggleBackdrop) {
    //   navigationToggleHandler();
    // }

    router.push(
        `/products?${categoryType}=${encodeURIComponent(
          category.short_code
        )}&name=${encodeURIComponent(category.name)}&filter=paginate_no__40`
      )
      .then(_ => window.scrollTo(0, 0)); // added "name" query param only for collect category name from url on product page
  };

  const handleLogOut = () => {
    dispatch(isSignedOut());
    window.location.replace("/");
  }

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
              {signIn ? <Dropdown
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
                  <Dropdown.Item onClick={()=>handleLogOut()}>Sign out</Dropdown.Item>
                </Dropdown>:
                <Link href="/my-account" className="">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-black hover:text-primary cursor-pointer ml-3"
                  style={{ width: 22 }}
                />
              </Link>
                }
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
                <Link href="/categories">
                  <span className="transition uppercase text-primary hover:text-primary-light text-base">
                    LUCKY OFFER
                  </span>
                </Link>
              </Navbar.Link>

              <Navbar.Link href="/">
                <Link href="/products" className="uppercase">
                  <span className="transition uppercase text-primary hover:text-primary-light text-base">
                    PRODUCTS
                  </span>
                </Link>
              </Navbar.Link>

              <Navbar.Link href="/">
                <Link href="/categories" className="uppercase">
                  <span className="transition uppercase text-primary hover:text-primary-light text-base">
                    SHOP PACKAGES
                  </span>
                </Link>
              </Navbar.Link>
              {categories.map((category, index) =>(
                <Navbar.Link>
                <Dropdown
                  arrowIcon={true}
                  trigger="click"
                  inline={true}
                  label={
                    <span className="text-primary hover:text-primary-light">
                      {category.name}
                    </span>
                  }
                >
                  {category.childs.map((cl, index) =>(
                  <Dropdown.Item>
                    <Link href="#">
                      <span className="text-primary hover:text-primary-light"
                      onClick={() =>
                        clickMenuLink(cl, false)}>
                        {cl.name}
                      </span>
                    </Link>
                  </Dropdown.Item>
                  ))} 
                </Dropdown>
              </Navbar.Link>
              ))}    
              
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
}
