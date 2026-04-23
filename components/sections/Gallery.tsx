import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';
import Section, { BgMode } from '../base/Section';
import Wrapper from '../base/Wrapper';
import Heading from '../typography/Heading';
import Image from 'next/image';
import Video from '../blocks/Video';

const itemVariants = cva('relative max-w-full', {
    variants: {
        variant: {
            landscape: 'col-start-1 col-span-3',
            medium: 'col-span-2',
            portrait: 'col-span-1',
        },
    },
    defaultVariants: {
        variant: 'landscape',
    },
});

export type GalleryItem = {
    type?: 'image' | 'video';
    description?: string;
    width: number;
    height: number;
    src: string;
    alt?: string;
};

export interface GalleryRow {
    format: 'landscape' | 'largerLeft' | 'largerRight';
    items: GalleryItem[];
}

export interface GalleryProps {
    title?: string;
    titleTag?: 'h1' | 'h2';
    rows: GalleryRow[];
    background?: BgMode;
}

const Gallery: React.FC<GalleryProps & { className?: string }> = ({
    rows,
    title,
    titleTag = 'h2',
    background,
}) => {
    return (
        <Section addSeperation background={background}>
            <Wrapper spacing="default" className="space-y-24">
                {title && (
                    <Heading
                        tag={titleTag}
                        size="heading-1"
                        className="text-center"
                    >
                        {title}
                    </Heading>
                )}
                <ul className="flex flex-col gap-6 gap-y-8 md:grid md:grid-cols-[1fr_21.823%_1fr] md:gap-[2%] md:gap-y-12 list-none">
                    {rows.map((row, i) => {
                        const format = row.format || 'landscape';

                        return row.items.map((item, itemIndex) => {
                            const type = item.type || 'image';
                            let variant: 'landscape' | 'medium' | 'portrait' =
                                'landscape';

                            if (format === 'landscape') {
                                if (itemIndex > 0) return null;
                            } else if (format === 'largerLeft') {
                                if (itemIndex > 1) return null;
                                variant = itemIndex > 0 ? 'portrait' : 'medium';
                            } else if (format === 'largerRight') {
                                if (itemIndex > 1) return null;
                                variant = itemIndex > 0 ? 'medium' : 'portrait';
                            }

                            return (
                                <li
                                    key={`${i}_${itemIndex}`}
                                    className={itemVariants({ variant })}
                                >
                                    <figure>
                                        <Media
                                            variant={variant}
                                            type={type}
                                            image={{
                                                src: item.src,
                                                alt: item.alt,
                                                width: item.width,
                                                height: item.height,
                                            }}
                                        />
                                        {item.description && (
                                            <figcaption
                                                className="mt-2 desktop:mt-6 font-sans font-normal text-lg"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.description,
                                                }}
                                            />
                                        )}
                                    </figure>
                                </li>
                            );
                        });
                    })}
                </ul>
            </Wrapper>
        </Section>
    );
};

type MediaVariant = 'landscape' | 'medium' | 'portrait';

const Media: React.FC<{
    variant?: MediaVariant;
    type?: 'image' | 'video';
    image?: { src: string; alt?: string; width: number; height: number };
    className?: string;
}> = ({ type = 'image', variant = 'landscape', image, className }) => {
    if (!image?.src) return null;

    let aspectSizes: { width: number; height: number } = {
        width: 0,
        height: 0,
    };
    if (variant === 'landscape') {
        aspectSizes = { width: 1420, height: 600 };
    } else if (variant === 'medium') {
        aspectSizes = { width: 866, height: 600 };
    } else if (variant === 'portrait') {
        aspectSizes = { width: 527, height: 600 };
    }

    const aspectRatio = aspectSizes
        ? aspectSizes.width / aspectSizes.height
        : undefined;

    return (
        <>
            {type === 'image' && (
                <Image
                    src={image.src}
                    alt={image.alt || ''}
                    {...aspectSizes}
                    priority={false}
                    loading="lazy"
                    sizes={`(max-width: 832px) 100vw, (max-width: 1440px) ${
                        variant === 'landscape' ? '100vw' : '60vw'
                    }, ${aspectSizes.width}px`}
                    style={{
                        aspectRatio,
                    }}
                    className={cn(
                        'object-cover max-w-full w-full h-full max-h-full rounded-[20px]',
                        className
                    )}
                />
            )}
            {type === 'video' && (
                <Video
                    urls={image.src ? [image.src] : []}
                    autoPlay
                    muted
                    loop
                    controls={false}
                    playsInline
                    style={{ aspectRatio }}
                    className={cn(
                        'object-cover object-center rounded-[20px] max-w-full w-full max-h-full',
                        className
                    )}
                />
            )}
        </>
    );
};

export default Gallery;
