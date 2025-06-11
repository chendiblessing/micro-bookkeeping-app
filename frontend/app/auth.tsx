import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet } from 'react-native';

export default function AuthScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Sign Up / Sign In</ThemedText>
      <ThemedText style={styles.text}>
        Authentication flow coming soon.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: '#888',
  },
}); 