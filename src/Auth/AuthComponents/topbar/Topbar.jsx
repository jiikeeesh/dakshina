import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
    <div className="container ">
      <div className="topbarWrapper">
      {/* <img src="../images/main-director.jpg" alt="" className="topAvatar" /> */}
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
       </div>
    </div>
    </div>
  );
}
