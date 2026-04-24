'use client';

import React, { FC, useEffect, useRef, useState } from 'react';

export interface VideoProps {
    loop?: boolean;
    muted?: boolean;
    autoPlay?: boolean;
    controls?: boolean;
    playsInline?: boolean;
    preload?: 'none' | 'metadata' | 'auto';
    urls: string[];
}

const Video: FC<
    VideoProps & {
        style?: React.CSSProperties;
        tabIndex?: number;
        className?: string;
    }
> = ({
    urls,
    muted,
    autoPlay,
    loop,
    controls,
    playsInline,
    style,
    tabIndex,
    className,
}) => {
    const [isVideoActive, setVideoActive] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!urls || !urls.length) return;

        const observer = new IntersectionObserver(
            (entries, observer) => {
                const [entry] = entries;

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    setVideoActive(true);
                }
            },
            {
                rootMargin: '200px 0px 200px 0px',
            }
        );

        const videoEl = videoRef.current;
        if (videoEl) observer.observe(videoEl);

        return () => {
            if (videoEl) observer.unobserve(videoEl);
        };
    }, [urls]);

    return (
        <video
            ref={videoRef}
            muted={muted}
            autoPlay={autoPlay}
            loop={loop}
            controls={controls}
            playsInline={playsInline}
            style={style}
            tabIndex={tabIndex}
            className={className}
        >
            {isVideoActive &&
                urls?.map((url, i) => <source src={url} key={i} />)}
        </video>
    );
};

export default Video;
