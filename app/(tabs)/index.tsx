import { StyleSheet, Text, TextInput, View } from 'react-native';
import KeyboardAvoidingView from '@/components/KeyboardAvoidingView';

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView>
      <View style={styles.main}>
        <TextInput placeholder="Focus on me" style={styles.input} />
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  input: {
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 16,
  },
  footer: {
    backgroundColor: 'lightblue',
  },
});
