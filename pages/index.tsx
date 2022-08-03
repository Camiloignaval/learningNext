import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import Link from "../node_modules/next/link";

export default function HomePage() {
  return (
    <>
      <h2>Home Page</h2>
      <h1 className={"title"}>
        Ir a{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </>
  );
}

HomePage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
