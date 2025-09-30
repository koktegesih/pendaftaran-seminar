import React, { useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

// Data dokumentasi seminar berdasarkan topik
const dokumentasiData = [
  // AI - 2023
  { src: "/assets/img/dokumentasi/AI-2023/1.JPG", topic: "AI" },
  { src: "/assets/img/dokumentasi/AI-2023/2.JPG", topic: "AI" },
  { src: "/assets/img/dokumentasi/AI-2023/3.JPG", topic: "AI" },
  { src: "/assets/img/dokumentasi/AI-2023/4.JPG", topic: "AI" },
  { src: "/assets/img/dokumentasi/AI-2023/5.JPG", topic: "AI" },
  { src: "/assets/img/dokumentasi/AI-2023/6.JPG", topic: "AI" },
  { src: "/assets/img/dokumentasi/AI-2023/7.JPG", topic: "AI" },
  { src: "/assets/img/dokumentasi/AI-2023/8.JPG", topic: "AI" },
  { src: "/assets/img/dokumentasi/AI-2023/9.JPG", topic: "AI" },

  // Blockchain - 2024
  { src: "/assets/img/dokumentasi/Blockchain-2024/1.JPG", topic: "Blockchain" },
  { src: "/assets/img/dokumentasi/Blockchain-2024/2.JPG", topic: "Blockchain" },
  { src: "/assets/img/dokumentasi/Blockchain-2024/3.JPG", topic: "Blockchain" },
  { src: "/assets/img/dokumentasi/Blockchain-2024/4.JPG", topic: "Blockchain" },
  { src: "/assets/img/dokumentasi/Blockchain-2024/5.JPG", topic: "Blockchain" },
  { src: "/assets/img/dokumentasi/Blockchain-2024/6.JPG", topic: "Blockchain" },
  { src: "/assets/img/dokumentasi/Blockchain-2024/7.JPG", topic: "Blockchain" },
  { src: "/assets/img/dokumentasi/Blockchain-2024/8.JPG", topic: "Blockchain" },
  { src: "/assets/img/dokumentasi/Blockchain-2024/9.JPG", topic: "Blockchain" },
];

export default function Dokumentasi() {
  const [selectedTopic, setSelectedTopic] = useState("all");

  const handleFilter = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredImages =
    selectedTopic === "all"
      ? dokumentasiData
      : dokumentasiData.filter((item) => item.topic === selectedTopic);

  // Daftar topik unik untuk tombol filter
  const topics = ["all", "AI", "Blockchain"];

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3 className="gallery-title mt-5">
              DOKUMENTASI KEGIATAN SEMINAR COCONUT
            </h3>
          </div>

          <div className="text-center mb-4">
            {topics.map((topic) => (
              <button
                key={topic}
                className={`btn btn-default filter-button m-1 ${
                  selectedTopic === topic ? "btn-primary" : ""
                }`}
                onClick={() => handleFilter(topic)}
              >
                {topic === "all" ? "Semua" : topic}
              </button>
            ))}
          </div>

          <div className="row">
            {filteredImages.map((item, index) => (
              <div
                key={index}
                className="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3"
              >
                <Image
                  src={item.src}
                  alt={`Dokumentasi seminar ${item.topic}`}
                  width={500}
                  height={300}
                  className="img-fluid w-100"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}