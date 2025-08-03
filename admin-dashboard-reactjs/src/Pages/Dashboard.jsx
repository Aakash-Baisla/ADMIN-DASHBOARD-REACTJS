import React, { useEffect, useState } from "react";
import avtarImg from './../assets/man_avatar3.jpg';
import DATA from './../Data.json';
import { Bar, Pie } from "react-chartjs-2";

import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Dashboard() {
  const [chartData, setchartData] = useState({
    labels: [],
    datasets: [],
  });

  const [SaleData, setSaleData] = useState({
    labels: [],
    datasets: [],
  });

  const [TOTALPURCHASE, setTOTALPURCHASE] = useState(0);
  const [TotalSale, setSale] = useState(0);

  useEffect(() => {
    const years = [];
    const Purchases = [];

    DATA.TotalPurchase.forEach((purchase) => {
      const year = Object.keys(purchase).find((l) => l !== "TotalPurchaseId");
      years.push(year);
      Purchases.push(purchase[year]);
    });

    setTOTALPURCHASE(Purchases.reduce((acc, current) => acc + current, 0));

    setchartData({
      labels: years,
      datasets: [
        {
          label: 'Total Purchase',
          data: Purchases,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,90,132,1)',
          borderWidth: 1,
        },
      ],
    });
  }, []);

  useEffect(() => {
    const years = [];
    const Sales = [];

    DATA.TotalSale.forEach((sale) => {
      const year = Object.keys(sale).find((l) => l !== "TotalSaleId");
      years.push(year);
      Sales.push(sale[year]);
    });

    setSale(Sales.reduce((acc, current) => acc + current, 0));

    setSaleData({
      labels: years,
      datasets: [
        {
          label: 'Total Sale',
          data: Sales,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    });
  }, []);

  const [pieChartData, setPieChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const areaCounts = {};
    DATA.customers.forEach(customer => {
      areaCounts[customer.area] = (areaCounts[customer.area] || 0) + 1;
    });

    const areas = Object.keys(areaCounts);
    const counts = Object.values(areaCounts);

    setPieChartData({
      labels: areas,
      datasets: [
        {
          label: 'Customer Area',
          data: counts,
          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <div className="content d-flex flex-column w-100">
      <nav className="navbar-main d flex justify-content-between align-items-center p-3 navbar navbar-expand">
        <span className="sidebar-toggle d-flex align-items-center fs-4">
          <i className="bi bi-list" data-bs-toggle="collapse" href="#sidebarColl" aria-expanded="true"></i>
        </span>

        <form inline="true" className="ps-w w-75">
          <div className="input-group-navbar input-group">
            <input type="text" placeholder="Search" aria-label="Search" className="form-control rounded shadow-sm" />
            <button className="btn ms-2 p-2 bg-white rounded shadow-sm" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>

        <span className="nav-icon cursor-pointer" aria-expanded="true" data-bs-toggle="dropdown">
          <a className="nav-link dropdown-toggle d-flex align-items-center" aria-expanded="false">
            <img src={avtarImg} alt="User Avatar" className="avtar img-fluid rounded-circle me-1 mt-2 mb-2" />
            <span className="ms-1 hide-elem">Aakash Baisla</span>
          </a>
        </span>

        <div className="dropdown dropdown-menu dropdown-menu3 dropdown-menu-end" drop="end" data-bs-popper="static">
          <a className="dropdown-item" type="button">Profile</a>
          <a className="dropdown-item" type="button">Analytics</a>
          <a className="dropdown-item" type="button">Logout</a>
        </div>
      </nav>

      <div className="row analytic-wrap w-100 mb-4 p3">
        <div className="col-lg-3 col-md-6 analytic-box">
          <div className="card">
            <div className="card-body d-flex flex-column align-items-center">
              <h3 className="card-title mt-3">${TotalSale} CR</h3>
              <p className="card-text">Total Sale</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 analytic-box">
          <div className="card">
            <div className="card-body d-flex flex-column align-items-center">
              <h3 className="card-title mt-3">${TOTALPURCHASE} CR</h3>
              <p className="card-text">Total Purchase</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 analytic-box">
          <div className="card">
            <div className="card-body d-flex flex-column align-items-center">
              <h3 className="card-title mt-3">{DATA.sales.length}</h3>
              <p className="card-text">Sales</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 analytic-box">
          <div className="card">
            <div className="card-body d-flex flex-column align-items-center">
              <h3 className="card-title mt-3">{DATA.purchases.length}</h3>
              <p className="card-text">Purchase</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row analytic-wrap w-100 p3">
        <div className="col-lg-6">
          <div className="shadow-sm rounded bg-white p-4">
            <h4>Sales <i className="bi bi-question-circle text-danger"></i></h4>
            <h1 className="TotalSale pt-3 fs-1">
              <i className="bi bi-bag-check me-3"></i>
              ${TotalSale} CR</h1>
            <div className="Charts">
              <Bar data={SaleData} className="Chart p-3 w-100 h-100" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="shadow-sm rounded bg-white p-4">
            <h4>Purchase <i className="bi bi-question-circle text-danger"></i></h4>
            <h1 className="TotalPURCHASE pt-3 fs-1">
              <i className="bi bi-bag-check me-3"></i>
              ${TOTALPURCHASE} CR
            </h1>
            <div className="Charts">
              <Bar data={chartData} className="Chart p-3 w-100 h-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="row analytic-wrap customer-info-wrap mt-5 p-3 w-100">
        <div className="col-md-6 customer-info-box">
          <div className="bg-white p-5 rounded shadow-sm">
            <div className="card-body">
              <h4>Top Customers <i className="bi bi-question-circle danger text text-danger"></i></h4>

              <div className="row mt-5">
                <div className="p-4 card bg-white rounded shadow-sm">
                  <div className="d-flex justify-content-between fw-bold border-bottom">
                    <div>ID</div>
                    <div>Name</div>
                    <div>Email</div>
                  </div>
                  {
                    DATA.customers.map((customer, index) => {
                      return (
                        <div key={index} className="d-flex align-items-center justify-content-between">
                          <div className="hide-elementflex-grow pb-4">{customer.customerId}</div>
                          <div className="danger text text-danger">{customer.name}</div>
                          <div className="">{customer.email}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 customer-info-secbox">
          <div className="Charts pie-chart bg-white p-5 rounded shadow-sm">
            <h4>
              Popular Location <i className="bi bi-question-circle danger text text-danger"></i>
            </h4>
            <Pie data={pieChartData} className="Chart p-3 w-100 h-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
