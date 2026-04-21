import { FC } from 'react';
import Section, { BgMode } from '../base/Section';
import Wrapper from '../base/Wrapper';
import { cn } from '@/lib/utils';

const TwoUp: FC<{ text?: string; aside?: string; background?: BgMode }> = ({
    text,
    aside,
    background,
}) => {
    return (
        <Section addSeperation background={background}>
            <Wrapper spacing="big" className="flex justify-center pt-7">
                <div
                    className={cn(
                        'relative flex flex-col gap-8 md:flex-row md:gap-13',
                        'before:absolute before:-top-4 before:-left-5 before:h-7 before:w-7 before:bg-[url(/images/focus-decorator.svg)]',
                        'md:before:-top-6.5 md:before:-left-7 md:before:h-9 md:before:w-9'
                    )}
                >
                    {text && (
                        <h2
                            className="font-sans font-medium text-3xl md:text-4xl max-w-150"
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    )}
                    {aside && (
                        <aside
                            className="font-sans font-normal text-xl md:max-w-75 pt-1"
                            dangerouslySetInnerHTML={{ __html: aside }}
                        />
                    )}
                </div>
            </Wrapper>
        </Section>
    );
};

export default TwoUp;
