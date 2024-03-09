import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function TaskIcon({width,height}) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G clipPath="url(#clip0_2_100)">
                <Path
                    d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
                    fill="#194A66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_2_100">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default TaskIcon;
