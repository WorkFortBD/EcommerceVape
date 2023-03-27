import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import CategoryWiseMiniProduct from "./CategoryWiseMiniProduct";
import { useDispatch, useSelector } from "react-redux";
import { setFilterParams } from "./_redux/action/CategoryAction";
import classNames from "classnames";
import { useRouter } from "next/router";
import LoadingPlaceHolder from "../master/skeleton/LoadingPlaceHolder";
import { parseFilterString } from "../../helper/parse-filter-query";
import ShimmerEffect from "../master/skeleton/ShimmerEffect";
import Sidebar from "./Sidebar";

const CategoryWiseProductList = ({
  showFilter,
  showFilterHandler,
  filterParams,
}) => {
  const router = useRouter();
  const { isLoading, paginate } = useSelector((state) => state.category);
  const { isMobile } = useSelector((state) => state.global);
  const [sidebar, setSidebar] = useState(false);
  const selectHandler = (e) => {
    switch (e.target.value) {
      case "best_match":
        router.replace({
          query: parseFilterString(router.query, { order_by: "", order: "" }),
        });
        break;

      case "price_low_high":
        router.replace({
          query: parseFilterString(router.query, {
            order_by: "price",
            order: "asc",
          }),
        });
        break;

      case "price_high_low":
        router.replace({
          query: parseFilterString(router.query, {
            order_by: "price",
            order: "desc",
          }),
        });
        break;

      case "offer":
        router.replace({
          query: parseFilterString(router.query, {
            order_by: "offer",
            order: "desc",
          }),
        });
        break;

      case "rating_high":
        router.replace({
          query: parseFilterString(router.query, {
            order_by: "rating",
            order: "desc",
          }),
        });
        break;

      case "stock_high":
        router.replace({
          query: parseFilterString(router.query, {
            order_by: "stock",
            order: "desc",
          }),
        });
        break;
    }
  };
  const perPageHandler = (e) => {
    switch (e.target.value) {
      case "40":
        router.replace({
          query: parseFilterString(router.query, {
            paginate_no: "40",
            page: "1",
          }),
        });
        break;

      case "60":
        router.replace({
          query: parseFilterString(router.query, {
            paginate_no: "60",
            page: "1",
          }),
        });
        break;

      case "100":
        router.replace({
          query: parseFilterString(router.query, {
            paginate_no: "100",
            page: "1",
          }),
        });
        break;
    }
  };

  const rowClasses = classNames({
    "flex flex-col md:flex-row flex-wrap p-px place-content-center": true,
    "no-gutters": isMobile,
  });

  const filterClasses = classNames({
    column_active: showFilter,
  });

  let title = "";

  if (filterParams?.type || filterParams?.search || filterParams?.name) {
    title = filterParams.type || filterParams.search || filterParams.name;
  }
  const sidebarModal = () => {
    setSidebar(true);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-content-between">
        <div>
          <Sidebar filterParams={filterParams} />
        </div>
        <section className="container mx-auto category_wise_product_list ">
          <div className="flex flex-col md:flex-row justify-content-between my-2 my-md-4">
            <div className="grid grid-cols-5 md:basis-1/2 ml-12 ">
              <div className="category_wise_product_list_heading">
                <h5 className="category-search-title ml-10 font-bold text-lg">
                  {!isLoading && title && title.replace(/-/g, " ")}
                  {!isLoading && !title && "All products"}
                </h5>
              </div>
              <p className="font-light flex justify-center items-center md:ml-10">
                {!isLoading &&
                  title &&
                  (paginate.total !== null ? paginate.total : "0") +
                  ` products found in ${title.replace(/-/g, " ")}`}
                {!isLoading &&
                  !title &&
                  (paginate.total !== null ? paginate.total : "0") +
                  " products found"}
              </p>
            </div>
            <div className="md:basis-1/2 col-lg-6 col-sm-12 px-1 px-md-3">
              <div className="grid grid-cols-3 p-0 d-flex justify-content-start justify-content-sm-end">
                <div
                  className="filter_view mr-2 d-flex align-items-center"
                  onClick={() => showFilterHandler()}
                >
                  <div className="product-filter">
                    <button
                      onClick={sidebarModal}
                      className="transition ml-20 mt-5 h-12 text-sm hover:text-primary-light font-bold border border-solid py-2 px-4 rounded"
                    // style={{ marginRight: "5px" }}
                    >
                      Filter
                    </button>
                    <span>
                      <i className="fas fa-sliders-h"></i>
                    </span>
                  </div>
                </div>
                <div className="filter_view d-flex mr-2 align-items-center">
                  {!isMobile && <span>Sort by</span>}
                  {filterParams && (
                    <Form>
                      <Form.Group controlId="exampleFormSelectCustom">
                        <Form.Control
                          className="block w-full h-12 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                          defaultValue={checkOptionValue(
                            filterParams,
                            "sort by"
                          )}
                          onChange={selectHandler}
                          as="select"
                          custom
                        >
                          <option value="best_match" className="pb-4">
                            Best Match
                          </option>
                          <option value="price_low_high" className="pb-4">
                            Price Low to High
                          </option>
                          <option value="price_high_low" className="pb-4">
                            Price High to Low
                          </option>
                          <option value="offer" className="pb-4">
                            Offer
                          </option>
                          <option value="rating_high" className="pb-4">
                            Rating
                          </option>
                          <option value="stock_high" className="pb-4">
                            Stock
                          </option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  )}
                </div>
                <div className="filter_view d-flex align-items-center">
                  {!isMobile && <span>Per page</span>}
                  {filterParams && (
                    <Form>
                      <Form.Group controlId="exampleFormSelectCustom">
                        <Form.Control
                          className="block w-20 h-12 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                          defaultValue={checkOptionValue(
                            filterParams,
                            "per page"
                          )}
                          onChange={perPageHandler}
                          as="select"
                          custom
                        >
                          <option value="40">40</option>
                          <option value="60">60</option>
                          <option value="100">100</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex flex-col">
              {isLoading && (
                <ShimmerEffect />
              )}
            </div>
            <div className={rowClasses}>
              {!isLoading && <CategoryWiseMiniProduct columns="col-md-3" />}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

function checkOptionValue(filterParams, type) {
  if (type === "sort by") {
    if (
      filterParams["order_by"] === "price" &&
      filterParams["order"] === "desc"
    ) {
      return "price_high_low";
    }

    if (
      filterParams["order_by"] === "price" &&
      filterParams["order"] === "asc"
    ) {
      return "price_low_high";
    }

    if (filterParams["order_by"] === "rating") {
      return "rating_high";
    }

    if (filterParams["order_by"] === "stock") {
      return "stock_high";
    }

    return null;
  }

  if (type === "per page") {
    if (filterParams["paginate_no"] === "40") {
      return "40";
    }

    if (filterParams["paginate_no"] === "60") {
      return "60";
    }

    if (filterParams["paginate_no"] === "100") {
      return "100";
    }

    return null;
  }
}

export default CategoryWiseProductList;
