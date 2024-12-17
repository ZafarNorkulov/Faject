"use client";
import Link from "next/link";
import Title from "../Title";
import WhiteButton from "../buttons/WhiteButton";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import Image from "next/image";

interface ProItems {
  id: number;
  name: string;
}
interface AllProject {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Projects = ({
  seeAll,
  number,
}: {
  seeAll?: boolean;
  number?: number;
}) => {
  const [projects, setProjects] = useState<ProItems[]>([]);
  const [allProjects, setAllProjects] = useState<AllProject[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<number | null>(0);
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/project/category/");
        setProjects(response?.data);
        setActiveProjectId(response?.data[0]?.id || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (!activeProjectId) return;
      try {
        let url = "/project/";
        if (activeProjectId !== projects.length)
          url = `/project/category/${activeProjectId}`;

        const response = await api.get(url);
        setAllProjects(response?.data?.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [activeProjectId, projects?.length]);

  const handleTagClick = (id: number) => {
    setActiveProjectId(id);
  };
  const displayedProjects =
    number && allProjects.length > 0
      ? allProjects?.slice(0, number)
      : allProjects;
  return (
   <></>
  );
};

export default Projects;
