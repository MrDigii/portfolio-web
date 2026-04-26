import { FC } from 'react';
import Section, { BgMode } from '../base/Section';
import Wrapper from '../base/Wrapper';
import { cn } from '@/lib/utils';

const Contact: FC<{
    id?: string;
    text?: string;
    aside?: {
        text?: string;
        actions?: React.ReactNode;
    };

    isInverted?: boolean;
    background?: BgMode;
    className?: string;
}> = ({ id, text, aside, isInverted, background, className }) => {
    return (
        <Section id={id} background={background} className={className}>
            <Wrapper className="flex justify-center">
                <div
                    className={cn(
                        'relative flex flex-col gap-8 md:flex-row md:gap-16'
                    )}
                >
                    {text && (
                        <p
                            className={cn(
                                'flex-2/3 font-sans font-bold text-4xl md:text-5xl text-foreground',
                                isInverted && 'text-white'
                            )}
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    )}
                    {aside && (
                        <aside className="flex flex-col gap-6 font-sans font-normal text-xl md:max-w-120 pt-1">
                            {aside.text && (
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: aside.text,
                                    }}
                                />
                            )}
                            {aside.actions && (
                                <div className="">{aside.actions}</div>
                            )}
                        </aside>
                    )}
                </div>
            </Wrapper>
        </Section>
    );
};

export default Contact;
