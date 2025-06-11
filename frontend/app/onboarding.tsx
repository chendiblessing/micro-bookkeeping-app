import * as React from 'react';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/icon.png')}
        style={styles.logo}
        contentFit="contain"
      />
      <ThemedText type="title" style={styles.title}>
        Welcome to Micro-Bookkeeping
      </ThemedText>
      <ThemedText type="default" style={styles.intro}>
        Track your sales, expenses, and profits easily. Get started below.
      </ThemedText>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.guestButton]}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>Continue as Guest</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.authButton]}
          onPress={() => router.replace('/auth')}
        >
          <Text style={styles.buttonText}>Sign Up / Sign In</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'transparent',
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 32,
  },
  title: {
    textAlign: 'center',
    marginBottom: 12,
  },
  intro: {
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 16,
    color: '#888',
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  guestButton: {
    backgroundColor: '#A1CEDC',
  },
  authButton: {
    backgroundColor: '#1D3D47',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 