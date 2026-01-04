import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

const isMenuOpen = useSelector(store => store.app.isMenuOpen);

if(!isMenuOpen) return;

  return (
    <div className="w-52 shadow-lg p-8">

      <ul>
        <Link to={"/"}><li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-6">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Video</li>
        <li>Live</li>
        <li>Music</li>
      </ul>

      <h1 className="font-bold pt-6">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
