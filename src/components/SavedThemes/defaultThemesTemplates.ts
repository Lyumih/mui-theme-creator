import { NewSavedTheme } from "src/state/types"

const defaultThemeList: Omit<NewSavedTheme, "lastUpdated">[] = [
  {
    name: "BCS-EF",
    themeOptions: {
      palette: {
        type: "light",
        primary: {
          main: "#0859FC", // the default primary color
          light: "#6C85FF",
          dark: "#0031C8",
        },
        secondary: {
          main: "#37474F", // the default secondary color
          light: "#62727B", 
          dark: "#102027"
        },
        error: {
          main: '#EF5350',
          light: '#ff867c',
          dark: '#b61827',
        },
        success: {
          main: '#66BB6A',
          light: '#98ee99',
          dark: '#338a3e',
        },
        warning: {
          main: '##FFCA28',
          light: '#FFF350',
          dark: '#C79100',
        },
        text: {
          primary: '#212121',
          secondary: '#9E9E9E',
          disabled: '#bdbdbd',
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
