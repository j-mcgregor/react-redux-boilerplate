
const isDarkMode = localStorage.getItem("isDarkMode");

export default {
  palette: {
    dark: {
      fgColor1: '#fafafa',
      fgColor2: '#e0e0e0',
      bgColor1: '#424242',
      bgColor2: '#212121'
    },
    light: {
      bgColor1: '#fafafa',
      bgColor2: '#e0e0e0',
      fgColor1: '#424242',
      fgColor2: '#212121'
    }
  },
  theme: isDarkMode === 'true' ? 'dark' : 'light'
}
