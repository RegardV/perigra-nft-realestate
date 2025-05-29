"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Wallet, 
  QrCode, 
  Smartphone, 
  CheckCircle, 
  AlertCircle,
  RefreshCw,
  Copy,
  ExternalLink,
  Shield,
  Zap
} from 'lucide-react'
import { toast } from 'sonner'

interface Web3WalletSignInProps {
  onSuccess?: (walletAddress: string) => void
  onError?: (error: string) => void
}

const Web3WalletSignIn = ({ onSuccess, onError }: Web3WalletSignInProps) => {
  const [connectionState, setConnectionState] = useState<'idle' | 'connecting' | 'connected' | 'error'>('idle')
  const [qrCodeData, setQrCodeData] = useState<string>('')
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [timeRemaining, setTimeRemaining] = useState<number>(300) // 5 minutes
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)

  // Generate QR code data (in a real implementation, this would come from a Web3 provider)
  const generateQRCode = () => {
    const connectionId = Math.random().toString(36).substring(2, 15)
    const qrData = `perigra://wallet-connect?id=${connectionId}&callback=${encodeURIComponent(window.location.origin)}`
    setQrCodeData(qrData)
    setConnectionState('connecting')
    setTimeRemaining(300)
  }

  // Simulate wallet connection process
  const simulateWalletConnection = () => {
    setTimeout(() => {
      const mockAddress = '0x742d35Cc6634C0532925a3b8D4C9db96590b5b8e'
      setWalletAddress(mockAddress)
      setConnectionState('connected')
      onSuccess?.(mockAddress)
      toast.success('Wallet connected successfully!')
    }, 3000)
  }

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (connectionState === 'connecting' && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setConnectionState('error')
            onError?.('Connection timeout')
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [connectionState, timeRemaining, onError])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard!')
  }

  const supportedWallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect using MetaMask wallet'
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: '🔗',
      description: 'Scan QR code with any compatible wallet'
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: '🔵',
      description: 'Connect using Coinbase Wallet'
    },
    {
      id: 'trust',
      name: 'Trust Wallet',
      icon: '🛡️',
      description: 'Connect using Trust Wallet'
    }
  ]

  const resetConnection = () => {
    setConnectionState('idle')
    setQrCodeData('')
    setWalletAddress('')
    setSelectedWallet(null)
    setTimeRemaining(300)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-accent-brand/10 rounded-lg flex items-center justify-center">
            <Wallet className="h-6 w-6 text-accent-brand" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Web3 Wallet Sign In</h2>
        </div>
        <p className="text-muted-foreground">
          Connect your Web3 wallet to access your Perigra account securely
        </p>
      </motion.div>

      {/* Connection State Display */}
      <AnimatePresence mode="wait">
        {connectionState === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-4"
          >
            {/* Wallet Selection */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Wallet className="h-5 w-5 text-accent-brand" />
                  <span>Choose Your Wallet</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {supportedWallets.map((wallet) => (
                  <motion.div
                    key={wallet.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={selectedWallet === wallet.id ? "accent" : "outline"}
                      className="w-full justify-start space-x-3 h-14"
                      onClick={() => {
                        setSelectedWallet(wallet.id)
                        if (wallet.id === 'walletconnect') {
                          generateQRCode()
                          simulateWalletConnection()
                        } else {
                          // Simulate direct wallet connection
                          setConnectionState('connecting')
                          simulateWalletConnection()
                        }
                      }}
                    >
                      <span className="text-2xl">{wallet.icon}</span>
                      <div className="text-left">
                        <div className="font-medium">{wallet.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {wallet.description}
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-accent-brand/5 border-accent-brand/20">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Shield className="h-6 w-6 text-accent-brand" />
                    <div className="text-sm font-medium">Secure</div>
                    <div className="text-xs text-muted-foreground">
                      Your keys, your control
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Zap className="h-6 w-6 text-accent-brand" />
                    <div className="text-sm font-medium">Fast</div>
                    <div className="text-xs text-muted-foreground">
                      Instant connection
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Smartphone className="h-6 w-6 text-accent-brand" />
                    <div className="text-sm font-medium">Mobile</div>
                    <div className="text-xs text-muted-foreground">
                      Scan with your phone
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {connectionState === 'connecting' && (
          <motion.div
            key="connecting"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-4"
          >
            {/* QR Code Display */}
            {selectedWallet === 'walletconnect' && qrCodeData && (
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <QrCode className="h-5 w-5 text-accent-brand" />
                    <span>Scan QR Code</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Open your wallet app and scan this QR code
                  </p>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  {/* QR Code Placeholder */}
                  <div className="w-48 h-48 bg-white rounded-lg border-2 border-accent-brand/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-2 bg-gradient-to-br from-accent-brand/10 to-accent-brand-dark/10 rounded">
                      <div className="w-full h-full flex items-center justify-center">
                        <QrCode className="h-24 w-24 text-accent-brand/30" />
                      </div>
                    </div>
                    {/* Simulated QR pattern */}
                    <div className="absolute inset-4 grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-sm ${
                            Math.random() > 0.5 ? 'bg-slate-dark' : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="text-center">
                    <div className="text-2xl font-mono font-bold text-accent-brand">
                      {formatTime(timeRemaining)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Time remaining
                    </div>
                  </div>

                  {/* Copy Link */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(qrCodeData)}
                    className="flex items-center space-x-2"
                  >
                    <Copy className="h-4 w-4" />
                    <span>Copy Connection Link</span>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Connection Status */}
            <Card className="bg-blue-500/10 border-blue-500/20">
              <CardContent className="p-4 flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCw className="h-5 w-5 text-blue-500" />
                </motion.div>
                <div>
                  <div className="font-medium text-foreground">
                    {selectedWallet === 'walletconnect' 
                      ? 'Waiting for wallet connection...' 
                      : 'Connecting to wallet...'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {selectedWallet === 'walletconnect'
                      ? 'Scan the QR code with your mobile wallet'
                      : 'Please approve the connection in your wallet'}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cancel Button */}
            <Button
              variant="outline"
              onClick={resetConnection}
              className="w-full"
            >
              Cancel Connection
            </Button>
          </motion.div>
        )}

        {connectionState === 'connected' && (
          <motion.div
            key="connected"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-4"
          >
            {/* Success State */}
            <Card className="bg-green-500/10 border-green-500/20">
              <CardContent className="p-6 text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Wallet Connected Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Your Web3 wallet has been connected to your Perigra account
                  </p>
                  <div className="bg-muted/50 rounded-lg p-3 flex items-center justify-between">
                    <div className="text-sm font-mono text-foreground">
                      {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(walletAddress)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  variant="accent"
                  className="w-full"
                  onClick={() => {
                    // Redirect to dashboard or continue with authentication
                    window.location.href = '/dashboard'
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Continue to Dashboard
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {connectionState === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-4"
          >
            {/* Error State */}
            <Card className="bg-red-500/10 border-red-500/20">
              <CardContent className="p-6 text-center space-y-4">
                <AlertCircle className="h-16 w-16 text-red-500 mx-auto" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Connection Failed
                  </h3>
                  <p className="text-muted-foreground">
                    Unable to connect to your wallet. Please try again.
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={resetConnection}
                    className="flex-1"
                  >
                    Try Again
                  </Button>
                  <Button
                    variant="accent"
                    onClick={() => window.location.href = '/contact'}
                    className="flex-1"
                  >
                    Get Help
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Help Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-xs text-muted-foreground"
      >
        <p>
          Don't have a Web3 wallet?{' '}
          <a
            href="https://metamask.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-brand hover:text-accent-brand-dark underline"
          >
            Get MetaMask
          </a>{' '}
          or{' '}
          <a
            href="https://trustwallet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-brand hover:text-accent-brand-dark underline"
          >
            Trust Wallet
          </a>
        </p>
      </motion.div>
    </div>
  )
}

export default Web3WalletSignIn