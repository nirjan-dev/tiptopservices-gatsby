import React from "react"
import { Button as ReButton } from "rebass"
function Button(props) {
  return (
    <ReButton
      py={[1, 2]}
      px={[1, 2]}
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
