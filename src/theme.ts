import {theme} from "@chakra-ui/core";

export const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
      
        primary: {
            "50": "#C0DFAA",
            "100": "#98D188",
            "200": "#6AC266",
            "300": "#44B34C",
            "400": "#22A345",
            "500": "#009245",
            "600": "#008258",
            "700": "#007165",
            "800": "#005560",
            "900": "#00334E"

        },
        secondary: {
            "50": "#AAFFD8",
            "100": "#88FFE2",
            "200": "#66FFF7",
            "300": "#44F2FF",
            "400": "#22C3FF",
            "500": "#0088ff",
            "600": "#0046DF",
            "700": "#0010BF",
            "800": "#0A009F",
            "900": "#250080"

        },
        secondaryLight: {
            "50": "#DCEEEF",
            "100": "#CEE2E9",
            "200": "#C0D3E2",
            "300": "#B3C2DB",
            "400": "#A6AED4",
            "500": "#9999cc",
            "600": "#8F85B3",
            "700": "#83719A",
            "800": "#745E81",
            "900": "#634B68"

        },
        primaryLight: {
            "50": "#EFFED1",
            "100": "#DDFCBF",
            "200": "#C5FAAE",
            "300": "#A8F89E",
            "400": "#8EF595",
            "500": "#7ef19c",
            "600": "#6DD59E",
            "700": "#5CB89B",
            "800": "#4B9A92",
            "900": "#3B757D"

        },
        grey: {
            "50": "#BBBBBB",
            "100": "#A0A0A0",
            "200": "#858585",
            "300": "#696969",
            "400": "#4E4E4E",
            "500": "#333333",
            "600": "#2D2D2D",
            "700": "#262626",
            "800": "#202020",
            "900": "#1A1A1A"

        },
        light: {
            "50": "#FEF7FA",
            "100": "#FDF2F4",
            "200": "#FCECED",
            "300": "#F9EAE2",
            "400": "#F8EBDE",
            "500": "#f6edd9",
            "600": "#D8D5BD",
            "700": "#B7B9A2",
            "800": "#949B87",
            "900": "#737C6C"

        },
        lighter: {
            "50": "#FFFFFC",
            "100": "#FEFFFA",
            "200": "#FCFFF8",
            "300": "#F9FEF6",
            "400": "#F2FEF2",
            "500": "#f0fdf2",
            "600": "#D2DED6",
            "700": "#B4BEBA",
            "800": "#969F9D",
            "900": "#787F7F"

        },
        
    },
    fonts: {
        body: "Montserrat,Tahoma, Verdana, Segoe, sans-serif",
        heading: "Nunito,Verdana, Geneva, sans-serif"
    },
    fontSizes: {
        xs: "0.7rem",
        sm: "1rem",
        md: "1.4rem",
        lg: "1.9rem",
        xl: "2.8rem",
        "2xl": "3.9rem",
        "3xl": "5.6rem",
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700
    },
    lineHeights: {
        normal: "normal",
        base: "1.5",
        shorter: "1.1",
        short: "1.2",
        tall: "1.6",
        taller: "1.8"
    }
}

