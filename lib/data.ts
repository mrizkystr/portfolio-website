import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import siPiketImg from "@/public/siPiket.jpg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SD Purbasari",
    location: "Bogor, Indonesia",
    description:
      "Saya Bersekolah selama 6 tahun dan juga lulus pada tahun 2019",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2019",
  },
  {
    title: "SMPN 7 Padalarang",
    location: "Bogor, Indonesia",
    description:
      "Saya bersekolah di SMPN ini selama 3 tahun dan lulus pada tahun 2022",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "SMKN 1 Ciomas",
    location: "Ciomas, Indonesia",
    description:
      "Saya bersekolah di SMKN 1 Ciomas selama 3 tahun dan akan melaksanakan PKL selama 6 bulan",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Sistem Informasi Piket",
    description:
      "Saya sebagai Back-end Developer membantu kelompok saya untuk membuat sebuah program Piket yang dapat membantu sekolah",
    tags: ["React", "Laravel", "MySQL", "Tailwind", ],
    imageUrl: siPiketImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Git",
  "CodeIgniter",,
  "Express",
  "MySQL",
  "Python",
  "PHP",
  "Lavarel",
] as const;
