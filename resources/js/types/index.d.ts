import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';
import type { PageProps } from '@inertiajs/core';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Gallery {
    image_url: string;
    name: string;
}

export interface Room {
    name: string;
    image_url: string;
    price: number;
    area: string;
    guests: number;
    furniture: string;
    description: string;
    amenities: string[];
}

export interface Testimonial {
    name: string;
    position: string;
    image_url: string;
    description: string;
    rating: number;
}

export interface WelcomePageProps extends PageProps {
    name: string;
    testimonials: Testimonial[];
    rooms: Room[];
    galleries: Gallery[];
};
