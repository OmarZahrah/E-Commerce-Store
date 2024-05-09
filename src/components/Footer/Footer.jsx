import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="left">
          <div className="item">
            <h1>Categories</h1>
            <div className="list">
              <span>Women</span>
              <span>Men</span>
              <span>Shoes</span>
              <span>Accessories</span>
              <span>New Arrivals</span>
            </div>
          </div>
          <div className="item">
            <h1>Links</h1>
            <div className="list">
              <span>FAQ</span>
              <span>Pages</span>
              <span>Store</span>
              <span>Compare</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              asperiores sapiente assumenda cum ratione dolore repellat impedit
              sequi tempora voluptatibus corporis temporibus.
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              optio repudiandae! Tempore accusamus ad autem aspernatur eos
              temporibus placeat illo corporis sint ipsam eaque.
            </span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <sapn className="logo">ZAHRA</sapn>
          <span className="copyright">&copy; 2024 All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="./images/payment.png" alt="" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
