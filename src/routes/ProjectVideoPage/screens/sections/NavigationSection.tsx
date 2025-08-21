import { GlobeIcon, ShareIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export const NavigationSection = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    {
      icon: <GlobeIcon className="w-5 h-5 text-white" />,
      position: "top-4 left-4",
    },
    {
      icon: <TwitterIcon className="w-5 h-5 text-white" />,
      position: "top-16 left-4",
    },
    {
      icon: <ShareIcon className="w-5 h-5 text-white" />,
      position: "top-28 left-4",
    },
  ];

  // Category tags data
  const categories = [{ name: "DeFi" }, { name: "Tooling" }];

  return (
    <div className="flex flex-col w-full max-w-[203px] items-start gap-2.5">
      <Card className="w-full overflow-hidden rounded-[20px] border-none">
        <CardContent className="p-0 relative">
          {/* Background image */}
          <div
            className="w-full h-[260px] bg-cover bg-center rounded-[20px]"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/mdhe93boXq2jgO/img/frame-95-6.png)",
            }}
          />

          {/* Social media icons */}
          {socialIcons.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} p-1 bg-black rounded-md`}
            >
              {item.icon}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Company info */}
      <div className="flex items-center gap-3 w-full">
        <div className="relative">
          <div className="w-[26px] h-[26px] rounded overflow-hidden relative">
            <div className="absolute w-full h-full top-0 left-0 rounded bg-[linear-gradient(302deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)]" />
            <div className="absolute w-full h-full top-0 left-0 rounded bg-[linear-gradient(139deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)]" />
            <div className="flex items-center justify-center p-[5px] w-full h-full bg-black rounded">
              <div className="w-[14.5px] h-[14.5px] bg-[url(https://c.animaapp.com/mdhe93boXq2jgO/img/image-10.png)] bg-cover bg-center" />
            </div>
          </div>
        </div>

        <h3 className="font-medium text-white text-lg tracking-[-0.48px] leading-7 whitespace-nowrap">
          Aftermath Finance
        </h3>
      </div>

      {/* Category tags */}
      <div className="flex items-center gap-1.5">
        {categories.map((category, index) => (
          <Badge
            key={index}
            className="h-[30.84px] px-[14.8px] py-[6.78px] rounded-[140.61px] text-[10px] font-normal text-white tracking-[-0.20px] leading-[15.8px] bg-[radial-gradient(50%_50%_at_13%_4%,rgba(18,20,38,0.6)_0%,rgba(0,0,0,0.6)_100%)] backdrop-blur-[3.65px] border border-[rgba(255,255,255,0.2)] hover:bg-[radial-gradient(50%_50%_at_13%_4%,rgba(18,20,38,0.7)_0%,rgba(0,0,0,0.7)_100%)]"
          >
            {category.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};
