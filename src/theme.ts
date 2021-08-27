import { Theme } from "theme-ui";

const theme: Theme = {
  fonts: {
    body: "Jost, sans-serif",
  },
  text: {
    h3: {
      fontFamily: "body",
      fontWeight: "bold",
      fontSize: 4,
      lineHeight: "26px",
      letterSpacing: "-0.25px",
    },
    h4: {
      fontFamily: "body",
      fontWeight: "bold",
      fontSize: 1,
      lineHeight: "20px",
      letterSpacing: "-0.2px",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "darkerGray",
    },
  },
  colors: {
    lighterGray: "#F2F4FE",
    purple: "#AD1FEA",
    darkerGray: "#3A4374",
  },
  space: [0, 2, 4, 8, 16, 32, 64],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSizes: [13, 14, 15, 16, 18, 20, 24],
  radii: ["10px"],
  buttons: {
    primary: {
      fontWeight: "bold",
      fontSize: 0,
      borderRadius: 0,
      bg: "purple",
      color: "lighterGray",
      py: "10.5px",
      px: 4,
      lineHeight: "19px",
      "&:hover": {
        bg: "#C75AF6",
      },
    },
  },
  cards: {
    primary: {
      borderRadius: 0,
      py: 6,
      px: 4,
      bg: "white",
    },
  },
};

export default theme;
