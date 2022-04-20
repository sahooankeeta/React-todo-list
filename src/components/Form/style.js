import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  form: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  h2: {
    color: "#41a779",
    textAlign: "center",
  },
  input: {
    padding: "7px 9px",
    border: "1px solid #eae3e3",
    fontSize: "15px",
    marginRight: "10px",
    borderRadius: "10px",
    outline: "none",
  },
  button: {
    border: "1px solid #4fc08d",
    color: " #4fc08d",
    padding: "7px 9px",
    textTransform: "uppercase",
    backgroundColor: "white",
    fontWeight: "700",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "250ms ease-out",
    "&:hover": {
      color: "white",
      backgroundColor: "#4fc08d",
    },
  },
}));
