import React from "react";

function Body() {
  const [dropDownState, setDropDownState] = React.useState({
    productState: false,
    companyState: false,
    connectState: false,
  });

  const [burgerState, setBurgerState] = React.useState(false);

  function handleDropdown(event) {
    if (event.target.id == "0") {
      setDropDownState((prevValue) => {
        return {
          companyState: false,
          connectState: false,
          productState: !dropDownState.productState,
        };
      });
    } else if (event.target.id == "1") {
      setDropDownState((prevValue) => {
        return {
          productState: false,
          connectState: false,
          companyState: !dropDownState.companyState,
        };
      });
    } else if (event.target.id == "2") {
      setDropDownState((prevValue) => {
        return {
          productState: false,
          companyState: false,
          connectState: !dropDownState.connectState,
        };
      });
    }
  }

  function handleBurger() {
    setBurgerState((prevValue) => !prevValue);
  }

  return (
    <div className="background">
      <div className="intro-container">
        <div className="intro-background">
          {burgerState ? (
            <div className="burger-modal">
              <div className="burger-item">
                <p className="burger-tag-title" id="0" onClick={handleDropdown}>
                  Product
                  <img
                    src="images/icon-arrow-dark.svg"
                    alt="arrow-light"
                    style={
                      dropDownState.productState
                        ? { transform: "rotate(180deg)", height: "100%" }
                        : null
                    }
                  />
                </p>
                {dropDownState.productState ? (
                  <div className="burger-menu">
                    <p>Overview</p>
                    <p>Pricing</p>
                    <p>Marketplace</p>
                    <p>Features</p>
                    <p>Integrations</p>
                  </div>
                ) : null}
              </div>
              <div className="burger-item">
                <p className="burger-tag-title" id="1" onClick={handleDropdown}>
                  Company
                  <img
                    src="images/icon-arrow-dark.svg"
                    alt="arrow-light"
                    style={
                      dropDownState.companyState
                        ? { transform: "rotate(180deg)", height: "100%" }
                        : null
                    }
                  />
                </p>
                {dropDownState.companyState ? (
                  <div className="burger-menu">
                    <p>About</p>
                    <p>Team</p>
                    <p>Blog</p>
                    <p>Careers</p>
                  </div>
                ) : null}
              </div>
              <div className="burger-item">
                <p className="burger-tag-title" id="2" onClick={handleDropdown}>
                  Connect
                  <img
                    src="images/icon-arrow-dark.svg"
                    alt="arrow-light"
                    style={
                      dropDownState.connectState
                        ? { transform: "rotate(180deg)", height: "100%" }
                        : null
                    }
                  />
                </p>
                {dropDownState.connectState ? (
                  <div className="burger-menu">
                    <p>Contact</p>
                    <p>Newsletter</p>
                    <p>LinkedIn</p>
                  </div>
                ) : null}
              </div>
              <br className="burger-br"></br>
              <div className="burger-user">
                <p>Login</p>
                <div className="burger-signup">Sign up</div>
              </div>
            </div>
          ) : null}
          <nav className="navbar">
            <h1>Blogr</h1>
            {window.innerWidth <= 1200 ? (
              <div className="burger-container" onClick={handleBurger}>
                <img
                  src={
                    burgerState
                      ? "images/icon-close.svg"
                      : "images/icon-hamburger.svg"
                  }
                />
              </div>
            ) : (
              <div className="navbar-tags">
                <div className="navbar-tag">
                  <p className="nav-tag-title" id="0" onClick={handleDropdown}>
                    Product
                    <img
                      src="images/icon-arrow-light.svg"
                      alt="arrow-light"
                      style={
                        dropDownState.productState
                          ? { transform: "rotate(180deg)", height: "35%" }
                          : null
                      }
                    />
                  </p>
                  {dropDownState.productState ? (
                    <div className="navbar-dropdown">
                      <p>Overview</p>
                      <p>Pricing</p>
                      <p>Marketplace</p>
                      <p>Features</p>
                      <p>Integrations</p>
                    </div>
                  ) : null}
                </div>
                <div className="navbar-tag">
                  <p className="nav-tag-title" id="1" onClick={handleDropdown}>
                    Company
                    <img
                      src="images/icon-arrow-light.svg"
                      alt="arrow-light"
                      style={
                        dropDownState.companyState
                          ? { transform: "rotate(180deg)", height: "35%" }
                          : null
                      }
                    />
                  </p>
                  {dropDownState.companyState ? (
                    <div className="navbar-dropdown">
                      <p>About</p>
                      <p>Team</p>
                      <p>Blog</p>
                      <p>Careers</p>
                    </div>
                  ) : null}
                </div>
                <div className="navbar-tag">
                  <p className="nav-tag-title" id="2" onClick={handleDropdown}>
                    Connect
                    <img
                      src="images/icon-arrow-light.svg"
                      alt="arrow-light"
                      style={
                        dropDownState.connectState
                          ? { transform: "rotate(180deg)", height: "35%" }
                          : null
                      }
                    />
                  </p>
                  {dropDownState.connectState ? (
                    <div className="navbar-dropdown">
                      <p>Contact</p>
                      <p>Newsletter</p>
                      <p>LinkedIn</p>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
            <div className="nav-user">
              <p>Login</p>
              <div className="nav-signup">Sign up</div>
            </div>
          </nav>
          <div className="intro-body">
            <div className="intro-body-text">
              <h1>A modern publishing platform</h1>
              <p>Grow your audience and build your online brand</p>
            </div>
            <div className="intro-body-buttons">
              <div className="start-button">Start for free</div>
              <div className="learn-button">Learn more</div>
            </div>
          </div>
        </div>
      </div>
      <section className="design-section">
        <div className="design-container">
          <h1 className="design-heading">Designed for the future</h1>
          <div className="design-text-container">
            <div>
              <h1>Introducing an extensible editor</h1>
              <p>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of the blog.
              </p>
            </div>
            <div>
              <h1>Robust content management</h1>
              <p>
                Flexible content management enables users to easily move through
                posts. Increase the usablity of your blog by adding customised
                categories, sections, format, or flow. With this funcitonality,
                you're in full control.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="phone-section">
        <div className="phone-section-background">
          <img
            src="images/illustration-phones.svg"
            alt="phone-img"
            className="phone-img"
          />
          <div className="phone-section-text">
            <h1>State of art infrastructure</h1>
            <p>
              With reliablity and speed in mind, worldwide data centres provide
              the backbone for ultra connectivity. This ensures your site will
              load instantly, no matter where your readers are, keeping your
              site competitive.
            </p>
          </div>
        </div>
      </section>
      <section className="laptop-section">
        <div className="laptop-text-container">
          <div>
            <h1>Free, open, simple</h1>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, works seamlessly with Google
              Analytics. The architecture is clean and relatively easy to learn.
            </p>
          </div>
          <div>
            <h1>Powerful tooling</h1>
            <p>
              Batteries included. We built a simple and straightfoward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most capable sites
            </p>
          </div>
        </div>
      </section>
      <section className="footer">
        <h1>Blogr</h1>
        <div className="footer-category">
          <p className="footer-title">Product</p>
          <p>Overview</p>
          <p>Pricing</p>
          <p>Marketplace</p>
          <p>Features</p>
          <p>Integrations</p>
        </div>
        <div className="footer-category">
          <p className="footer-title">Company</p>
          <p>About</p>
          <p>Team</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
        <div className="footer-category">
          <p className="footer-title">Connect</p>
          <p>Contact</p>
          <p>Newsletter</p>
          <p>LinkedIn</p>
        </div>
      </section>
    </div>
  );
}

export default Body;
