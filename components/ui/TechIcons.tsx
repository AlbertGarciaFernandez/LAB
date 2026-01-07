import React from "react";

export const TechIcons = {
    NextJS: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 180 180" fill="none" {...props}>
            <mask
                id="mask0_408_134"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="180"
                height="180"
            >
                <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#mask0_408_134)">
                <circle cx="90" cy="90" r="90" fill="currentColor" fillOpacity="0.1" />
                <path
                    d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                    fill="currentColor"
                />
                <path d="M115 54H126.87V125.97H115V54Z" fill="currentColor" />
            </g>
        </svg>
    ),
    React: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1.5">
                <ellipse rx="10" ry="4.5" transform="rotate(0 12 12)" cx="12" cy="12" />
                <ellipse rx="10" ry="4.5" transform="rotate(60 12 12)" cx="12" cy="12" />
                <ellipse rx="10" ry="4.5" transform="rotate(120 12 12)" cx="12" cy="12" />
            </g>
        </svg>
    ),
    TypeScript: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 9H7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.5 9V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 12C17 12 16 11 15 11C14 11 14 12 14 12.5C14 13 15 13 15.5 13.5C16 14 17 14.5 17 15C17 15.5 16.5 16 15 16C13.5 16 13 15 13 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Tailwind: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M11.5 6C11.5 6 13 4 15 4C17 4 19 5.5 19 8C19 11 16 12 14.5 13C13 14 11 16 11 18.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 10C5 10 6.5 8 8.5 8C10.5 8 12.5 9.5 12.5 12C12.5 15 9.5 16 8 17C6.5 18 4.5 20 4.5 22.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Framer: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M4 0H20V8H12L20 16H12V24L4 16V8L12 8H4V0Z" fill="currentColor" />
        </svg>
    ),
    Shopify: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M19.5 6L16 2L12 8L2.5 6L4 16L12 22L20 16L21.5 6H19.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M8.5 10.5C9.5 9.5 10.5 8.5 12 8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    ),
    SFCC: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M17 16.5C17 16.5 19 15 19 12C19 9 17 8 16 8C16 5 14 4 12 4C10 4 8 5 8 8C7 8 5 9 5 12C5 15 7 16.5 7 16.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 14V20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 17L12 20L15 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Figma: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M12 12H8C6 12 4 10 4 8C4 6 6 4 8 4H12V12Z"
                fill="currentColor"
                fillOpacity="0.5"
            />
            <path
                d="M12 12H16C18 12 20 10 20 8C20 6 18 4 16 4H12V12Z"
                fill="currentColor"
                fillOpacity="0.8"
            />
            <path
                d="M12 12V16C12 18 10 20 8 20C6 20 4 18 4 16C4 14 6 12 8 12H12Z"
                fill="currentColor"
                fillOpacity="0.5"
            />
            <path
                d="M12 12H8C6 12 4 14 4 16C4 18 6 20 8 20"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    ),
    Git: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M16 22.027L20.932 17.095C21.688 16.339 21.688 15.112 20.932 14.356L8.68599 2.11C7.92999 1.354 6.70299 1.354 5.94699 2.11L2.01299 6.044C1.25699 6.8 1.25699 8.027 2.01299 8.783L8.68599 15.456"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M10 8V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <circle cx="10" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
            <path
                d="M10 8H13C14.657 8 16 9.343 16 11V14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    GraphQL: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M12 2L12 22"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M20 7L4 17"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M4 7L20 17"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    ),
    NodeJS: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 2V22" stroke="currentColor" strokeWidth="1" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
        </svg>
    ),
    NestJS: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 6L7 9V15L12 18L17 15V9L12 6Z" fill="currentColor" fillOpacity="0.5" />
        </svg>
    ),
    PostgreSQL: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2C7.58 2 4 5.58 4 10C4 14.42 7.58 18 12 18C13.1 18 14.15 17.78 15.1 17.38L19 21L21 19L17.38 15.1C17.78 14.15 18 13.1 18 12C18 7.58 14.42 4 12 4V2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    ),
    N8N: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
            <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M10 7H14L14 17H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    OpenAI: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2C10.9 2 10 2.9 10 4V6H14V4C14 2.9 13.1 2 12 2Z" stroke="currentColor" strokeWidth="2" />
            <path d="M12 22C13.1 22 14 21.1 14 20V18H10V20C10 21.1 10.9 22 12 22Z" stroke="currentColor" strokeWidth="2" />
            <path d="M4 10C2.9 10 2 10.9 2 12C2 13.1 2.9 14 4 14H6V10H4Z" stroke="currentColor" strokeWidth="2" />
            <path d="M20 10H18V14H20C21.1 14 22 13.1 22 12C22 10.9 21.1 10 20 10Z" stroke="currentColor" strokeWidth="2" />
            <path d="M8 8L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 18L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 8L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 18L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    REST: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 8H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    AIAgents: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    RAG: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M4 4H10V10H4V4Z" stroke="currentColor" strokeWidth="2" />
            <path d="M14 4H20V10H14V4Z" stroke="currentColor" strokeWidth="2" />
            <path d="M4 14H10V20H4V14Z" stroke="currentColor" strokeWidth="2" />
            <path d="M14 14H20L17 20L14 14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M10 7H14" stroke="currentColor" strokeWidth="2" />
            <path d="M10 17H14" stroke="currentColor" strokeWidth="2" />
            <path d="M7 10V14" stroke="currentColor" strokeWidth="2" />
            <path d="M17 10V14" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
};
