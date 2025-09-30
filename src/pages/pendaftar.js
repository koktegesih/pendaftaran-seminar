import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Cookies from "js-cookie";

export default function Pendaftar() {
  const [pendaftar, setPendaftar] = useState([]);
  const [jumlah, setJumlah] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentBukti, setCurrentBukti] = useState("");
  const [activeTab, setActiveTab] = useState("pendaftar");

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window === "undefined") return;

      const token = Cookies.get("authToken");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/pendaftar/get`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          if (res.status === 401) {
            Cookies.remove("authToken");
            window.location.href = "/login";
          }
          throw new Error("Gagal mengambil data");
        }

        const result = await res.json();
        const data = Array.isArray(result.data) ? result.data : [];
        setPendaftar(data);
        setJumlah(data.length);
      } catch (err) {
        console.error(err);
        setPendaftar([]); // fallback
        setJumlah(0);
      }
    };

    fetchData();
  }, []);

  const openModal = (filename) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/pendaftar/uploads/${filename}`;
    setCurrentBukti(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentBukti("");
  };

  const openWhatsApp = () => {
    const waLink =
      "https://wa.me/6285175401710?text=Halo%20saya%20ingin%20bertanya%20tentang%20informasi%20acara";
    window.open(waLink, "_blank");
  };

  return (
    <Layout>
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-1 shape-default" />
        <div className="container py-md">
          <div className="row row-grid justify-content-between align-items-center">
            <div className="col-lg-12">
              <div className="mb-3">
                <button type="button" className="btn btn-sm btn-success">
                  SEMINAR COCONUT
                </button>
                <h3 className="text-white">
                  <span className="display-4">
                    Magic Behind 5G: Memahami Massive MIMO, Beamforming, dan
                    mmWave untuk Optimasi Jaringan
                  </span>
                </h3>
              </div>

              <div className="nav-wrapper">
                <ul
                  className="nav nav-pills nav-fill flex-column flex-md-row w-100"
                  role="tablist"
                  style={{
                    width: "100%",
                    border: "none",
                    boxShadow: "none",
                    outline: "none",
                  }}
                >
                  <li className="nav-item w-50">
                    <button
                      className={`nav-link ${
                        activeTab === "pendaftar" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("pendaftar")}
                      style={{
                        width: "100%",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                      <i className="ni ni-align-left-2 mr-2" />
                      Informasi Pendaftar
                    </button>
                  </li>
                  <li className="nav-item w-50">
                    <button
                      className={`nav-link ${
                        activeTab === "tatib" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("tatib")}
                      style={{
                        width: "100%",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                      <i className="ni ni-align-left-2 mr-2" />
                      Tata Tertib
                    </button>
                  </li>
                </ul>
              </div>

              <div className="card shadow">
                <div className="card-body">
                  {activeTab === "pendaftar" && (
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                        <p className="txt-biru mb-0">
                          Jumlah Pendaftar <b>{jumlah}</b> Orang
                        </p>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          onClick={async () => {
                            try {
                              const token = Cookies.get("authToken");
                              if (!token) {
                                alert("Sesi habis, silakan login ulang");
                                window.location.href = "/login";
                                return;
                              }

                              const res = await fetch(
                                `${process.env.NEXT_PUBLIC_API_URL}/api/pendaftar/database/pendaftar.db`,
                                {
                                  headers: {
                                    Authorization: `Bearer ${token}`,
                                  },
                                }
                              );

                              if (!res.ok) {
                                alert("Gagal download backup");
                                return;
                              }

                              const blob = await res.blob();
                              const url = window.URL.createObjectURL(blob);
                              const link = document.createElement("a");
                              link.href = url;
                              link.download = "pendaftar.db";
                              link.click();
                              window.URL.revokeObjectURL(url);
                            } catch (err) {
                              console.error(err);
                              alert("Terjadi kesalahan saat download");
                            }
                          }}
                        >
                          <i className="ni ni-cloud-download-95 me-2" />{" "}
                          Download Backup
                        </button>
                      </div>

                      <table
                        border={1}
                        style={{
                          width: "100%",
                          tableLayout: "fixed",
                          textAlign: "center",
                        }}
                      >
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Nama Lengkap</th>
                            <th>Email</th>
                            <th>No Telepon</th>
                            <th>Asal Perguruan Tinggi</th>
                            {/* <th>Framework</th> */}
                            <th>Bukti Follow</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pendaftar.map((item, idx) => (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>{item["nama-lengkap"]}</td>
                              <td>{item.email}</td>
                              <td>{item["no-telp"]}</td>
                              <td>{item["asal-sekolah"]}</td>
                              {/* <td>{item.framework}</td> */}
                              <td>
                                <img
                                  src={`${process.env.NEXT_PUBLIC_API_URL}/api/pendaftar/uploads/${item["bukti-follow"]}`}
                                  alt="Bukti Follow"
                                  style={{
                                    width: 60,
                                    height: 60,
                                    objectFit: "cover",
                                    borderRadius: 6,
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    openModal(item["bukti-follow"])
                                  }
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <br />
                      <button type="button" className="btn btn-outline-default">
                        <i className="ni ni-calendar-grid-58 mr-2" />
                        <b>Jumat, 24 Oktober 2025</b> 13:30 WITA - Selesai
                      </button>
                      <br />
                      <br />
                      <span>
                        Informasi lebih lanjut hubungi{" "}
                        <span
                          className="text-success font-weight-bold"
                          style={{ cursor: "pointer" }}
                          onClick={openWhatsApp}
                        >
                          Bayin Ramadhan
                        </span>
                      </span>
                    </div>
                  )}

                  {activeTab === "tatib" && (
                    <div>
                      <h3 className="font-weight-bold">TATA TERTIB SEMINAR</h3>
                      <ol className="description pl-3">
                        <li>
                          Mengisi daftar hadir yang telah disediakan panitia.
                        </li>
                        <li>Menggunakan pakaian yang sopan dan rapi.</li>
                        <li>
                          Peserta berperilaku baik, menjaga ketertiban serta
                          menjaga akhlaknya.
                        </li>
                        <li>
                          Peserta dilarang membawa rokok, obat-obatan atau
                          senjata tajam yang dapat membahayakan.
                        </li>
                        <li>
                          Dilarang menggunakan HP selama materi sedang
                          berlangsung.
                        </li>
                        <li>
                          Peserta dilarang mengotori lingkungan sekitar/membuang
                          sampah sembarangan.
                        </li>
                        <li>
                          Peserta harus dapat menyimak dan menghargai pemateri
                          yang sedang menjelaskan.
                        </li>
                        <li>
                          Peserta dilarang untuk pergi dari area seminar,
                          kecuali jika ingin ke kamar mandi bisa meminta izin
                          terlebih dahulu.
                        </li>
                        <li>
                          Peserta wajib mengikuti rangkaian acara dari awal
                          sampai akhir.
                        </li>
                        <li>
                          Peserta wajib mentaati seluruh tata tertib selama
                          seminar berlangsung.
                        </li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none">
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>

        {showModal && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={closeModal}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Bukti Follow</h5>
                  <button type="button" className="close" onClick={closeModal}>
                    <span>×</span>
                  </button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={currentBukti}
                    alt="Bukti Follow"
                    className="img-fluid rounded"
                    style={{ width: 400, height: 400, objectFit: "contain" }}
                  />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={closeModal}>
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
