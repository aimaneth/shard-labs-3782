import React, { useId } from "react";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
    width: number;
    height: number;
    x: string;
    y: string;
    squares?: number[][];
}

export function GridPattern({
    width,
    height,
    x,
    y,
    squares,
    ...props
}: GridPatternProps) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([sqX, sqY], index) => (
                        <rect
                            strokeWidth="0"
                            key={index}
                            width={width + 1}
                            height={height + 1}
                            x={sqX * width}
                            y={sqY * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}

export function genRandomPattern(length?: number): number[][] {
    length = length ?? 5;
    return Array.from({ length }, () => [
        Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
        Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
    ]);
}
