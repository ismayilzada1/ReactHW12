import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function EventIcon({width,height}) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G clipPath="url(#clip0_2_98)">
                <Path
                    d="M17 3h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z"
                    fill="#4A3780"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_2_98">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default EventIcon;
