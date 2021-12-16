import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => (
  <div id="default-layout">
    <main>{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
