# XRAY Admin Dashboard

A sophisticated, dark-themed Extension Analytics dashboard built with modern web technologies. This dashboard provides comprehensive metrics tracking for browser extensions with a beautiful, responsive interface.

![Dashboard Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![Chakra UI](https://img.shields.io/badge/Chakra%20UI-319795?logo=chakraui&logoColor=white)

## ✨ Features

### 🎨 **Design**
- **Dark chocolate brown theme** with sophisticated color palette
- **Card-based layout** with subtle shadows and hover effects
- **Responsive design** that works on all screen sizes
- **Modern typography** with clear visual hierarchy
- **Smooth animations** and transitions

### 📊 **Analytics Dashboard**
- **8 Key Metrics** displayed in an organized 2x4 grid:
  - Total Downloads
  - Total Installs  
  - Total Uninstalls
  - Active Users
  - Average Session Duration
  - Average Sessions per User
  - Total Evaluations
  - Evaluations per User and Type

### 🕒 **Time Period Filtering**
- **Interactive tabs** for Day, Week, and Month views
- **Active state indicators** with orange accent color
- **Smooth tab switching** with visual feedback

### 🛠️ **Technical Excellence**
- **TypeScript** for complete type safety
- **Component-based architecture** following Bulletproof React patterns
- **Reusable components** with proper prop interfaces
- **Clean code structure** with separation of concerns
- **No duplicate code** or unnecessary dependencies

## 🚀 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | ^18.3.1 |
| **TypeScript** | Type Safety | ^5.6.2 |
| **Vite** | Build Tool | ^6.3.5 |
| **Chakra UI** | Component Library | ^3.4.2 |
| **React Icons** | Icon Library | ^5.4.0 |

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jorlost19/xray-admin-dashboard.git
   cd xray-admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Dashboard.tsx     # Main dashboard container
│   ├── DashboardHeader.tsx # Header with title and actions
│   ├── MetricCard.tsx    # Individual metric display card
│   └── TimeSelector.tsx  # Time period selection tabs
├── types/               # TypeScript type definitions
│   └── dashboard.ts     # Dashboard-related interfaces
├── App.tsx             # Root application component
└── main.tsx           # Application entry point
```

## 🎯 Component Architecture

### **Dashboard.tsx**
Main container component that orchestrates the entire dashboard layout and manages state for time period selection.

### **DashboardHeader.tsx** 
Header section featuring the extension icon, title, subtitle, and action button with hover effects.

### **TimeSelector.tsx**
Interactive tab component for switching between time periods with visual active state indicators.

### **MetricCard.tsx**
Reusable card component displaying individual metrics with consistent styling and hover animations.

## 🎨 Design System

### **Color Palette**
- **Background**: `#3D2F1F` (Dark Chocolate Brown)
- **Cards**: `#2F1F0F` (Darker Brown)
- **Primary Text**: `#FFFFFF` (White)
- **Secondary Text**: `#8B6914` (Muted Brown)
- **Accent**: `#F97316` (Orange)
- **Action Button**: `#14B8A6` (Teal)

### **Typography**
- **Large Numbers**: `3xl` bold white text for primary metrics
- **Card Labels**: `sm` muted brown text for descriptions
- **Headings**: `4xl` bold white for main title
- **Body Text**: `lg` muted brown for subtitles

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📱 Responsive Design

- **Mobile**: Single column layout for metric cards
- **Desktop**: 2-column grid layout for optimal space usage
- **Tablet**: Adaptive layout based on screen size
- **All devices**: Consistent spacing and typography scaling

## 🔧 Development Guidelines

This project follows **Bulletproof React** principles:

- ✅ **Component-based architecture**
- ✅ **TypeScript for type safety** 
- ✅ **Reusable component patterns**
- ✅ **Proper separation of concerns**
- ✅ **Clean import/export structure**
- ✅ **Consistent naming conventions**

---

⭐ **Star this repository** if you find it helpful!
