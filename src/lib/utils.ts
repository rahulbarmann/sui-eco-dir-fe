export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/v1";

export type ApiResponse<T> = {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    pagination?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
};

export async function apiGet<T>(
    path: string,
    params?: Record<string, string | number | boolean | undefined>
): Promise<ApiResponse<T>> {
    const url = new URL(`${API_BASE_URL}${path}`);
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.set(key, String(value));
            }
        });
    }

    const res = await fetch(url.toString(), {
        credentials: "include",
    });

    const json = (await res.json()) as ApiResponse<T>;
    if (!res.ok || !json.success) {
        throw new Error(
            json.error || `Request failed with status ${res.status}`
        );
    }
    return json;
}

export type Project = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    categories: string[];
    logo: string | null;
    heroImage: string | null;
    website: string | null;
    videoUrl: string | null;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    status: "published" | "unpublished";
    isHiring: boolean;
    careerPageUrl: string | null;
    isOpenForBounty: boolean;
    bountySubmissionUrl: string | null;
    isOpenSource: boolean;
    githubUrl: string | null;
    images: string[];
    videos?: ProjectVideo[];
    socialLinks?: {
        website: string | null;
        github: string | null;
        twitter: string | null;
        discord: string | null;
        telegram: string | null;
        medium: string | null;
        youtube: string | null;
    };
};

export type ProjectVideo = {
    id: string;
    projectId: string;
    title: string;
    description: string | null;
    playbackId: string;
    thumbnail: string;
    featured: boolean;
    categories: string[];
    createdAt: string;
    updatedAt: string;
    projectName?: string;
};

export type Category = {
    id: string;
    name: string;
    description: string;
    icon: string;
    projectCount: number;
    featured: boolean;
};

export const FrontendAPI = {
    // Projects
    listProjects: (params?: {
        page?: number;
        limit?: number;
        category?: string;
        featured?: boolean;
        status?: string;
        search?: string;
        sortBy?: "name" | "createdAt" | "updatedAt";
        sortOrder?: "asc" | "desc";
    }) => apiGet<Project[]>("/projects", params),

    getProjectById: (id: string) => apiGet<Project>(`/projects/${id}`),

    listFeaturedProjects: () => apiGet<Project[]>("/projects/featured"),

    searchProjects: (q: string) => apiGet<Project[]>("/projects/search", { q }),

    listProjectsByCategory: (category: string) =>
        apiGet<Project[]>(`/projects/category/${encodeURIComponent(category)}`),

    // Videos
    listVideos: (params?: {
        page?: number;
        limit?: number;
        featured?: boolean;
        projectId?: string;
        category?: string;
        search?: string;
        sortBy?: "title" | "createdAt" | "order";
        sortOrder?: "asc" | "desc";
    }) => apiGet<ProjectVideo[]>("/videos", params),

    getVideoById: (id: string) => apiGet<ProjectVideo>(`/videos/${id}`),

    listFeaturedVideos: () => apiGet<ProjectVideo[]>("/videos/featured"),

    listVideosByProject: (projectId: string) =>
        apiGet<ProjectVideo[]>(`/videos/project/${projectId}`),

    searchVideos: (q: string) =>
        apiGet<ProjectVideo[]>("/videos/search", { q }),

    // Categories
    listCategories: () => apiGet<Category[]>("/categories"),
    listFeaturedCategories: () => apiGet<Category[]>("/categories/featured"),
};

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
