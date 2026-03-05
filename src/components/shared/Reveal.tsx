"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    triggerOnce?: boolean;
}

export default function Reveal({
    children,
    className = "",
    delay = 0,
    triggerOnce = true,
}: RevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        if (ref.current) observer.unobserve(ref.current);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [triggerOnce]);

    const delayClass = delay > 0 ? `delay-${delay}` : "";

    return (
        <div
            ref={ref}
            className={`reveal ${isVisible ? "reveal-active" : ""} ${delayClass} ${className}`}
        >
            {children}
        </div>
    );
}
