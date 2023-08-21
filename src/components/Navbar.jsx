import logo from "../assets/images/logo.svg";
import "./Navbar.css";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import MoonIcon from "../assets/images/icon-moon.svg"

// Adding the Ant Switch from MUI
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#757575" : "#A445ED",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "757575" : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg Navbar">
      <div className="container-fluid p-0">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="right d-flex ">
          <select name="language" id="font" className="font">
            <option value="javascript">Sans Serif </option>
            <option value="python">Serif</option>
            <option value="python">Mono</option>
          </select>

          <span className="vertical-line"></span>
          <div className="theme-toggle d-flex align-items-center">
           
            <AntSwitch
              defaultChecked
              inputProps={{
                "aria-label": "theme toggle",
     
              }}

              sx={
                {
                  "margin": "0 1rem",
                }
              }
            />
            <Typography><img src={MoonIcon} alt="moon-icon" className="moonIcon"/></Typography>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
