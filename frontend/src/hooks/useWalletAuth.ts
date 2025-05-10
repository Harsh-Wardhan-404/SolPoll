import { useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';

interface User {
  id: string;
  walletAddress: string;
  username: string;
  // ... other user fields
}

const API_URL = process.env.BACKEND_URL || 'http://localhost:3000';

export const useWalletAuth = () => {
  const { publicKey, connected } = useWallet();
  console.log(publicKey);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async (username: string) => {
    if (!publicKey) return;

    setIsLoading(true);
    setError(null);

    try {
      // 1. Check if user exists
      const response = await fetch(`${API_URL}/users/${publicKey.toString()}`);
      const existingUser = await response.json();

      if (existingUser) {
        setUser(existingUser);
        return;
      }

      // 2. Create new user
      const createResponse = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress: publicKey.toString(),
          username
        })
      });

      if (!createResponse.ok) {
        throw new Error('Failed to create user');
      }

      const newUser = await createResponse.json();
      setUser(newUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    error,
    createUser,
    isConnected: connected
  };
};