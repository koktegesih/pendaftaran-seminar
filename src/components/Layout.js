import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
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
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/img/apple-icon.png"
        />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEMINAR COCONUT</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-VT7H0M2ZKX..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      {/* Navbar */}
      <nav className="navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2">
        <div className="container">
          <Link href="/">
            <span className="navbar-brand mr-lg-5">
              <Image
                src="/assets/img/logococonut.png"
                width={136}
                height={35}
                alt="Logo COCONUT"
                priority
              />
            </span>
          </Link>

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
                      width={136}
                      height={35}
                      alt="Logo COCONUT"
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                  </span>
                </div>
              </div>
            </div>
            {/* Navbar Social Media Links */}
            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
              <li className="nav-item">
                <Link
                  href="https://www.instagram.com/coconutdotorg"
                  className="nav-link nav-link-icon text-dark"
                >
                  <i className="fa-brands fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none">
                    Instagram
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://www.facebook.com/coconutcomputer"
                  className="nav-link nav-link-icon text-dark"
                >
                  <i className="fa-brands fa-facebook" />
                  <span className="nav-link-inner--text d-lg-none">
                    Facebook
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://www.tiktok.com/@coconut_computer_club"
                  className="nav-link nav-link-icon text-dark"
                >
                  <i className="fa-brands fa-tiktok" />
                  <span className="nav-link-inner--text d-lg-none">TikTok</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://youtube.com/@coconutcomputerclub3982"
                  className="nav-link nav-link-icon text-dark"
                >
                  <i className="fa-brands fa-youtube" />
                  <span className="nav-link-inner--text d-lg-none">
                    YouTube
                  </span>
                </Link>
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
                <h3 className="text-primary font-weight-light mb-2">
                  SEMINAR TEKNOLOGI
                </h3>
                <h5 className="mb-0 font-weight-light">
                  <b>
                    <i>Mencerdaskan Kehidupan Bangsa</i>
                  </b>
                  <br />
                  Membuka Pengetahuan, Menghubungkan Pikiran.
                </h5>
              </div>
              {/* Link Social Media */}
              <div className="col-lg-6 text-lg-center btn-wrapper">
                <Link
                  href="https://www.instagram.com/coconutdotorg"
                  className="btn btn-icon-only btn-instagram rounded-circle mr-2"
                >
                  <span className="btn-inner--icon">
                    <i
                      className="fa-brands fa-instagram"
                      style={{ color: "white" }}
                    />
                  </span>
                </Link>
                <Link
                  href="https://www.facebook.com/coconutcomputer"
                  className="btn btn-icon-only btn-facebook rounded-circle mr-2"
                >
                  <span className="btn-inner--icon">
                    <i
                      className="fa-brands fa-facebook"
                      style={{ color: "white" }}
                    />
                  </span>
                </Link>
                <Link
                  href="https://www.coconut.or.id"
                  className="btn btn-icon-only btn-dribbble rounded-circle mr-2"
                >
                  <span className="btn-inner--icon">
                    <i
                      className="fa-brands fa-chrome"
                      style={{ color: "white" }}
                    />
                  </span>
                </Link>
                <Link
                  href="https://youtube.com/@coconutcomputerclub3982"
                  className="btn btn-icon-only btn-youtube rounded-circle mr-2"
                >
                  <span className="btn-inner--icon">
                    <i
                      className="fa-brands fa-youtube"
                      style={{ color: "white" }}
                    />
                  </span>
                </Link>
              </div>
            </div>
            <hr />
            {/* Footer Links */}
            <div className="row align-items-center justify-content-md-between">
              <div className="col-md-6">
                <div className="copyright">
                  © 2025 <span>COCONUT Computer Club</span>.
                </div>
              </div>
              <div className="col-md-6">
                <ul className="nav nav-footer justify-content-end">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Beranda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/dokumentasi" className="nav-link">
                      Dokumentasi
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/formulir" className="nav-link">
                      Formulir
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scripts */}
      <Script
        src="https://cdn.jsdelivr.net/npm/flatpickr"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/core/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/core/popper.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/core/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/perfect-scrollbar.jquery.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/bootstrap-switch.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/nouislider.min.js"
        strategy="lazyOnload"
      />
      <Script src="/assets/js/plugins/moment.min.js" strategy="lazyOnload" />
      <Script
        src="/assets/js/plugins/datetimepicker.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/bootstrap-datepicker.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/argon-design-system.min.js?v=1.2.2"
        strategy="lazyOnload"
      />
      <Script src="/assets/js/script.js" strategy="lazyOnload" />
    </>
  );
}
