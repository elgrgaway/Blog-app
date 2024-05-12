import Header from "../components/Header";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <section className=" max-w-[1216px] m-auto">
      <Header />
      <Outlet />
    </section>
  );
}
export default Layout;
