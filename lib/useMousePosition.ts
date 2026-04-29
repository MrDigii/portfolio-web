import { useEffect, useRef, useState } from 'react';
import useLazyInput from './useLazyInput';

interface Position {
    x: number;
    y: number;
}

export const useMousePosition = ({
    axis = 'both',
    delay = 0,
    onChange,
}: {
    axis: 'x' | 'y' | 'both';
    delay?: number;
    onChange?: (dimensions: { x?: number | null; y?: number | null }) => void;
}) => {
    const lastMousePosition = useRef<Position | null>({ x: 0, y: 0 });
    const [x, setX] = useState<number | null>(null);
    const [y, setY] = useState<number | null>(null);

    const handlePositionUpdate = ({ x, y }: Position) => {
        switch (axis) {
            case 'x': {
                if (
                    !lastMousePosition.current ||
                    lastMousePosition.current.x !== x
                ) {
                    lastMousePosition.current = { x, y };
                    setX(x);
                    onChange?.({ x });
                }
                break;
            }

            case 'y': {
                if (
                    !lastMousePosition.current ||
                    lastMousePosition.current.y !== y
                ) {
                    lastMousePosition.current = { x, y };
                    setY(y);
                    onChange?.({ y });
                }
                break;
            }

            case 'both': {
                if (
                    !lastMousePosition.current ||
                    lastMousePosition.current.x !== x ||
                    lastMousePosition.current.y !== y
                ) {
                    lastMousePosition.current = { x, y };
                    setX(x);
                    setY(y);
                    onChange?.({ x, y });
                }
                break;
            }
        }
    };

    const { update: setPosition } = useLazyInput<Position>(
        handlePositionUpdate,
        { x: 0, y: 0 },
        delay
    );

    useEffect(() => {
        const handleMouseMove = (ev: MouseEvent) => {
            setPosition({
                x: ev?.clientX,
                y: ev?.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [axis, onChange, setPosition]);

    return { x, y };
};
