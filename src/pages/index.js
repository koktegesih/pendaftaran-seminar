import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Data gallery seminar
  const seminarGallery = [
    {
      src: "/",
      alt: "Seminar Networking 2025",
      link: "#",
    },
    {
      src: "/assets/img/seminar-blockchain.jpeg",
      alt: "Seminar Blockchain 2024",
      link: "https://www.instagram.com/p/DA9s87CT9MW/",
    },
    {
      src: "/assets/img/seminar-ai.jpeg",
      alt: "Seminar AI 2023",
      link: "https://www.instagram.com/p/CzH_f_fPAB8/",
    },
    // Tambahkan lebih banyak di sini jika diperlukan
  ];

  return (
    <Layout>
      <div className="wrapper">
        {/* Hero Section */}
        <div className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-primary"></div>
          <div className="page-header">
            <div className="container shape-container py-lg">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 text-center">
                  <Image
                    src="/assets/img/logo.png"
                    width={100}
                    height={100}
                    alt="Coconut Logo"
                    className="img-fluid mb-3"
                    priority
                  />
                  <h1 className="display-4 text-white">
                    SEMINAR TEKNOLOGI
                    <br />
                    <br />
                    <sup className="lead">
                      Magic Behind 5G: Memahami Massive MIMO, Beamforming, dan
                      mmWave untuk Optimasi Jaringan
                    </sup>
                  </h1>
                  <div className="btn-wrapper mt-3">
                    <Link
                      href="/dokumentasi"
                      className="btn btn-white btn-icon mb-3 mb-sm-0 text-dark"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-image" />
                      </span>
                      <span className="btn-inner--text">Lihat Dokumentasi</span>
                    </Link>
                    <Link
                      href="/formulir"
                      className="btn btn-white btn-icon mb-3 mb-sm-0 text-dark"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-single-copy-04" />
                      </span>
                      <span className="btn-inner--text">Daftar Sekarang</span>
                    </Link>
                  </div>
                  <div className="mt-5">
                    <small className="text-white font-weight-bold mb-0 mr-2">
                      Made by
                    </small>
                    <Image
                      src="/assets/img/logococonut.png"
                      width={116}
                      height={35}
                      alt="Coconut Computer Club"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="container container-lg" style={{ padding: "1rem" }}>
          <div className="row">
            {seminarGallery.map((item, idx) => (
              <div key={idx} className="col-md-4 mb-5">
                <div className="card card-lift--hover shadow border-0">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <div
                      className="position-relative"
                      style={{ height: "600px" }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="card-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
