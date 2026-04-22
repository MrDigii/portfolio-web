import { FC } from 'react';
import Section, { BgMode } from '../base/Section';
import Wrapper from '../base/Wrapper';
import Heading from '../typography/Heading';
import { isValidArray } from '@/lib/arrays';
import Image from 'next/image';

export interface Skill {
    title?: string;
    text?: string;
}

export interface Tool {
    logo: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    name?: string;
}

const Skills: FC<{
    title?: string;
    items?: Skill[];
    tools?: Tool[];
    background?: BgMode;
}> = ({ title, items, tools, background }) => {
    const Tools = tools?.map((tool, i) => (
        <li key={i}>
            <Image
                src={tool.logo.src}
                width={tool.logo.width}
                height={tool.logo.height}
                alt={tool.logo.alt}
            />
        </li>
    ));

    return (
        <Section addSeperation background={background}>
            <Wrapper spacing="default" className="space-y-24">
                {title && (
                    <Heading size="heading-1" className="text-center">
                        {title}
                    </Heading>
                )}
                {isValidArray(items, false) && (
                    <ul
                        aria-label="Skills list"
                        className="flex flex-wrap flex-col items-center justify-center md:flex-row md:items-start gap-11"
                    >
                        {items.map((item, i) => (
                            <li
                                key={i}
                                className="space-y-8 max-w-125 md:w-[calc(50%-2.75rem)] xl:w-[calc(33.333%-2.75rem)]"
                            >
                                {item.title && (
                                    <Heading
                                        size="heading-3"
                                        className="after:block after:w-7.5 after:h-0.75 after:bg-primary after:mt-2"
                                    >
                                        <span>{item.title}</span>
                                    </Heading>
                                )}
                                {item.text && (
                                    <p
                                        className="font-sans font-normal text-base"
                                        dangerouslySetInnerHTML={{
                                            __html: item.text,
                                        }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                )}
                {isValidArray(tools, false) && (
                    <div className="group/track flex items-center relative overflow-hidden">
                        <ul
                            aria-label="Tools list"
                            className="flex items-center gap-6 animate-scroll px-3 group-hover/track:pause-animation"
                        >
                            {tools.map((tool, i) => (
                                <li
                                    key={i}
                                    className="group/tool relative flex flex-col gap-2 items-center mb-8"
                                >
                                    <Image
                                        src={tool.logo.src}
                                        width={tool.logo.width}
                                        height={tool.logo.height}
                                        alt={tool.logo.alt}
                                        className="shrink-0 max-w-none grayscale hover:grayscale-0 transition-all"
                                    />
                                    {tool.name && (
                                        <span className="absolute bottom-0 opacity-0 whitespace-nowrap group-hover/tool:opacity-100 transition-opacity translate-y-full">
                                            {tool.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div
                            aria-hidden
                            className="flex items-center gap-6 animate-scroll px-3 group-hover/track:pause-animation"
                        >
                            {tools.map((tool, i) => (
                                <div
                                    key={i}
                                    className="group/tool relative flex flex-col gap-2 items-center mb-8"
                                >
                                    <Image
                                        src={tool.logo.src}
                                        width={tool.logo.width}
                                        height={tool.logo.height}
                                        alt=""
                                        aria-hidden
                                        className="shrink-0 max-w-none grayscale hover:grayscale-0 transition-all"
                                    />
                                    {tool.name && (
                                        <span className="absolute bottom-0 opacity-0 whitespace-nowrap group-hover/tool:opacity-100 transition-opacity translate-y-full">
                                            {tool.name}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-linear-to-r from-medium to-medium/0 pointer-events-none" />
                        <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-linear-to-l from-medium to-medium/0 pointer-events-none" />
                    </div>
                )}
            </Wrapper>
        </Section>
    );
};

export default Skills;
