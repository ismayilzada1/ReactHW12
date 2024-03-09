import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function GoalIcon({width,height}) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G clipPath="url(#clip0_2_102)">
                <Path
                    d="M13 16.938V19h5v2H6v-2h5v-2.062A8 8 0 014 9V3h16v6a8 8 0 01-7 7.938zM6 5v4a6 6 0 1012 0V5H6zM1 5h2v4H1V5zm20 0h2v4h-2V5z"
                    fill="#403100"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_2_102">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default GoalIcon;
