"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  programmingLanguages,
  databases,
  frameworksRuntime,
} from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: readonly string[];
}) => (
  <>
    <h3 className="mt-6 mb-4 text-xl font-semibold text-gray-700 dark:text-white">
      {title}
    </h3>
    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:text-white/80">
      {skills.map((skill, index) => (
        <motion.li
          className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </>
);

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <SkillCategory title="Programming Languages" skills={programmingLanguages} />
      <SkillCategory title="Databases" skills={databases} />
      <SkillCategory title="Frameworks & Runtime" skills={frameworksRuntime} />
    </section>
  );
}
