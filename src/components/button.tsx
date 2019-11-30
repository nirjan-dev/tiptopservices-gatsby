import React from "react"
import { Button as ReButton } from "rebass"
function Button(props) {
  return (
    <ReButton
      px={[0, 1]}
      py={[1, 2]}
      sx={{
        cursor: "pointer",
        opacity: "0.82",

        transition: "250ms opacity",
        ":hover,:active,:focus": {
          opacity: 1,
        },
        fontSize: 1,
      }}
      {...props}
    >
      {props.children}
    </ReButton>
  )
}

export default Button
