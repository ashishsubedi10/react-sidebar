import React from "react";
import items from "../data/sidebar.json"
import SidebarItem from "./SidebarItem";
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Vendor Management</h2>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};
export default Sidebar;
