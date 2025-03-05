import HeaderMainNav from "./HeaderMainNav";
import HeaderUserNav from "./HeaderUserNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <div>
          <HeaderMainNav />
        </div>
        <div>
          <HeaderUserNav />
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
