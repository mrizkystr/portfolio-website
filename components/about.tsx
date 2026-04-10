"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Saya seorang Mahasiswa dari Universitas{" "}
        <span className="font-medium">Pamulang</span> yang bernama{" "}
        <span className="font-medium">Muhamad Rizky Satria</span>. Saya juga
        seorang <span className="font-medium">Fullstack Developer</span>. Saya
        memilih jurusan ini agar saya dapat mengembangkan skill saya dalam pembuatan sebuah website
        dan juga dapat menjadi ahli di bidang IT. Berikut adalah informasi
        tentang saya:
      </p>
      <ul className="text-left ml-auto mr-auto max-w-[20rem] list-disc">
        <li>
          Umur saya: <span className="font-medium">19 tahun</span>
        </li>
        <li>
          Email saya:{" "}
          <span className="font-medium">muhamadrizkysatria06@gmail.com</span>
        </li>
        <li>
          No telp saya: <span className="font-medium">085216929088</span>
        </li>
        <li>Alamat saya: Kota Bogor, Kelurahan Pasir Mulya</li>
      </ul>
    </motion.section>
  );
}
