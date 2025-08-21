import React from "react";
import { Card } from "../../components/ui/card";

export const ProjectActionSection = (): JSX.Element => {
  // Project data for easier maintenance
  const projectData = {
    image: "https://c.animaapp.com/mdhe93boXq2jgO/img/frame-95-3.png",
    logo: "https://c.animaapp.com/mdhe93boXq2jgO/img/image-10.png",
    title: "Aftermath Finance",
    categories: ["DeFi", "Tooling"],
  };

  return (
    <div className="flex flex-col w-full max-w-[203px] items-start gap-2.5">
      <Card className="w-full overflow-hidden p-0 border-0">
        <div
          className="w-full h-[260px] rounded-[20px] bg-cover bg-center"
          style={{ backgroundImage: `url(${projectData.image})` }}
        />
      </Card>

      <div className="flex items-center gap-3 w-full">
        <div className="relative">
          <div className="p-[0.75px] relative rounded overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute w-[26px] h-[26px] top-0 left-0 rounded bg-[linear-gradient(302deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)]" />
            <div className="w-[26px] h-[26px] rounded bg-[linear-gradient(139deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)] absolute top-0 left-0" />

            {/* Logo container */}
            <div className="inline-flex items-center justify-center p-[5px] relative bg-black rounded">
              <div
                className="w-[14.5px] h-[14.5px] relative"
                style={{
                  backgroundImage: `url(${projectData.logo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>

        <h3 className="font-medium text-white text-lg tracking-[-0.48px] leading-7 whitespace-nowrap">
          {projectData.title}
        </h3>
      </div>

      <div className="flex items-center gap-1.5">
        {projectData.categories.map((category, index) => (
          <div key={index} className="h-[30.84px]">
            <div className="h-[30.84px]">
              <div className="pt-[6.78px] pb-[7.4px] px-[14.8px] rounded-[140.61px] backdrop-blur-[3.65px] backdrop-brightness-[100%] [background:radial-gradient(50%_50%_at_13%_4%,rgba(18,20,38,0.6)_0%,rgba(0,0,0,0.6)_100%)] inline-flex items-center justify-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-[0.62px] before:rounded-[140.61px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(153,153,153,0.07)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <span className="font-normal text-white text-[10px] tracking-[-0.20px] leading-[15.8px] whitespace-nowrap">
                  {category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
