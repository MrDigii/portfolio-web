import { FC } from 'react';
import Section, { BgMode } from '../base/Section';
import Wrapper from '../base/Wrapper';
import Heading from '../typography/Heading';

const Gallery: FC<{
    title?: string;
    background?: BgMode;
}> = ({ title, background }) => {
    return (
        <Section addSeperation background={background}>
            <Wrapper spacing="default" className="space-y-24">
                {title && (
                    <Heading size="heading-1" className="text-center">
                        {title}
                    </Heading>
                )}
            </Wrapper>
        </Section>
    );
};

export default Gallery;
