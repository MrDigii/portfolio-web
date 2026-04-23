'use client';

import { useResize } from '@/lib/useResize';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { BgMode } from '../base/Section';

const ScrollItem: FC<{
    item: InfiniteScrollItem;
    logoHeight: number;
    asDecoration?: boolean;
    className?: string;
}> = ({ item, logoHeight, asDecoration = false, className }) => {
    const View = asDecoration ? 'div' : 'li';

    return (
        <View
            aria-hidden={asDecoration}
            className={cn(
                'group/item relative flex flex-col items-center mb-8',
                className
            )}
        >
            <Image
                src={item.logo.src}
                width={item.logo.width}
                height={item.logo.height}
                alt={asDecoration ? '' : item.logo.alt}
                loading="lazy"
                priority={false}
                style={{
                    height: logoHeight,
                    flex: `0 0 ${logoHeight}px`,
                }}
                className="shrink-0 max-w-none grayscale group-hover/item:grayscale-0 transition-all"
            />
            {item.name && (
                <span className="absolute bottom-0 opacity-0 font-mono whitespace-nowrap group-hover/item:opacity-100 transition-opacity translate-y-full pt-2">
                    {item.name}
                </span>
            )}
        </View>
    );
};

export interface InfiniteScrollItem {
    logo: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    name?: string;
}

const InfiniteScroll: FC<{
    items: InfiniteScrollItem[];
    duration?: number;
    background?: BgMode;
    className?: string;
}> = ({ items, duration = 80, background, className }) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const { width } = useResize({
        ref: trackRef,
        axis: 'width',
        delay: 100,
    });
    const [listCount, setListCount] = useState(1);

    useEffect(() => {
        if (!listRef.current || !trackRef.current) return;

        const containerWidth = trackRef.current.offsetWidth;
        const listWidth = listRef.current.scrollWidth;
        const listCount = Math.ceil(containerWidth / listWidth);

        setListCount(listCount);

        // set scroll speed css variable
        trackRef.current.style.setProperty(
            '--infinite-scroll-duration',
            `${duration}s`
        );
    }, [duration, width]);

    const largestItemHeight = items?.reduce((maxHeight, item) => {
        return Math.max(maxHeight, item.logo.height);
    }, 0);

    return (
        <div
            ref={trackRef}
            className={cn(
                'group/track flex items-center relative overflow-hidden z-0',
                'before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1/3 before:pointer-events-none before:z-10',
                'after:absolute after:top-0 after:right-0 after:bottom-0 after:w-1/3 after:pointer-events-none after:z-10',
                background === 'medium'
                    ? 'bg-medium before:bg-linear-to-r before:from-medium before:to-medium/0 after:bg-linear-to-l after:from-medium after:to-medium/0'
                    : 'bg-light before:bg-linear-to-r before:from-background before:to-background/0 after:bg-linear-to-l after:from-background after:to-background/0',
                className
            )}
        >
            <ul
                ref={listRef}
                aria-label="Tools list"
                className="flex items-center gap-6 animate-scroll px-3 group-hover/track:pause-animation"
            >
                {items.map((item, i) => (
                    <ScrollItem
                        key={i}
                        item={item}
                        logoHeight={largestItemHeight}
                    />
                ))}
            </ul>
            {[...Array(listCount)].map((_, i) => (
                <div
                    key={i}
                    aria-hidden
                    className="flex items-center gap-6 animate-scroll px-3 group-hover/track:pause-animation"
                >
                    {items.map((item, i) => (
                        <ScrollItem
                            key={i}
                            asDecoration
                            item={item}
                            logoHeight={largestItemHeight}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default InfiniteScroll;
