import React from "react";
import { Text, Box, Button } from "theme-ui";
import iconHamburger from "./assets/shared/mobile/icon-hamburger.svg";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar = ({ onToggleSidebar: toggleSidebar }: NavbarProps) => (
  <Box
    as="nav"
    sx={{
      overflow: "hidden",
      position: "relative",
      background:
        "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
      p: 4,
    }}
  >
    <Box sx={{ px: 3, display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ color: "white" }}>
        <Text
          sx={{
            display: "block",
            fontWeight: 3,
            fontSize: 2,
            letterSpacing: "-.1875px",
            lineHeight: "21px",
          }}
        >
          Frontend Mentor
        </Text>
        <Text sx={{ fontWeight: 0, opacity: "75%", fontSize: 0 }}>
          Feedback Board
        </Text>
      </Box>
      <Button
        sx={{ p: 0, background: "transparent", zIndex: 1 }}
        onClick={toggleSidebar}
        data-testid="sidebar-toggle"
      >
        <img src={iconHamburger} />
      </Button>
    </Box>
    <Box
      sx={{
        position: "absolute",
        width: "75.40533333vw",
        height: "101.12px",
        left: "87.22133333vw",
        top: "22.25px",
        background: "#FBB57A",
        filter: "blur(89.7033px)",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        width: "75.40533333vw",
        height: "101.12px",
        left: "-52.504vw",
        top: "-71.6px",
        background: "#7AD8FB",
        mixBlendMode: "normal",
        opacity: 0.77,
        filter: "blur(89.7033px)",
      }}
    />
  </Box>
);

export default Navbar;
