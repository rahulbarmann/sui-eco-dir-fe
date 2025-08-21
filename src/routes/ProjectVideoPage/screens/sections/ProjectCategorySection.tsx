import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export const ProjectCategorySection = (): JSX.Element => {
  // Data for category badges
  const categories = [{ name: "DeFi" }, { name: "Tooling" }];

  return (
    <div className="flex flex-col w-full max-w-[203px] items-start gap-2.5">
      <Card className="w-full overflow-hidden border-none">
        <CardContent className="p-0">
          <div
            className="w-full h-[260px] bg-cover bg-center rounded-[20px]"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/mdhe93boXq2jgO/img/frame-95-1.png)",
            }}
          />
        </CardContent>
      </Card>

      <div className="flex items-center gap-3 w-full">
        <div className="relative">
          <div className="p-[0.75px] rounded overflow-hidden">
            <div className="absolute w-[26px] h-[26px] top-0 left-0 rounded bg-[linear-gradient(302deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)]" />
            <div className="w-[26px] h-[26px] rounded bg-[linear-gradient(139deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)] absolute top-0 left-0" />
            <div className="flex items-center justify-center p-[5px] bg-black rounded relative">
              <div
                className="w-[14.5px] h-[14.5px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://c.animaapp.com/mdhe93boXq2jgO/img/image-10.png)",
                }}
              />
            </div>
          </div>
        </div>

        <h3 className="font-medium text-white text-lg tracking-[-0.48px] leading-7 whitespace-nowrap [font-family:'Satoshi-Medium',Helvetica]">
          Aftermath Finance
        </h3>
      </div>

      <div className="flex items-center gap-1.5">
        {categories.map((category, index) => (
          <Badge
            key={index}
            className="h-[30.84px] px-[14.8px] py-0 rounded-[140.61px] border-none backdrop-blur-[3.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.65px)_brightness(100%)] [background:radial-gradient(50%_50%_at_13%_4%,rgba(18,20,38,0.6)_0%,rgba(0,0,0,0.6)_100%)] overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-[0.62px] before:rounded-[140.61px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(153,153,153,0.07)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <span className="font-normal text-white text-[10px] tracking-[-0.20px] leading-[15.8px] whitespace-nowrap [font-family:'Satoshi-Regular',Helvetica]">
              {category.name}
            </span>
          </Badge>
        ))}
      </div>
    </div>
  );
};
