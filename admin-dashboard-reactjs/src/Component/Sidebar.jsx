import React from "react";
import ProfilePic from "./../assets/man_avatar3.jpg";

function Sidebar() {
  return (
    <>
      <aside className="sidebar p-s w-50" id="sidebarColl">
        <span className="sidebar-toggle hide-sidebar d-flex d-lg-none align-items-center fs-4">
          <i className="bi bi-list" data-bs-toggle="collapse" href="#sidebarColl" aria-expanded="true"></i>
        </span>

        <h1 className="align-middle text-uppercase fw-bold fs-4">SHOPIFY</h1>

        <div className="mt-4 p-3 shadow-sm rounded d-flex align-items-center justify-content-start w-100 gap-2 bg-white">
          <img
            src={ProfilePic}
            alt="profile-pic"
            className="avtar rounded-circle me-1 mt-2 mb-n2"
          />
          <div className="w-75 d-flex-column gap-0 hide-element">
            <h3 className="userName mb-1">Aakash Baisla</h3>
            <p className="fs-6 lead mb-0">Sales Manager</p>
          </div>
        </div>

        <ul className="pt-5 w-100">
          <li className="sidebar-header mb-4">eCommerce</li>

          <li className="sidebar-link active">
            <i className="bi bi-bar-chart"></i>
            <span>Dashboard</span>
          </li>

          <li
            className="sidebar-link"
            data-bs-toggle="collapse"
            href="#dashboardMenu"
            aria-expanded="false"
          >
            <i className="bi bi-list-columns"></i>
            <span>Order</span>
            <i className="bi bi-arrow-right ms-auto"></i>
          </li>
          <li className="sidebar-item collapse-list">
            <ul className="sidebar-dropdown list-unstyled collapse" id="dashboardMenu">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">List</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Details</a>
              </li>
            </ul>
          </li>

          <li
            className="sidebar-link"
            data-bs-toggle="collapse"
            href="#products"
            aria-expanded="false"
          >
            <i className="bi bi-truck"></i>
            <span>Products</span>
            <i className="bi bi-arrow-right ms-auto"></i>
          </li>
          <li className="sidebar-item collapse-list">
            <ul className="sidebar-dropdown list-unstyled collapse" id="products">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Products</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Shopping Cart</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Checkout</a>
              </li>
            </ul>
          </li>

          <li
            className="sidebar-link"
            data-bs-toggle="collapse"
            href="#BuyerMenu"
            aria-expanded="false"
          >
            <i className="bi bi-wallet2"></i>
            <span>Buyer</span>
            <i className="bi bi-arrow-right ms-auto"></i>
          </li>
          <li className="sidebar-item collapse-list">
            <ul className="sidebar-dropdown list-unstyled collapse" id="BuyerMenu">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Dashboard</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Orders</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Address</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Wishlist</a>
              </li>
            </ul>
          </li>

          <li className="sidebar-link">
            <i className="bi bi-people"></i>
            <span>Customers</span>
          </li>

          <li
            className="sidebar-link"
            data-bs-toggle="collapse"
            href="#Invoices"
            aria-expanded="false"
          >
            <span>Invoice</span>
            <i className="bi bi-arrow-right ms-auto"></i>
          </li>
          <li className="sidebar-item collapse-list">
            <ul className="sidebar-dropdown list-unstyled collapse" id="Invoices">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">List</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Details</a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="pt-3 w-100">
          <li className="sidebar-header mb-4">Apps</li>

          <li className="sidebar-link">
            <i className="bi bi-chat"></i>
            <span>Chat</span>
          </li>

          <li
            className="sidebar-link"
            data-bs-toggle="collapse"
            href="#email"
            aria-expanded="false"
          >
            <i className="bi bi-envelope"></i>
            <span>Email</span>
            <i className="bi bi-arrow-right ms-auto"></i>
          </li>
          <li className="sidebar-item collapse-list">
            <ul className="sidebar-dropdown list-unstyled collapse" id="email">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">List</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Details</a>
              </li>
            </ul>
          </li>

          <li
            className="sidebar-link"
            data-bs-toggle="collapse"
            href="#Todoapp"
            aria-expanded="false"
          >
            <i className="bi bi-check-circle"></i>
            <span>To Do App</span>
            <i className="bi bi-arrow-right ms-auto"></i>
          </li>
          <li className="sidebar-item collapse-list">
            <ul className="sidebar-dropdown list-unstyled collapse" id="Todoapp">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Product Details</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Shopping Cart</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link p-2 m-0">Checkout</a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
