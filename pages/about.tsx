import { MainLayout } from "../components/layouts/MainLayout";
import Link from "../node_modules/next/link";

export default function AboutPage() {
  return (
    <MainLayout>
      <h2>About Page</h2>
      <h1 className={"title"}>
        Ir a{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.js</code>
      </p>
    </MainLayout>
  );
}
