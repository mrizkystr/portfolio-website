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
        Saya seorang siswa dari sekolah{" "}
        <span className="font-medium">SMKN 1 Ciomas</span> yang bernama{" "}
        <span className="font-medium">Muhamad Rizky Satria</span>. Saya juga
        seorang <span className="font-medium">back-end developer</span>. Saya
        memilih jurusan ini agar saya dapat mengembangkan skill back end saya
        dan juga dapat menjadi ahli di bidang IT. Berikut adalah informasi
        tentang saya:
      </p>
      <ul className="text-left ml-auto mr-auto max-w-[20rem] list-disc">
        <li>
          Umur saya: <span className="font-medium">18 tahun</span>
        </li>
        <li>
          Email saya:{" "}
          <span className="font-medium">muhamadrizkysatria23@gmail.com</span>
        </li>
        <li>
          No telp saya: <span className="font-medium">085216929088</span>
        </li>
        <li>Alamat saya: Kota Bogor, Kelurahan Pasir Mulya</li>
      </ul>
    </motion.section>
  );
}
