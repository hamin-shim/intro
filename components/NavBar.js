import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <div className={router.pathname === "/" ? "active" : null}>Home</div>
      </Link>
      <Link href={"/about"}>
        <div className={router.pathname === "/about" ? "active" : null}>
          about
        </div>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        div {
          cursor: pointer;
          margin: 5px 20px;
        }
        .active {
          color: white;
        }
      `}</style>
    </nav>
  );
}
