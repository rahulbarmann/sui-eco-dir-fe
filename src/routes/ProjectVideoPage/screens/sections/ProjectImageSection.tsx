import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export const ProjectImageSection = (): JSX.Element => {
  // Project data
  const projectData = {
    image: "https://c.animaapp.com/mdhe93boXq2jgO/img/frame-95-5.png",
    logo: "https://c.animaapp.com/mdhe93boXq2jgO/img/image-10.png",
    title: "Aftermath Finance",
    categories: ["DeFi", "Tooling"],
  };

  return (
    <div className="flex flex-col w-full max-w-[203px] items-start gap-2.5">
      <Card className="w-full p-0 overflow-hidden border-none bg-transparent">
        <CardContent className="p-0">
          <div
            className="w-full h-[260px] rounded-[20px] bg-cover bg-center"
            style={{ backgroundImage: `url(${projectData.image})` }}
          />
        </CardContent>
      </Card>

      <div className="flex items-center gap-3 w-full">
        <div className="flex items-center justify-center relative">
          <div className="absolute w-[26px] h-[26px] rounded bg-[linear-gradient(302deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)]" />
          <div className="w-[26px] h-[26px] rounded bg-[linear-gradient(139deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)] absolute" />
          <div className="flex items-center justify-center p-[5px] bg-black rounded relative z-10">
            <div
              className="w-[14.5px] h-[14.5px] bg-cover bg-center"
              style={{ backgroundImage: `url(${projectData.logo})` }}
            />
          </div>
        </div>

        <div className="font-medium text-white text-lg tracking-[-0.48px] leading-7 whitespace-nowrap font-['Satoshi-Medium',Helvetica]">
          {projectData.title}
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        {projectData.categories.map((category, index) => (
          <Badge
            key={index}
            className="h-[30.84px] px-[14.8px] py-0 rounded-[140.61px] text-[10px] font-normal tracking-[-0.20px] leading-[15.8px] text-white font-['Satoshi-Regular',Helvetica] bg-transparent backdrop-blur-[3.65px] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-[0.62px] before:rounded-[140.61px] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(153,153,153,0.07)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1]"
            style={{
              background:
                "radial-gradient(50% 50% at 13% 4%, rgba(18,20,38,0.6) 0%, rgba(0,0,0,0.6) 100%)",
            }}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
};
