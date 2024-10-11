import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    router.replace('/login');
    return null;
  }

  return children;
};

export default ProtectedRoute;
