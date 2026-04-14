interface IIconCircles {
    color: string;
}

export const IconCircles = ({ color }: IIconCircles) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="graphics-symbol"
            viewBox="0 0 20 20"
            className="target"
            style={{
                width: "22px",
                height: "22px",
                display: "block",
                fill: "currentColor",
                flexShrink: "0",
            }}
        >
            <path fill={`rgb(${color})`} d="M9.938 7.313a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25" />
            <path
                fill={`rgb(${color})`}
                d="M10 4.875a5.125 5.125 0 1 0 0 10.25 5.125 5.125 0 0 0 0-10.25M6.125 10a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
            />
            <path
                fill={`rgb(${color})`}
                d="M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
            />
        </svg>
    );
};
