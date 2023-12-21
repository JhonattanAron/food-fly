import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import MenuContFood from "../menuPage/MenuContFood";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function CombinedComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="flex align-middle justify-center">
        <div>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              height: "auto",
            }}
          >
            <div className="absolute  lg:left-0 lg:relative z-20">
              <Tabs
                className="h-auto xl:w-72 w-screen p-3 mt-4 xl:m-3 bg-black rounded-xl"
                orientation={
                  window.innerWidth >= 1280 ? "vertical" : "horizontal"
                }
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Menu-Tab"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab
                  label="Menu"
                  {...a11yProps(0)}
                  style={{ color: "white", fontSize: "3rem" }}
                />
                <Tab
                  label="Entradas"
                  icon={<DinnerDiningIcon className="text-white" />}
                  {...a11yProps(1)}
                  style={{ color: "white" }}
                />
                <Tab
                  label="Comidas Rapidas"
                  icon={<FastfoodIcon className="text-white" />}
                  {...a11yProps(2)}
                  style={{ color: "white" }}
                />
                <Tab
                  label="Platos Fuertes"
                  icon={<TakeoutDiningIcon className="text-white" />}
                  {...a11yProps(3)}
                  style={{ color: "white" }}
                />
                <Tab
                  label="Menestras"
                  icon={<BrunchDiningIcon className="text-white" />}
                  {...a11yProps(4)}
                  style={{ color: "white" }}
                />
                <Tab
                  label="Platos a la Carta"
                  icon={<BrunchDiningIcon className="text-white" />}
                  {...a11yProps(5)}
                  style={{ color: "white" }}
                />
              </Tabs>
              <div className="mover-circulo"></div>
            </div>
            <div className="pt-[7rem] xl:pt-0">
              <TabPanel value={value} index={0}>
                <MenuContFood />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <MenuContFood />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <MenuContFood />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <MenuContFood />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <MenuContFood />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <MenuContFood />
              </TabPanel>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
