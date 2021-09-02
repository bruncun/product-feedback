import { Text, Heading, Box, Button } from "theme-ui";
import iconHamburger from "./assets/shared/mobile/icon-hamburger.svg";
import iconClose from "./assets/shared/mobile/icon-close.svg";

export interface NavbarProps {
  state?: string;
  onToggleSidebar: () => void;
}

const Navbar = ({ onToggleSidebar, state = "SIDEBAR_CLOSED" }: NavbarProps) => (
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
    <Box
      sx={{
        px: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ color: "white", zIndex: 1 }}>
        <Heading
          variant="h4"
          sx={{
            display: "block",
          }}
        >
          Frontend Mentor
        </Heading>
        <Text sx={{ fontWeight: "regular", opacity: "75%", fontSize: 0 }}>
          Feedback Board
        </Text>
      </Box>
      <Button
        sx={{ p: 0, background: "transparent", zIndex: 1 }}
        onClick={onToggleSidebar}
        data-testid="sidebar-toggle"
      >
        {state === "SIDEBAR_CLOSED" ? (
          <img src={iconHamburger} data-testid="hamburger-icon" />
        ) : (
          <img src={iconClose} data-testid="close-icon" />
        )}
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
