import { NewSavedTheme } from "src/state/types"

const defaultThemeList: Omit<NewSavedTheme, "lastUpdated">[] = [
  {
    name: "BCS-EF",
    themeOptions: {
      palette: {
        type: "light",
        primary: {
          main: "#0859FC", // the default primary color
        },
        secondary: {
          main: "#37474F", // the default secondary color
        },
        error: {
          main: '#EF5350',
          light: '#ff867c',
          dark: '#b61827',
        }
      },
      typography: { 
        fontFamily: 'Inter',
      }
    },
    fonts: ["Inter"],
  },
  {
    name: "BCS-PFP",
    themeOptions: {
      palette: {
        type: "light",
        primary: {
          main: "#0859FC", // the default primary color
        },
        secondary: {
          main: "#37474F", // the default secondary color
        },
        error: {
          main: '#EF5350',
          light: '#ff867c',
          dark: '#b61827',
        }
      },
      typography: {
        fontFamily: 'Inter',
      }
    },
    fonts: ["Inter"],
  },
]

export default defaultThemeList
