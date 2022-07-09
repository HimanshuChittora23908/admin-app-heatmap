import React, { useEffect } from "react";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";
import Admin from "../../layouts/Admin.js";

export default function Dashboard() {
  useEffect(() => {
    localStorage.getItem("token") === "true"
      ? console.log("You are logged in")
      : window.location.href = "/admin/login";
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
