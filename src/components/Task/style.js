import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  button: {
    color: "green",
    border: "1px solid green",
    borderRadius: "12px",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "green",
    cursor: "pointer",
  },
  taskName: {
    marginBottom: "5px",
    borderBottom: "2px solid white",
    fontSize: "20px",
    transition: "all 0.7s ease-in-out",
    "&:hover": {
      fontWeight: "bold",
      borderBottom: "2px solid green",
    },
  },
}));
