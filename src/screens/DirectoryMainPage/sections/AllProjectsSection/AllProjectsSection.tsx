import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FrontendAPI, Project } from "../../../../lib/utils";

// Helper to slugify category to file name
const categoryToSvg = (category: string): string => {
    return `public/category/${category
        .toLowerCase()
        .replace(/\s*&\s*/g, "-")
        .replace(/\s+/g, "-")
        .replace(/open-source/i, "opensource")}.svg`;
};

type Props = {
    selectedCategories?: string[];
};

export const AllProjectsSection = ({
    selectedCategories = [],
}: Props): JSX.Element => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const projRes = await FrontendAPI.listProjects({
                    limit: 100,
                    status: "published",
                });
                if (!cancelled) {
                    setProjects(projRes.data || []);
                }
            } catch (e: any) {
                if (!cancelled)
                    setError(e.message || "Failed to load projects");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        fetchData();
        return () => {
            cancelled = true;
        };
    }, []);

    const filteredProjects = useMemo(() => {
        if (!selectedCategories || selectedCategories.length === 0) {
            return projects;
        }
        const selectedSet = new Set(selectedCategories);
        return projects.filter((p) =>
            p.categories.some((c) => selectedSet.has(c))
        );
    }, [projects, selectedCategories]);

    return (
        <section className="w-full px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {loading &&
                    projects.length === 0 &&
                    Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={`skeleton-${i}`}
                            className="w-full min-h-[268px] rounded-2xl bg-[#0b0b0b] animate-pulse"
                        />
                    ))}
                {!loading && error && (
                    <div className="col-span-3 text-center text-red-400">
                        {error}
                    </div>
                )}
                {filteredProjects.map((project, index) => (
                    <Link
                        key={`project-${index}`}
                        to={`/project/${project.id}`}
                        className="w-full min-h-[268px] rounded-2xl relative hover:scale-[1.02] transition-transform duration-200"
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
                                        const icons: JSX.Element[] = [];
                                        const maxPerRow = 5; // conservative fit; responsive already wraps
                                        for (
                                            let i = 0;
                                            i < project.categories.length;
                                            i++
                                        ) {
                                            if (i >= maxPerRow) {
                                                icons.push(
                                                    <span
                                                        key="more"
                                                        className="text-[#e6ecffb2]"
                                                    >
                                                        ...
                                                    </span>
                                                );
                                                break;
                                            }
                                            const tag = project.categories[i];
                                            icons.push(
                                                <img
                                                    key={i}
                                                    src={categoryToSvg(tag)}
                                                    alt={tag}
                                                    className="h-8 sm:h-10"
                                                />
                                            );
                                        }
                                        return icons;
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
            </div>
        </section>
    );
};
