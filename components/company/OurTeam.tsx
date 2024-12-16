import React, { useEffect, useState } from "react";
import Title from "../Title";
import api from "@/lib/api";

// Define the shape of the data that will be fetched
interface TeamMember {
  id: number;
  full_name: string;
  position: string;
  image: string;
}

export default function OurTeam() {
  // State to store the fetched data, typed as an array of TeamMember objects
  const [data, setData] = useState<TeamMember[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/comanda");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  return (
    <div className="container mb-6 mt-[44px]" data-aos="fade-down">
      <div className="mb-10">
        <Title text="НАША КОМАНДА" center={false} />
      </div>
      <div className="grid grid-cols-4 gap-8 max-md:grid-cols-1 max-md:gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-[20px] border border-[#FFFFFF33] p-4"
          >
            <div
              className="h-[200px] w-full rounded-[20px] bg-primary"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h3 className="mb-2 mt-6 text-xl font-semibold text-primary">
              {item.full_name}
            </h3>
            <p className="text-lg">{item.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
