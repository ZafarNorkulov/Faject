"use client";
import Title from "../Title";


const Projects = ({
  seeAll,
  number,
}: {
  seeAll?: boolean;
  number?: number;
}) => {
  // const [projects, setProjects] = useState<ProItems[]>([]);
  // const [allProjects, setAllProjects] = useState<AllProject[]>([]);
  // const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await api.get("/project/category/");
  //       setProjects(response?.data || []);
  //       setActiveProjectId(response?.data[0]?.id || null);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     if (!activeProjectId) return; // Guard clause to avoid invalid API calls
  //     try {
  //       const url = `/project/category/${activeProjectId}`;
  //       const response = await api.get(url);
  //       setAllProjects(response?.data?.results || []);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   })();
  // }, [activeProjectId]);

  // const handleTagClick = (id: number) => {
  //   setActiveProjectId(id);
  // };

  // const displayedProjects =
  //   number && allProjects.length > 0
  //     ? allProjects?.slice(0, number)
  //     : allProjects;

  return (
    <div
      data-aos="fade-down"
      className="mx-auto flex max-w-[1440px] flex-col max-md:pt-16"
    >
      <div className="container">
        {!seeAll && (
          <div className="mb-10 max-md:mb-6">
            <Title text="наши проекты" center={false} />
          </div>
        )}
        {/* <div className="mb-11 flex flex-wrap gap-4 max-md:mb-6">
          {(projects || []).map((tool) => (
            <p
              key={tool?.id}
              onClick={() => handleTagClick(tool?.id)}
              className={`cursor-pointer rounded-full border px-6 py-2 text-sm uppercase text-white hover:border-primary hover:bg-primary hover:opacity-80 max-md:text-sm ${
                activeProjectId === tool?.id
                  ? "border-primary bg-primary"
                  : "border-[#FFFFFF33] bg-transparent"
              }`}
            >
              {tool?.name}
            </p>
          ))}
        </div> */}
      </div>
      {/* {displayedProjects?.length > 0 && (
        <div className="grid grid-cols-3 overflow-hidden max-md:grid-cols-1">
          {displayedProjects.map((project) => (
            <div
              key={project?.id}
              className="col-span-1 h-[300px] overflow-hidden max-md:h-max"
            >
              <Link href={`/project/${project?.id}`}>
                <Image
                  width={500}
                  height={300}
                  alt="projects"
                  src={project?.image ? project.image : Blogbg}
                  className="size-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </Link>
            </div>
          ))}

          {!seeAll && (
            <div className="relative col-span-1 bg-gradient-primary p-8 max-md:h-[200px] max-md:px-8 max-md:py-6">
              <div className="max-md:hidden">
                <Title text="СМОТРЕТЬ ВСЕ ПРОЕКТЫ" />
              </div>
              <h1 className="text-[32px] leading-9 md:hidden">
                СМОТРЕТЬ ВСЕ ПРОЕКТЫ{" "}
              </h1>
              <div className="absolute bottom-8 right-8 h-12 w-[180px] max-md:bottom-6">
                <Link href="/project">
                  <WhiteButton text="СМОТРЕТЬ" bgColor={false} img />
                </Link>
              </div>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default Projects;
