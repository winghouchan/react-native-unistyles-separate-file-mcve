import { View, ViewProps } from 'react-native';
import { UnistylesVariants } from 'react-native-unistyles';
import styles from './styles';

/**
 * Uncommenting below and commenting out import from `react-native-unistyles`
 * and `./styles`.
 */

// import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';

// const styles = StyleSheet.create((theme, runtime) => ({
//   view: {
//     flex: 1,
//     paddingTop: runtime.insets.top + 16,
//     paddingLeft: runtime.insets.left + 16,
//     paddingRight: runtime.insets.right + 16,
//     paddingBottom: runtime.insets.ime + runtime.insets.bottom + 64,

//     variants: {
//       simulated: {
//         true: {
//           paddingBottom: 250 + runtime.insets.bottom + 64,
//         },
//       },
//     },
//   },
// }));

export default function KeyboardAvoidingView({
  simulated,
  style,
  ...props
}: ViewProps & UnistylesVariants<typeof styles>) {
  styles.useVariants({ simulated });

  return <View style={[styles.view, style]} {...props} />;
}
