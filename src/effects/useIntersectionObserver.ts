import { RefObject, useEffect, useState } from 'react';

export const useIntersectionObserver = (
    target: RefObject<HTMLElement>,
    root: RefObject<HTMLElement>
) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting !== isIntersecting) {
                    setIntersecting(entry.isIntersecting);
                }
            },
            {
                rootMargin: '0px',
                root: root.current,
            }
        );
        if (target.current) {
            observer.observe(target.current);
        }
        return () => {
            if (target.current) {
                observer.unobserve(target.current);
            }
        };
    }, []);

    return isIntersecting;
};
