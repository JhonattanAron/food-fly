import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Cloud from "@mui/icons-material/Cloud";
import { SvgIcon } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
function ConfigIcon() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
    </SvgIcon>
  );
}

export default function IconMinMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>Perfil</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText>Acerca De</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ConfigIcon />
          </ListItemIcon>
          <ListItemText>Reportar Un Problema</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Iniciar Sesión</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
