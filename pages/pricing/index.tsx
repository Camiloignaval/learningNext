import Link from "next/link";
import React from "react";
import { MainLayout } from "../../components/layouts/MainLayout";

export const PricingPage = () => {
  return (
    <MainLayout>
      <h2>Pricing Page</h2>
      <h1 className={"title"}>
        Ir a{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/pricing.js</code>
      </p>
    </MainLayout>
  );
};

export default PricingPage;
