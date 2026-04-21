import { FC } from 'react';
import Section, { BgMode } from '../base/Section';
import Wrapper from '../base/Wrapper';
import { cn } from '@/lib/utils';
import Heading from '../typography/Heading';
import { isValidArray } from '@/lib/arrays';

export interface Skill {
    title?: string;
    text?: string;
}

const Skills: FC<{ title?: string; items?: Skill[]; background?: BgMode }> = ({
    title,
    items,
    background,
}) => {
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
                        aria-label="Skill list"
                        className="flex flex-wrap flex-col justify-center md:flex-row gap-11"
                    >
                        {items.map((item, i) => (
                            <li
                                key={i}
                                className="space-y-8 flex-[0_0_48%] xl:flex-[0_0_30%] xl:min-w-92.5"
                            >
                                {item.title && (
                                    <Heading size="heading-3">
                                        {item.title}
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
            </Wrapper>
        </Section>
    );
};

export default Skills;
