import { Box, Text, Select, Button } from "theme-ui";
import iconArrowDown from "./assets/shared/icon-arrow-down.svg";

export interface SubnavProps {
  onSortBy: () => void;
  onAddFeedback: () => void;
}

const Subnav = ({ onSortBy, onAddFeedback }: SubnavProps) => (
  <Box
    sx={{
      background: "#373F68",
      display: "flex",
      py: 3,
      px: 4,
    }}
  >
    <Box
      sx={{
        px: 3,
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Text sx={{ color: "lighterGray", fontSize: 0 }}>Sort by : </Text>&nbsp;
        <Select
          arrow={<img src={iconArrowDown} />}
          sx={{
            background: "transparent",
            color: "lighterGray",
            fontWeight: "bold",
            fontSize: 0,
            border: 0,
            py: 0,
          }}
          onChange={onSortBy}
          data-testid="sort-by-select"
        >
          <option value="SORT_BY_MOST_UPVOTES">Most Upvotes</option>
          <option value="SORT_BY_LEAST_UPVOTES">Least Upvotes</option>
          <option value="SORT_BY_MOST_COMMENTS">Most Comments</option>
          <option value="SORT_BY_LEAST_COMMENTS">Least Comments</option>
        </Select>
      </Box>
      <Button onClick={onAddFeedback} data-testid="add-feedback-button">
        + Add Feedback
      </Button>
    </Box>
  </Box>
);

export default Subnav;
