import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const ProjectDescriptionSection = (): JSX.Element => {
  // Project category badges data
  const categories = [{ name: "DeFi" }, { name: "Open Source" }];

  // Action buttons data
  const actionButtons = [
    {
      icon: "https://c.animaapp.com/mdhe93boXq2jgO/img/internet.svg",
      alt: "Internet",
    },
    {
      icon: "https://c.animaapp.com/mdhe93boXq2jgO/img/share-01.svg",
      alt: "Share",
    },
  ];

  return (
    <div className="flex items-center gap-10">
      <Card className="w-[392px] h-[683px] overflow-hidden rounded-[20px] relative p-0 border-0">
        {/* Project background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://c.animaapp.com/mdhe93boXq2jgO/img/frame-95-10.png)",
          }}
        />

        {/* Sound control button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-[17px] right-[17px] rounded-full bg-gradient-to-b from-black/40 to-black/30 border-0 shadow-[inset_0px_3px_4px_#ffffff1a] backdrop-blur-[2px] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-full before:bg-gradient-to-br before:from-white/32 before:to-white/16 before:pointer-events-none"
        >
          <img
            className="w-8 h-8"
            alt="Volume high"
            src="https://c.animaapp.com/mdhe93boXq2jgO/img/volume-high.svg"
          />
        </Button>

        {/* Project info overlay */}
        <div className="absolute w-full h-[207px] bottom-0 left-0 rounded-[20px] backdrop-blur-[0.15px] bg-gradient-to-t from-black/84 via-black/50 to-transparent">
          <CardContent className="p-5">
            {/* Logo and categories */}
            <div className="flex items-end gap-6 mb-6">
              {/* Project logo */}
              <div className="p-[1.5px] rounded-lg inline-flex items-center justify-center relative overflow-hidden">
                <div className="w-[52px] h-[52px] rounded-lg bg-gradient-to-br from-[rgba(77,162,255,1)] to-[rgba(77,162,255,0)] absolute top-0 left-0" />
                <div className="w-[52px] h-[52px] rounded-lg bg-gradient-to-tl from-[rgba(77,162,255,1)] to-[rgba(77,162,255,0)] absolute top-0 left-0" />
                <div className="inline-flex items-center justify-center p-2.5 relative bg-black rounded-lg">
                  <div className="w-[29px] h-[29px] relative bg-[url(https://c.animaapp.com/mdhe93boXq2jgO/img/image-10.png)] bg-cover bg-center" />
                </div>
              </div>

              {/* Category badges */}
              <div className="flex items-center gap-1.5">
                {categories.map((category, index) => (
                  <Badge
                    key={index}
                    className="h-[30.84px] rounded-[140.61px] bg-[radial-gradient(50%_50%_at_13%_4%,rgba(18,20,38,0.6)_0%,rgba(0,0,0,0.6)_100%)] backdrop-blur-[3.65px] border-0 before:content-[''] before:absolute before:inset-0 before:p-[0.62px] before:rounded-[140.61px] before:bg-gradient-to-b before:from-white/50 before:to-gray-500/7 before:pointer-events-none"
                  >
                    <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-[10px] tracking-[-0.20px] leading-[15.8px]">
                      {category.name}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project title and description */}
            <div className="flex flex-col gap-2">
              <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-2xl tracking-[-0.48px] leading-7">
                Aftermath Finance
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[25.6px] line-clamp-2">
                Aftermath is built for traders and investors who value speed,
                transparency, and decentralization. Powered by the Sui
                blockchain, our platform ensures optimal deals with minimal
                costs.
              </p>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Action buttons column */}
      <div className="flex flex-col w-[55px] items-start gap-5">
        {/* Website button */}
        <div className="p-[1.5px] rounded-lg inline-flex items-center justify-center relative overflow-hidden">
          <div className="w-[55px] h-[55px] rounded-lg bg-gradient-to-br from-[rgba(77,162,255,1)] to-[rgba(77,162,255,0)] absolute top-0 left-0" />
          <div className="w-[55px] h-[55px] rounded-lg bg-gradient-to-tl from-[rgba(77,162,255,1)] to-[rgba(77,162,255,0)] absolute top-0 left-0" />
          <Button variant="default" className="p-2.5 bg-black rounded-lg">
            <img
              className="w-8 h-8"
              alt="Internet"
              src="https://c.animaapp.com/mdhe93boXq2jgO/img/internet.svg"
            />
          </Button>
        </div>

        {/* Separator */}
        <img
          className="w-full"
          alt="Container"
          src="https://c.animaapp.com/mdhe93boXq2jgO/img/container.svg"
        />

        {/* Share button */}
        <div className="p-[1.5px] rounded-lg inline-flex items-center justify-center relative overflow-hidden">
          <div className="w-[55px] h-[55px] rounded-lg bg-gradient-to-br from-[rgba(77,162,255,1)] to-[rgba(77,162,255,0)] absolute top-0 left-0" />
          <div className="w-[55px] h-[55px] rounded-lg bg-gradient-to-tl from-[rgba(77,162,255,1)] to-[rgba(77,162,255,0)] absolute top-0 left-0" />
          <Button variant="default" className="p-2.5 bg-black rounded-lg">
            <img
              className="w-8 h-8"
              alt="Share"
              src="https://c.animaapp.com/mdhe93boXq2jgO/img/share-01.svg"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
