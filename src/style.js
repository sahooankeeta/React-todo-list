import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  h3: {
    textAlign: "center",
    textTransform: "capitalize",
    color: "#41a779",
  },
  container: {
    height: "85vh",
    width: "500px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    backgroundImage: "linear-gradient(210deg, #9adbbe, #4fc08d)",
    height: "95vh",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 15px",
  },
  tasks: {
    flex: "1",
    padding: "10px",
    overflowY: "scroll",
  },
}));
