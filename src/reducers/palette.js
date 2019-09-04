
const isDarkMode = localStorage.getItem("isDarkMode");

export default {
  palette: {
    light: {
      bgColor1: '#fafafa',
      bgColor2: '#f5f5f5',
      bgColor3: '#eeeeee',
      bgColor4: '#e0e0e0',
      bgColor5: '#bdbdbd',
      fgColor1: '#9e9e9e',
      fgColor2: '#757575',
      fgColor3: '#616161',
      fgColor4: '#424242',
      fgColor5: '#212121',
      active: '#337ab7'
    },
    dark: {

    }
  },
  theme: isDarkMode === 'true' ? 'dark' : 'light'
}
