import { Theme } from "theme-ui";

const theme: Theme = {
  text: {
    default: {
      fontFamily: "Jost, sans-serif",
    },
  },
  colors: {
    offwhite: "#F2F4FE",
    purple: "#AD1FEA",
  },
  space: [0, 2, 4, 8, 16],
  fontWeights: [400, 500, 600, 700],
  fontSizes: [13, 14, 15, 16, 18, 20, 24],
  radii: ["10px"],
  buttons: {
    primary: {
      fontWeight: 3,
      fontSize: 0,
      borderRadius: 0,
      bg: "purple",
      color: "offwhite",
      py: "10.5px",
      px: 4,
      lineHeight: "19px",
      "&:hover": {
        bg: "#C75AF6",
      },
    },
  },
};

export default theme;
