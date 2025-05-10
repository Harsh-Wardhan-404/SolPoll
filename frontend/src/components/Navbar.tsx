import React, { useState, useEffect } from 'react';
import { Wallet, Menu, X, ChevronDown, LogOut } from 'lucide-react';
import AppWalletProvider from './AppWalletProvider';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import LoginModal from './Login';
import { useWallet } from '@solana/wallet-adapter-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { publicKey } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (publicKey) {
      // Check if user exists
      const checkUser = async () => {
        try {
          const response = await fetch(`http://localhost:3000/users/${publicKey.toString()}`);
          if (response.ok) {
            setIsLoggedIn(true);
            setShowLoginModal(false);
          } else {
            setShowLoginModal(true);
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error('Error checking user:', error);
        }
      };
      checkUser();
    } else {
      setIsLoggedIn(false);
    }
  }, [publicKey]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // The wallet disconnect will be handled by the WalletDisconnectButton
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-md">
                <Wallet size={24} />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                SolPoll
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Explore</NavLink>
            <NavLink href="#">Create</NavLink>
            <NavLink href="#">About</NavLink>

            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <WalletDisconnectButton className="!bg-red-500 !text-white hover:!bg-red-600 transition-colors duration-300 rounded-lg px-4 py-2 font-semibold shadow-md" />
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-2"
              >
                <Wallet size={18} />
                Login
              </button>
            )}
            <LoginModal
              isOpen={showLoginModal}
              onClose={() => setShowLoginModal(false)}
            />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md">
            <MobileNavLink href="#">Home</MobileNavLink>
            <MobileNavLink href="#">Explore</MobileNavLink>
            <MobileNavLink href="#">Create</MobileNavLink>
            <MobileNavLink href="#">About</MobileNavLink>

            {isLoggedIn ? (
              <WalletDisconnectButton className="w-full mt-4 !bg-red-500 !text-white hover:!bg-red-600 transition-colors duration-300 rounded-lg px-4 py-2 font-semibold shadow-md" />
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Wallet size={18} />
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
  >
    {children}
  </a>
);

export default Navbar;