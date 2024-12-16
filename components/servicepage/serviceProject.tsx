import Image from "next/image";

const ServiceProjects = ({ data }: any) => {
  if (!data.project) return null;
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col" data-aos="fade-down">
      <div className="grid grid-cols-3 max-md:grid-cols-1">
        {data?.project.map((item: any) => (
          <div key={item.id} className="mb-10">
            <Image
              alt=""
              width={300}
              height={300}
              src={item.image}
              className="w-full rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProjects;
