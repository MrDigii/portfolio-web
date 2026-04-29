import { FC } from 'react';

const Menu: FC<{
    width?: number;
    height?: number;
    className?: string;
}> = ({ width = 24, height = 24, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="0 0 50 50"
        className={className}
    >
        <path
            fill="currentColor"
            d="M 2 9 L 2 11 L 48 11 L 48 9 L 2 9 z M 2 24 L 2 26 L 48 26 L 48 24 L 2 24 z M 2 39 L 2 41 L 48 41 L 48 39 L 2 39 z"
        ></path>
    </svg>
);

export default Menu;
