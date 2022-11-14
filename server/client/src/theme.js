import { createTheme } from "@mui/material";

const font = "'Poppins', sans-serif";
const theme = createTheme({
    palette: {
        primary: {
            main: "#272729",
            light: "#3a3a3d"
        },
        secondary: {
            main: "#f5f0ec",
            light: "#fce46a",
        },
        text: {
            main: "#ffffff",
            light: "#8e9e9d"
        },
        otherColor: {
            main: "#999"
        }
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#232f3e",
            },
        },
    },
    typography: {
        fontFamily: font,
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 500 },
        h4: { fontWeight: 400 },
        h5: { fontWeight: 300 },
        h6: { fontWeight: 300 }
    },

});
export default theme;