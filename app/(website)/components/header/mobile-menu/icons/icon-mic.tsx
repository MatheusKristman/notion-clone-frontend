interface IIconMic {
    color: string;
}

export const IconMic = ({ color }: IIconMic) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="graphics-symbol"
            viewBox="0 0 20 20"
            className="microphoneFill"
            style={{
                width: "22px",
                height: "22px",
                display: "block",
                fill: "currentColor",
                flexShrink: "0",
            }}
        >
            <path fill={`rgb(${color})`} d="M7.125 5.05a2.875 2.875 0 1 1 5.75 0v3.6a2.875 2.875 0 1 1-5.75 0z" />
            <path
                fill={`rgb(${color})`}
                d="M5.604 10.891a.625.625 0 1 0-1.028.71 6.58 6.58 0 0 0 4.799 2.82v1.929H5.95a.625.625 0 1 0 0 1.25h8.1a.625.625 0 0 0 0-1.25h-3.425v-1.93a6.58 6.58 0 0 0 4.799-2.818.625.625 0 1 0-1.029-.71A5.33 5.33 0 0 1 10 13.2a5.33 5.33 0 0 1-4.396-2.309"
            />
        </svg>
    );
};
