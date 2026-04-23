import { isValidArray } from '@/lib/arrays';
import { FC } from 'react';
import Section, { BgMode } from '../base/Section';
import Wrapper from '../base/Wrapper';
import InfiniteScroll, { InfiniteScrollItem } from '../blocks/InfiniteScroll';
import Heading from '../typography/Heading';

export interface Skill {
    title?: string;
    text?: string;
}

export type Tool = InfiniteScrollItem;

const Skills: FC<{
    title?: string;
    items?: Skill[];
    tools?: Tool[];
    background?: BgMode;
}> = ({ title, items, tools, background }) => {
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
                    <InfiniteScroll background={background} items={tools} />
                )}
            </Wrapper>
        </Section>
    );
};

export default Skills;
