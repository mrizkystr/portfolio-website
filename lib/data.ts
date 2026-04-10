import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import siPiketImg from "@/public/siPiket.jpg";
import rmtdevImg from "@/public/rmtdev.png";
import BaranginLogoImg from "@/public/BaranginLogo.jpeg";


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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "SD Purbasari",
    location: "Bogor, Indonesia",
    description:
      "Saya menempuh pendidikan dasar selama 6 tahun dan lulus pada tahun 2019.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2019",
  },
  {
    title: "SMPN 7 Paledang",
    location: "Bogor, Indonesia",
    description:
      "Saya melanjutkan ke jenjang SMP selama 3 tahun dan lulus pada tahun 2022.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "SMKN 1 Ciomas",
    location: "Ciomas, Indonesia",
    description:
      "Saya saat ini menempuh pendidikan di SMKN 1 Ciomas jurusan RPL, dan telah melaksanakan PKL selama 6 bulan.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
  {
    title: "Universitas Pamulang",
    location: "Pamulang, Indonesia",
    description: "Saya melaksanakan pendidikan tinggi di kampus Universitas Pamulang",
    icon: React.createElement(LuGraduationCap),
    date: "2025 - Sekarang",
  },
] as const;

export const experiencesData = [
  {
    title: "IT Support Telkom Indonesia PKL",
    location: "Bogor, Indonesia",
    description: "Saya bekerja sebagai IT Support di Telkom Indonesia selama 6 bulan.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Freelance Front-End Developer",
    location: "Indonesia",
    description: "Membantu membangun web SoftWizard HandOff bersama rekan kerja.",
    icon: React.createElement(FaReact),
    date: "2025 - Sekarang",
  },
] as const;

export const projectsData = [
  {
    title: "Sistem Informasi Piket",
    description:
      "Saya sebagai Back-end Developer membantu kelompok saya untuk membuat sebuah program Piket yang dapat membantu sekolah",
    tags: ["React", "Laravel", "MySQL", "Tailwind"],
    imageUrl: siPiketImg,
    link: "", 
  },
  {
    title: "Barangin E-commerce",
    description:
      "Saya sebagai Back-end Developer membantu kelompok saya untuk membuat sebuah Api yang dapat membantu pengguna untuk membeli barang",
    tags: ["React", "Node-Js", "MySQL", "Material-UI"],
    imageUrl: BaranginLogoImg,
    link: "https://barangin.vercel.app/",
  },
  {
    title: "SoftWizard HandOff",
    description: "Saya sebagai Front-end Developer membantu untuk building web ini bersama rekan rekan kerja saya",
    tags: ["React", "ASP.NET", "Next.js", "Tailwind"],
    imageUrl: "",
    link: "",
  }
] as const;


export const programmingLanguages = [
  "JavaScript",
  "PHP",
  "Python",
  "C++",
  "Golang",
] as const;

export const databases = [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
] as const;

export const frameworksRuntime = [
  "Laravel",
  "Express",
  "React",
  "Node.js",
  "CodeIgniter",
  "ASP.NET",
  "Next.js",
  "Tailwind",
  "Material-UI",
] as const;

export const devOpstools = [
  "Git",
  "Docker",
  "Postman",
  "Figma",
  "Jira",
]
  

