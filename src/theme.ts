export const customTheme = {
  breakpoints: ["40em", "60em", "75em", "100em"],
  colors: {
    primary: "#009245",

    secondary: "#0088ff",

    secondaryLight: "#9999cc",

    primaryLight: "#7ef19c",

    gray: "#333333",

    light: "#f6edd9",

    lighter: "#f0fdf2",

    bg: "#fff",
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "lora,Verdana, serif",
  },
  fontSizes: [
    "0.7rem",
    "1rem",
    "1.4rem",
    "1.9rem",
    "2.8rem",
    "3.9rem",
    "5.6rem",
  ],
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.7,
    heading: 1.2,
  },
  space: [
    "0.2rem",
    "0.4rem",
    "0.6rem",
    "1rem",
    "1.5rem",
    "2.25rem",
    "3rem",
    "5rem",
    "7.5rem",
  ],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
    card: 10,
  },
  shadows: {
    nav: "0px -4px 10px rgba(0, 0, 0, 0.1)",
    card:
      "0px 1px 2px -1px rgba(0,0,0,0.02), 0px 2px 4px -2px rgba(0,0,0,0.08), 0px 4px 8px -4px rgba(0,0,0,0.10),0px 8px 16px -8px rgba(0,0,0,0.12)",
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle",
    },
    card: {
      p: 2,
      bg: "background",
      boxShadow: "card",
    },
    link: {
      color: "primary",
    },
    nav: {
      fontSize: 1,
      fontWeight: "bold",
      display: "inline-block",
      p: 2,
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus,.active": {
        color: "primary",
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: "bold",
      bg: "primary",
      borderRadius: "default",
      color: "bg",
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px",
    },
    secondary: {
      variant: "buttons.primary",
      color: "background",
      bg: "secondary",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
}

export type customThemeType = keyof typeof customTheme
