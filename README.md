# InnChain - Hotel Booking DApp 🏨⛓️

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Ethereum](https://img.shields.io/badge/Ethereum-Smart_Contract-3C3C3D?style=for-the-badge&logo=ethereum)](https://ethereum.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A decentralized hotel booking platform with USDC escrow payments on Lisk Sepolia testnet. Book hotels trustlessly with blockchain-powered payment protection.

---

## 🌟 Overview

InnChain revolutionizes hotel bookings by eliminating trust issues between guests and hotels. Using smart contract escrow, payments are locked on-chain until check-in is verified. No more payment disputes, instant settlements, and full transparency for all parties.

**Live Demo**: [innchain.xyz](https://innchain.xyz) *(replace with actual URL)*

---

## ✨ Key Features

### For Guests
- 🔍 **Browse Hotels** - Explore on-chain hotels with real-time availability
- 💳 **USDC Payments** - Pay with stablecoins for zero FX risk
- 🔒 **Escrow Protection** - Funds locked until check-in verification
- 🔄 **Pre-Check-in Cancellation** - Full refund if you cancel before check-in
- 📱 **Booking Management** - Track your reservations on-chain
- 💰 **Deposit Handling** - Automatic refund or partial charge for damages

### For Hotels
- ✅ **Check-in Confirmation** - Release room payments after guest arrival
- 🏨 **Multi-Room Classes** - Offer different room types with flexible pricing
- 💵 **Instant Settlement** - Receive USDC payments immediately upon check-in
- 🛡️ **Deposit Management** - Charge damages or refund deposits post-checkout
- 📊 **On-chain Records** - Transparent booking history

### Technical Highlights
- ⚡ **Web3 Integration** - Connect with MetaMask and wallet providers via ethers.js
- 🎨 **Modern UI/UX** - Beautiful interface built with Tailwind CSS and shadcn/ui
- 🔗 **Smart Contract Powered** - Direct blockchain interaction, no intermediaries
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🎭 **Smooth Animations** - Enhanced UX with Framer Motion

---

## 🛠 Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **Framer Motion** - Smooth animations

### Web3
- **ethers.js v6** - Blockchain interaction
- **MetaMask** - Wallet connection
- **USDC** - Stablecoin payments
- **Lisk Sepolia** - Testnet deployment

### Tools
- **React Router** - Client-side routing
- **Sonner** - Toast notifications
- **Lucide React** - Icon library
- **ESLint** - Code quality

---

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- MetaMask or compatible Web3 wallet
- Some Lisk Sepolia testnet ETH for gas fees
- USDC tokens on Lisk Sepolia (get from faucet)

### Setup

```bash
# Clone the repository
git clone https://github.com/Inn-Chain/chain-hotel-bookings.git
cd chain-hotel-bookings

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🚀 How It Works

### User Journey (Guest)

1. **Connect Wallet** → Connect your MetaMask to Lisk Sepolia testnet
2. **Browse Hotels** → Explore available hotels and room classes
3. **Select Room** → Choose room class, nights, and deposit amount
4. **Approve USDC** → Allow smart contract to handle your USDC
5. **Book & Pay** → Funds locked in escrow (room cost + deposit)
6. **Receive Confirmation** → Get booking ID and on-chain proof
7. **Check-in** → Hotel verifies and releases room payment
8. **Check-out** → Deposit refunded or charged for damages
9. **Cancel Anytime** → Full refund if cancelled before check-in

### Hotel Staff Journey

1. **Connect Hotel Wallet** → Use the registered hotel wallet
2. **Search Booking** → Enter booking ID to view details
3. **Confirm Check-in** → Release room payment from escrow
4. **Guest Checkout** → Process deposit:
   - **No damage** → Full refund to guest
   - **Has damage** → Charge amount, refund remainder
---

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
# Smart Contract
VITE_INNCHAIN_ADDRESS=0x...
VITE_USDC_ADDRESS=0x...

# Network (Lisk Sepolia)
VITE_CHAIN_ID=4202
VITE_RPC_URL=https://rpc.sepolia-api.lisk.com
```

### Smart Contract Integration

The app connects to the InnChain smart contract deployed on Lisk Sepolia. Main functions used:

- `registerHotel()` - Register new hotel
- `addRoomClass()` - Add room types
- `createBooking()` - Create escrow booking
- `confirmCheckIn()` - Release room payment
- `refundDeposit()` - Full deposit refund
- `chargeDeposit()` - Charge damages
- `fullRefund()` - Cancel booking

---

## 🔐 Security Features

- ✅ **Escrow Protection** - Funds locked in audited smart contract
- ✅ **No Custody** - Users maintain full control of assets
- ✅ **Access Control** - Only authorized wallets can perform actions
- ✅ **Transparent** - All transactions viewable on-chain
- ✅ **Cancellation Safety** - Full refund before check-in
- ✅ **Wallet Verification** - Hotel staff must use registered wallet

---

## 🧪 Testing

### Test on Lisk Sepolia

1. Get testnet ETH from [Lisk Sepolia Faucet](https://sepolia-faucet.lisk.com/)
2. Get testnet USDC from contract
3. Connect wallet to Lisk Sepolia
4. Try booking flow end-to-end

### Test Scenarios

**Guest Flow:**
- Browse hotels
- Book room with deposit
- Check booking status
- Cancel before check-in

**Hotel Staff Flow:**
- Confirm guest check-in
- Process deposit refund
- Charge for damages

---

## 🚢 Deployment

### Build for Production

```bash
# Build optimized bundle
npm run build

# Preview production build
npm run preview
```

### Deploy Options

- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with CLI
- **GitHub Pages** - Free static hosting
- **IPFS** - Decentralized hosting

---

## 🎯 Supported Networks

Currently deployed on:
- ✅ Lisk Sepolia Testnet

---

## 🔮 Roadmap

### Phase 1: Core Features
- [ ] Multi-language support (ID, EN, CN, TH)
- [ ] Hotel dashboard with analytics
- [ ] NFT booking receipts
- [ ] Review & rating system on-chain

### Phase 2: DeFi Integration
- [ ] **Auto-Swap Cross-Border Payments** - Pay in local stablecoin (IDR, THB, PHP), auto-convert to hotel's preferred currency
  - Indonesian guest pays in IDRT/XIDR → Thai hotel receives THBT
  - Powered by DEX aggregators (Uniswap, 1inch)
  - Best rate routing for minimal slippage
  - Zero FX spread compared to traditional banks
- [ ] Multi-stablecoin support (USDC, USDT, DAI, IDRT, XIDR, THBT)
- [ ] Dynamic pricing based on demand

### Phase 3: Expansion
- [ ] Loyalty rewards token with staking
- [ ] Mobile app (React Native)
- [ ] Integration with hotel booking APIs (Booking.com, Agoda)
- [ ] Advanced search filters & recommendations
- [ ] Real-time availability via oracles

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [OpenZeppelin](https://openzeppelin.com/) for secure smart contract libraries
- [Lisk](https://lisk.com/) for EVM-compatible L2 infrastructure
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [ethers.js](https://docs.ethers.org/) for Web3 integration
- The Ethereum community for continuous innovation

---

<div align="left">

**Built with ❤️ by Inn Chain Team**

[![GitHub stars](https://img.shields.io/github/stars/Inn-Chain/chain-hotel-bookings?style=social)](https://github.com/Inn-Chain/chain-hotel-bookings/stargazers)

</div>