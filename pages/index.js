import { useEffect } from "react";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/auth/login");
    }
  }), [];

  return (
    <div>
      Index
    </div>
  )
}
