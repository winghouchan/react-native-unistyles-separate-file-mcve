import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import KeyboardAvoidingView from '@/components/KeyboardAvoidingView';
import { useState } from 'react';

export default function HomeScreen() {
  const [state, setState] = useState(false);

  return (
    <KeyboardAvoidingView simulated={state}>
      <View style={styles.main}>
        <TextInput placeholder="Focus on me" style={styles.input} />
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>Simulate keyboard inset</Text>
          <Switch onValueChange={setState} value={state} />
        </View>
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
    gap: 16,
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
