import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export const ProjectFeedbackSection = (): JSX.Element => {
  // Project data
  const projectData = {
    image: "https://c.animaapp.com/mdhe93boXq2jgO/img/frame-95-9.png",
    logo: "https://c.animaapp.com/mdhe93boXq2jgO/img/image-10.png",
    name: "Aftermath Finance",
    tags: ["DeFi", "Tooling"],
  };

  return (
    <Card className="flex flex-col w-full max-w-[203px] bg-transparent border-none">
      <CardContent className="flex flex-col gap-2.5 p-0">
        {/* Project Image */}
        <div
          className="w-full h-[260px] bg-cover bg-center rounded-[20px]"
          style={{ backgroundImage: `url(${projectData.image})` }}
        />

        {/* Project Title with Logo */}
        <div className="flex items-center gap-3 w-full">
          <div className="relative">
            <div className="absolute w-[26px] h-[26px] rounded bg-[linear-gradient(302deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)]" />
            <div className="absolute w-[26px] h-[26px] rounded bg-[linear-gradient(139deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)]" />
            <div className="relative flex items-center justify-center p-[5px] bg-black rounded">
              <div
                className="w-[14.5px] h-[14.5px] bg-cover bg-center"
                style={{ backgroundImage: `url(${projectData.logo})` }}
              />
            </div>
          </div>
          <span className="font-medium text-white text-lg tracking-[-0.48px] leading-7 whitespace-nowrap font-['Satoshi-Medium',Helvetica]">
            {projectData.name}
          </span>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-1.5">
          {projectData.tags.map((tag, index) => (
            <Badge
              key={index}
              className="h-[30.84px] px-[14.8px] py-0 flex items-center justify-center rounded-[140.61px] text-[10px] font-normal text-white tracking-[-0.20px] leading-[15.8px] font-['Satoshi-Regular',Helvetica] backdrop-blur-[3.65px] backdrop-brightness-[100%] bg-[radial-gradient(50%_50%_at_13%_4%,rgba(18,20,38,0.6)_0%,rgba(0,0,0,0.6)_100%)] border-none relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-[0.62px] before:rounded-[140.61px] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(153,153,153,0.07)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
