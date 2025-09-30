import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToDownload = () => {
    const el = document.querySelector(".section-download");
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.scrollToDownload = scrollToDownload;
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/apple-icon.png" />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>COCONUT OPEN CLASS</title>
      </Head>

      {/* Navbar */}
      <nav className="navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2">
        <div className="container">
          <span className="navbar-brand mr-lg-5">
            <Image
              src="/assets/img/logococonut.png"
              width={112}
              height={28}
              alt="Logo COCONUT"
              priority
            />
          </span>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbar_global"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>×</span>
            ) : (
              <span className="navbar-toggler-icon" />
            )}
          </button>

          <div
            className={`navbar-collapse collapse ${isOpen ? "show" : ""}`}
            id="navbar_global"
            style={{ marginTop: isOpen ? "65px" : "0px" }}
          >
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <span>
                    <Image
                      src="/assets/img/logococonut.png"
                      width={112}
                      height={28}
                      alt="Logo COCONUT"
                      priority
                      style={{ width: 'auto', height: 'auto' }} 
                    />
                  </span>
                </div>
              </div>
            </div>
            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
              <li className="nav-item">
                <span className="nav-link nav-link-icon text-dark">
                  <i className="fa fa-facebook" />
                  <span className="nav-link-inner--text d-lg-none">Facebook</span>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link nav-link-icon text-dark">
                  <i className="fa fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none">Instagram</span>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link nav-link-icon text-dark">
                  <i className="fa fa-youtube" />
                  <span className="nav-link-inner--text d-lg-none">YouTube</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="wrapper">{children}</div>

      {/* Footer */}
      <footer className="footer has-cards">
        <div className="container container-lg">
          <div className="row">{/* ... footer cards and content ... */}</div>
          <div className="container">
            <div className="row row-grid align-items-center my-md">
              <div className="col-lg-6">
                <h3 className="text-primary font-weight-light mb-2">SEMINAR TEKNOLOGI</h3>
                <h5 className="mb-0 font-weight-light">
                  <b>
                    <i>Mencerdaskan Kehidupan Bangsa</i>
                  </b>
                  <br />
                  Membuka Pengetahuan, Menghubungkan Pikiran.
                </h5>
              </div>
              <div className="col-lg-6 text-lg-center btn-wrapper">
                <span className="btn btn-icon-only btn-youtube rounded-circle mr-2">
                  <span className="btn-inner--icon">
                    <i className="fa fa-youtube" style={{ color: "white" }} />
                  </span>
                </span>
                <span className="btn btn-icon-only btn-facebook rounded-circle mr-2">
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook" style={{ color: "white" }} />
                  </span>
                </span>
                <span className="btn btn-icon-only btn-dribbble rounded-circle">
                  <span className="btn-inner--icon">
                    <i className="fa fa-chrome" style={{ color: "white" }} />
                  </span>
                </span>
              </div>
            </div>
            <hr />
            <div className="row align-items-center justify-content-md-between">
              <div className="col-md-6">
                <div className="copyright">
                  © 2025 <span>COCONUT Computer Club</span>.
                </div>
              </div>
              <div className="col-md-6">
                <ul className="nav nav-footer justify-content-end">
                  <li className="nav-item">
                    <span className="nav-link">About Us</span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">Blog</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scripts */}
      <Script src="https://cdn.jsdelivr.net/npm/flatpickr" strategy="beforeInteractive" />
      <Script src="/assets/js/core/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/core/popper.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/core/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins/perfect-scrollbar.jquery.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/plugins/bootstrap-switch.js" strategy="lazyOnload" />
      <Script src="/assets/js/plugins/nouislider.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/plugins/moment.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/plugins/datetimepicker.js" strategy="lazyOnload" />
      <Script src="/assets/js/plugins/bootstrap-datepicker.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/argon-design-system.min.js?v=1.2.2" strategy="lazyOnload" />
      <Script src="/assets/js/script.js" strategy="lazyOnload" />
    </>
  );
}
