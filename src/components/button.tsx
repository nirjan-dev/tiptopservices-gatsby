import React from "react"
import { Button as ReButton } from "rebass"
function Button(props) {
  return (
    <ReButton
      sx={{
        cursor: "pointer",
        opacity: "0.82",
        transition: "250ms opacity",
        ":hover,:active,:focus": {
          opacity: 1,
        },
      }}
      {...props}
    >
      {props.children}
    </ReButton>
  )
}

export default Button
