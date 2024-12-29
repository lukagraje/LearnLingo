import { Badge, styled } from "@mui/material";


export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-dot": {
    backgroundColor: "#44b700",
    width: 12,
        height: 12,
        position: "absolute",
        top: 8,
        right: 8,
    borderRadius: "50%",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    animation: "pulse 2.5s infinite ease-in-out",
  },


  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
      opacity: 0.8,
    },
    "50%": {
      transform: "scale(1.1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 0.8,
    },
  },
}));

