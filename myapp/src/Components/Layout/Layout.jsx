import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import {  Offline } from "react-detect-offline";
export default function Layout() {
  return (
    <>
      <Navbar />

      <Outlet></Outlet>
      <div>
        <Offline>
          <div className="network">
            <i className="fas fa-wifi"></i> You Are Offline
          </div>
        </Offline>
      </div>
    </>
  );
}
