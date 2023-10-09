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
import { getCartsAction } from "../../store/cart/action";
import { searchProductAction } from "../../store/product/action";
import ProductSearchModal from "../products/ProductSearchModal";


export default function Header() {
  const [barVisibility, setBarVisibility] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();
  const { categories } = useSelector((state: IRootReducer) => state.layout);
  const { totalQuantity } = useSelector((state: IRootReducer) => state.carts);
  const signIn = useSelector((state: IRootReducer) => state.auth.isSignedIn);
  const { isSearchModalOpen } = useSelector((state: IRootReducer) => state.products);
  const { userData } = useSelector((state) => state.user);
  const handleScroll = () => {
    const position = window.pageYOffset;
    position >= 120 ? setBarVisibility(true) : setBarVisibility(false);
    setSrollPosition(position);
  };
  useEffect(() => {
    dispatch(isSignedIn());
    dispatch(getUserDataAction());
    dispatch(getCartsAction());
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategoriesAction());
    }
  }, []);

  const handleLogOut = () => {
    dispatch(isSignedOut());
    window.location.replace("/");
  }

  const openProductSearchModal = () => {
    dispatch(searchProductAction('search', true));
  }

  const clickMenuLink = (category, toggleBackdrop, isMainCategory = false) => {
    let categoryType = "";

    if (isMainCategory && category.short_code === "groceries") {
      categoryType = "main-category";
    } else {
      categoryType = "category";
    }


    router.push(
      `/products?${categoryType}=${encodeURIComponent(
        category.short_code
      )}`
    )
      .then(_ => window.scrollTo(0, 0)); // added "name" query param only for collect category name from url on product page
  };

  return (
    <header>
      {isSearchModalOpen &&
        <ProductSearchModal />
      }
      <div
        className={`navbar-main-area bg-white shadow ${barVisibility ? 'fixed-nav' : 'not-fixed-nav'
          }`}
      >
        <div className="container mx-auto">
          <Navbar fluid={false} rounded={false}>
            <Navbar.Brand href="/">
              <Link href="/">
                <img
                  src="/images/logos/logo.png"
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
                    img={userData.avatar != null ? userData.avatar : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
                    rounded={true}
                  />
                }
              >
                <Link href="/my-account"><Dropdown.Header>
                  <span className="block text-sm">{userData.first_name}{" "}{userData.last_name}</span>
                  <span className="block truncate text-sm font-medium">
                    {userData.email}
                  </span>
                </Dropdown.Header></Link>
                <Link href={"/my-account"}><span className="hover:text-red-500"><Dropdown.Item> Dashboard</Dropdown.Item></span></Link>
                <Link href={"/my-order"}><Dropdown.Item>My Orders</Dropdown.Item></Link>
                <Link href={"/account-details"}><Dropdown.Item>Account</Dropdown.Item></Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => handleLogOut()}>Sign out</Dropdown.Item>
              </Dropdown> :
                <Link href="/sign-in" className="">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-black hover:text-primary cursor-pointer ml-3"
                    style={{ width: 22 }}
                  />
                </Link>

              }
              <a onClick={openProductSearchModal} className="">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-black hover:text-primary cursor-pointer ml-3"
                  style={{ width: 22 }}
                />
              </a>
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
                    {totalQuantity}
                  </span>
                </span>
              </Link>
              <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
              <Navbar.Link href="/" active={true}>
                <Link href="/">
                  <span className="transition uppercase text-primary hover:text-primary-light text-lg font-bold">
                    HOME
                  </span>
                </Link>
              </Navbar.Link>

              <Dropdown
                arrowIcon={true}
                trigger="click"
                inline={true}
                label={
                  <span className="text-primary hover:text-primary-light text-lg font-bold ml-3">
                    SHOP
                  </span>
                }
              >
                {categories.map((category, index) => (
                  <Navbar.Link key={index}>
                    <div className="p-2">
                      <Dropdown
                        arrowIcon={true}
                        trigger="click"
                        inline={true}
                        label={
                          <span className="text-primary uppercase hover:text-primary-light text-lg">
                            {category.name} Hello
                          </span>
                        }
                      >
                        {category.childs.map((cl, index2: number) => (
                          <Dropdown.Item key={index2}>
                            <Link href="#">
                              <span className="text-primary hover:text-primary-light text-lg font-bold"
                                onClick={() =>
                                  clickMenuLink(cl, false)}>
                                {cl.name}
                              </span>
                            </Link>
                          </Dropdown.Item>
                        ))}
                      </Dropdown>
                    </div>
                  </Navbar.Link>
                ))}
              </Dropdown>

              <Navbar.Link href="/">
                <Link href="/products" className="uppercase">
                  <span className="text-primary text-lg hover:text-primary-light font-bold">
                    PRODUCTS
                  </span>
                </Link>
              </Navbar.Link>

              <Navbar.Link href="/">
                <Link href="/categories" className="uppercase">
                  <span className="transition uppercase text-primary hover:text-primary-light text-lg font-bold">
                    SHOP PACKAGES
                  </span>
                </Link>
              </Navbar.Link>
              {categories.map((category, index) => (
                <Navbar.Link>
                  <Dropdown
                    arrowIcon={true}
                    trigger="click"
                    inline={true}
                    label={
                      <span className="transition uppercase text-primary uppercase hover:text-primary-light text-lg font-bold"
                        onClick={() =>
                          clickMenuLink(category, false)}>
                        {category.name}
                      </span>
                    }
                  >
                    {category.childs.map((cl, index) => (
                      <Dropdown.Item>
                        <Link href="#">
                          <span className="text-primary hover:text-primary-light text-navbar font-bold"
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
