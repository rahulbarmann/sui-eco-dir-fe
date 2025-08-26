import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FrontendAPI, Project } from "../../../../lib/utils";

// Category SVG mapping - more comprehensive mapping
const categorySvgMap: { [key: string]: string } = {
    DeFi: "public/category/defi.svg",
    "NFTs & Gaming": "public/category/nft-gaming.svg",
    "NFT & Gaming": "public/category/nft-gaming.svg", // Alternative naming
    Infrastructure: "public/category/infrastructure.svg",
    Tooling: "public/category/tooling.svg",
    "Open Source": "public/category/opensource.svg",
    "DAOs & Governance": "public/category/dao-governance.svg",
    "DAO & Governance": "public/category/dao-governance.svg", // Alternative naming
    Launchpad: "public/category/launchpad.svg",
    "Naming Service": "public/category/naming-service.svg",
};

// Helper to get SVG path or generate fallback
const getCategoryDisplay = (category: string) => {
    const svgPath = categorySvgMap[category];
    return {
        hasSvg: !!svgPath,
        svgPath: svgPath,
        fallbackText: category,
    };
};

export const HeroSection = (): JSX.Element => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        async function run() {
            setLoading(true);
            setError(null);
            try {
                const res = await FrontendAPI.listFeaturedProjects();
                if (!cancelled) setProjects((res.data || []).slice(0, 3));
            } catch (e: any) {
                if (!cancelled)
                    setError(e.message || "Failed to load featured projects");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        run();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-6 lg:px-10">
            {loading && projects.length === 0 && (
                <div className="w-full min-h-[268px] rounded-2xl bg-[#0b0b0b] animate-pulse" />
            )}
            {!loading && error && <div className="text-red-400">{error}</div>}
            {projects.map((project, index) => (
                <Link
                    key={index}
                    to={`/project/${project.id}`}
                    className="flex-1 min-w-[320px] sm:min-w-[400px] lg:min-w-[450px] min-h-[268px] rounded-2xl relative hover:scale-[1.02] transition-transform duration-200"
                >
                    {/* Card gradient border */}
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(50%_50%_at_49%_-36%,rgba(138,165,255,0.7)_0%,rgba(0,0,0,0.7)_100%)]" />

                    {/* Card content */}
                    <div className="absolute inset-[1px] rounded-2xl bg-[radial-gradient(50%_50%_at_50%_8%,rgba(18,20,38,1)_0%,rgba(0,0,0,1)_100%)] p-6 sm:p-8 flex flex-col gap-6">
                        {/* Logo Section */}
                        <div className="flex w-full items-center">
                            <div className="p-[1.5px] rounded-lg inline-flex items-center justify-center relative overflow-hidden">
                                <div className="absolute w-[52px] h-[52px] top-0 left-0 rounded-lg bg-[linear-gradient(302deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)]" />
                                <div className="absolute w-[52px] h-[52px] top-0 left-0 rounded-lg bg-[linear-gradient(139deg,rgba(77,162,255,1)_0%,rgba(77,162,255,0)_25%)]" />
                                <div className="inline-flex items-center justify-center p-2.5 relative bg-black rounded-lg">
                                    <div
                                        className="relative w-[29px] h-[29px] bg-cover bg-[50%_50%]"
                                        style={{
                                            backgroundImage: `url(${project.logo})`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col w-full items-start justify-center gap-4">
                            {/* Title */}
                            <h3 className="self-stretch font-medium text-white text-xl sm:text-2xl tracking-[-0.48px] leading-7 [font-family:'Satoshi-Medium',Helvetica]">
                                {project.name}
                            </h3>

                            {/* Categories */}
                            <div className="flex items-center gap-2 flex-wrap">
                                {(() => {
                                    const nodes: JSX.Element[] = [];
                                    const max = 5;
                                    for (
                                        let i = 0;
                                        i < project.categories.length;
                                        i++
                                    ) {
                                        if (i >= max) {
                                            nodes.push(
                                                <span
                                                    key="more"
                                                    className="text-[#e6ecffb2]"
                                                >
                                                    ...
                                                </span>
                                            );
                                            break;
                                        }
                                        const category = project.categories[i];
                                        const categoryDisplay =
                                            getCategoryDisplay(category);

                                        if (categoryDisplay.hasSvg) {
                                            nodes.push(
                                                <div
                                                    key={i}
                                                    className="h-8 sm:h-10 flex items-center justify-center p-0.5 overflow-hidden"
                                                >
                                                    <img
                                                        src={
                                                            categoryDisplay.svgPath
                                                        }
                                                        alt={category}
                                                        className="h-full w-auto object-contain filter drop-shadow-[0_0_0.5px_rgba(0,0,0,0.5)]"
                                                        style={{
                                                            imageRendering:
                                                                "crisp-edges",
                                                        }}
                                                        onError={(e) => {
                                                            // Replace failed image with text badge
                                                            const target =
                                                                e.target as HTMLImageElement;
                                                            const parent =
                                                                target.parentElement;
                                                            if (parent) {
                                                                parent.innerHTML = `
                                        <div class="h-8 sm:h-10 px-3 py-1 rounded-full bg-[#4DA2FF]/20 border border-[#4DA2FF]/30 flex items-center justify-center">
                                            <span class="text-[#4DA2FF] text-xs font-medium whitespace-nowrap">
                                                ${category}
                                            </span>
                                        </div>
                                    `;
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            );
                                        } else {
                                            nodes.push(
                                                <div
                                                    key={i}
                                                    className="h-8 sm:h-10 px-3 py-1 rounded-full bg-[#4DA2FF]/20 border border-[#4DA2FF]/30 flex items-center justify-center"
                                                >
                                                    <span className="text-[#4DA2FF] text-xs font-medium whitespace-nowrap">
                                                        {category}
                                                    </span>
                                                </div>
                                            );
                                        }
                                    }
                                    return nodes;
                                })()}
                            </div>

                            {/* Description */}
                            <p className="self-stretch [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#e6ecffb2] text-sm sm:text-base tracking-[-0.32px] leading-[22px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    );
};
