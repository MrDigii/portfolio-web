import { cn } from '@/lib/utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { FC } from 'react';
import DashedTextbox from '../blocks/DashedTextbox';

const Intro: FC<{
    title?: string;
    subtitle?: string;
    avatar?: { src: string | StaticImport; alt?: string };
    isInverted?: boolean;
    className?: string;
}> = ({ title, subtitle, avatar, isInverted, className }) => {
    return (
        <section
            className={cn(
                'flex flex-col-reverse md:flex-row items-center justify-center gap-10 text-foreground',
                isInverted && 'text-white',
                className
            )}
        >
            {title && (
                <div className="text-center md:text-right space-y-4">
                    <h1
                        className="font-sans font-bold text-7xl"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    {subtitle && <DashedTextbox text={subtitle} />}
                </div>
            )}
            {avatar?.src && (
                <Image
                    src={avatar.src}
                    alt={avatar.alt || 'Avatar'}
                    width={300}
                    height={300}
                    className="flex-[0_0_250px] size-62.5 md:flex-[0_0_300px] md:size-75 rounded-full overflow-hidden drop-shadow-primary"
                />
            )}
        </section>
    );
};

export default Intro;
