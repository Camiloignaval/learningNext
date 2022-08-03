import Link from "next/link";
import React from "react";
import { MainLayout } from "../components/layouts/MainLayout";

const contact = () => {
  return (
    <MainLayout>
      <h2>Contact Page</h2>
      <h1 className={"title"}>
        Ir a{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/contact.js</code>
      </p>
    </MainLayout>
  );
};

export default contact;
