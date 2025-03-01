import { View, ViewProps } from 'react-native';
import styles from './styles';

/**
 * Uncommenting below and commenting out `import styles` above demonstrates a
 * working example.
 */

// import { StyleSheet } from 'react-native-unistyles';

// const styles = StyleSheet.create((theme, runtime) => ({
//   view: {
//     flex: 1,
//     paddingTop: runtime.insets.top + 16,
//     paddingLeft: runtime.insets.left + 16,
//     paddingRight: runtime.insets.right + 16,
//     paddingBottom: runtime.insets.ime + runtime.insets.bottom + 64,
//   },
// }));

export default function KeyboardAvoidingView({ style, ...props }: ViewProps) {
  return <View style={[styles.view, style]} {...props} />;
}
