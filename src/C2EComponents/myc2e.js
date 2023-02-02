import React from "react";
import search1 from "../assets/images/search1.png";
const Myc2e = () => {
  return (
    <div class="main-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="header-menu">
              <img src="./img/icons/menu1.svg" width="24" height="24" />
            </div>
          </div>
          <div class="main-wrap">
            <div class="main-title mb-4">
              <h4>Hello,</h4>
              <h4 style="font-weight: bold !important">Jane Cooper</h4>
            </div>
            <div class="project-search">
              <input name="search" placeholder="Search your c2e..." />
              <button>
                <img src={search1} width="24" height="24" />
              </button>
            </div>
            <div class="my-c2e-heading mb-1">
              <h3>My C2E's</h3>
            </div>
            <div class="c2e-filters">
              <button class="filter-btn active-filter-btn">All</button>
              <button class="filter-btn">Due date</button>
              <button class="filter-btn">Completed</button>
            </div>

            {/* <!-- <div
              class="download-projects-list"
              id="offlineMyc2eContainer"
            ></div> --> */}

            <div class="my-c2e-cards-wrapper" id="offlineMyc2eContainer">
              <div class="add-c2e-card">
                <div class="c2e-card-content" id="add-C2E">
                  <img src="./img/icons/plus-icon.png" width="20" height="20" />
                  <p class="mt-1 add-c2e-text">
                    <a href="addC2E.html">Add C2E</a>
                  </p>
                </div>
              </div>
              {/* <!-- <div class="my-c2e-card">
              <div class="ellipses-dropdown">
                <img
                  src="./img/icons/ellipse-icon.svg"
                  width="16px"
                  height="16px"
                />
              </div>
              <div class="c2e-card-content">
                <span class="project-heading">C2E #1</span>
                <span>13 Jan 2023</span>
              </div>
            </div> --> */}
            </div>
          </div>

          <div class="col-12 remove-course-alert"></div>
        </div>
      </div>
      <div class="c23-bottom-menu">
        <div class="menu-list">
          <ul>
            <li class="active-list">
              <a href="#">
                <img src="./img/icons/home-menu-icon.svg" width="24" height="24" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./img/icons/search-menu-icon.svg" width="24" height="24" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Myc2e;
