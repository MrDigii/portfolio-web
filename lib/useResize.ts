import { useEffect, useRef, useState } from 'react';
import useLazyInput from './useLazyInput';

interface Dimensions {
    width: number;
    height: number;
}

export const useResize = ({
    ref,
    axis = 'both',
    delay = 0,
    onChange,
}: {
    ref: React.RefObject<HTMLElement | null>;
    axis: 'width' | 'height' | 'both';
    delay?: number;
    onChange?: (dimensions: {
        width?: number | null;
        height?: number | null;
    }) => void;
}) => {
    const lastDimensions = useRef<Dimensions | null>(null);
    const [width, setWidth] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);

    const handleDimensionsUpdate = ({ width, height }: Dimensions) => {
        switch (axis) {
            case 'width': {
                if (
                    !lastDimensions.current ||
                    lastDimensions.current.width !== width
                ) {
                    lastDimensions.current = { width, height };
                    setWidth(width);
                    onChange?.({ width });
                }
                break;
            }

            case 'height': {
                if (
                    !lastDimensions.current ||
                    lastDimensions.current.height !== height
                ) {
                    lastDimensions.current = { width, height };
                    setHeight(height);
                    onChange?.({ height });
                }
                break;
            }

            case 'both': {
                if (
                    !lastDimensions.current ||
                    lastDimensions.current.width !== width ||
                    lastDimensions.current.height !== height
                ) {
                    lastDimensions.current = { width, height };
                    setWidth(width);
                    setHeight(height);
                    onChange?.({ width, height });
                }
                break;
            }
        }
    };

    const { update: setDimensions } = useLazyInput<Dimensions>(
        handleDimensionsUpdate,
        { width: 0, height: 0 },
        delay
    );

    useEffect(() => {
        if (!ref.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            setDimensions({
                width: entries[0]?.contentRect.width,
                height: entries[0]?.contentRect.height,
            });
        });

        resizeObserver.observe(ref.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [axis, onChange, ref, setDimensions]);

    return { width, height };
};
