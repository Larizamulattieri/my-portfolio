import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  const Button = styled("button")(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.contrastText}`,
    backgroundColor: "#441752",
    borderRadius: "3px",
    padding: "5px 20px", // Corrigi "Padding" para "padding"
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    transition: theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      transform: "scale(1.1)",
    },
  }));

  return <Button>{children}</Button>;
};

export default StyledButton;
