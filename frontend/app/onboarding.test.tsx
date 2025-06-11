import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import OnboardingScreen from './onboarding';

jest.mock('expo-router', () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

describe('OnboardingScreen', () => {
  it('renders logo, intro text, and both buttons', () => {
    const { getByText } = render(<OnboardingScreen />);
    expect(getByText('Welcome to Micro-Bookkeeping')).toBeTruthy();
    expect(getByText('Track your sales, expenses, and profits easily. Get started below.')).toBeTruthy();
    expect(getByText('Continue as Guest')).toBeTruthy();
    expect(getByText('Sign Up / Sign In')).toBeTruthy();
  });

  it('navigates to main app when "Continue as Guest" is pressed', () => {
    const replace = jest.fn();
    jest.spyOn(require('expo-router'), 'useRouter').mockReturnValue({ replace });
    const { getByText } = render(<OnboardingScreen />);
    fireEvent.press(getByText('Continue as Guest'));
    expect(replace).toHaveBeenCalledWith('/(tabs)');
  });

  it('navigates to auth when "Sign Up / Sign In" is pressed', () => {
    const replace = jest.fn();
    jest.spyOn(require('expo-router'), 'useRouter').mockReturnValue({ replace });
    const { getByText } = render(<OnboardingScreen />);
    fireEvent.press(getByText('Sign Up / Sign In'));
    expect(replace).toHaveBeenCalledWith('/auth');
  });
}); 