import { StyleSheet } from 'react-native-unistyles';

export default StyleSheet.create((theme, runtime) => ({
  view: {
    flex: 1,
    paddingTop: runtime.insets.top + 16,
    paddingLeft: runtime.insets.left + 16,
    paddingRight: runtime.insets.right + 16,
    paddingBottom: runtime.insets.ime + runtime.insets.bottom + 64,
  },
}));
