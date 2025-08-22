# Impulse Full Stack Developer Take-Home Assessment

This repository contains my completed take-home assessment for the **Impulse Full Stack Developer** role.
The project demonstrates end-to-end skills in **React Native**, **AWS architecture**, **Prisma optimization**, and **scalable backend design**.

**Part 1: React Native Focus Groups Feature** - A modern, creative React Native application featuring a lightweight community chat/forum system with beautiful UI/UX, safe area handling, adaptive text colors, and enhanced keyboard management.

---

## 📂 Project Structure

```
impulse/
├── app/
│   ├── _layout.tsx          # Root layout with SafeAreaProvider and navigation
│   ├── index.tsx            # Main groups list screen with full-page scrolling
│   └── group/[id].tsx       # Group detail/chat screen with keyboard handling
├── components/
│   ├── GroupCard.tsx        # Reusable group card with adaptive text contrast
│   ├── MessageBubble.tsx    # Chat message component with timestamp formatting
│   └── ExternalLink.tsx     # External link handler (preserved from template)
├── services/
│   └── mockData.ts          # Centralized mock data and utility functions
├── types/
│   └── index.ts             # TypeScript interfaces for Group, Message, User
├── assets/
│   ├── fonts/
│   │   └── SpaceMono-Regular.ttf  # Custom font for UI elements
│   └── images/              # App icons and splash screens
├── package.json             # Dependencies including expo-linear-gradient
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## ⚙️ Setup Instructions

### **Frontend (React Native)**

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on your preferred platform
npm run ios     # iOS
npm run android # Android
npm run web     # Web
```

> **Note:** This submission uses mocked data for Part 1. No backend setup is required.

---

## 📌 Part 1: React Native Focus Groups Feature

For Part 1, I built a **modern React Native application** featuring a **Focus Groups** community chat/forum system with **production-ready UI/UX**.

**Key Features:**

- **Group Discovery**: Browse and discover various focus groups with different themes
- **Join/Leave Groups**: Toggle membership status with intuitive buttons
- **Real-time Chat**: Send and receive messages within groups (local state implementation)
- **Adaptive Design**: Dynamic text colors based on background luminance
- **Safe Area Handling**: Proper content positioning on all devices
- **Enhanced Scrolling**: Full-page scrolling for seamless user experience
- **Keyboard Management**: Maintained input focus and proper keyboard interactions

**Technical Highlights:**

- **TypeScript**: Full type safety with proper interfaces
- **Modular Components**: Reusable, well-structured components
- **Expo Router**: File-based routing with dynamic routes
- **React Hooks**: Local state management with useState
- **Safe Area Context**: Proper handling of device safe areas
- **Linear Gradients**: Beautiful gradient backgrounds
- **Responsive Design**: Optimized for different screen sizes

📄 **Ready for Part 2 Backend Integration** - The frontend is structured to easily integrate with real-time messaging, user authentication, and persistent data storage.

---

## 📌 Part 2: AWS Scaling Architecture with Prisma

For Part 2, I designed a **highly scalable AWS architecture** to handle **tens of thousands of concurrent users** using **Prisma + RDS Postgres**.

**Key Highlights:**

- Uses **RDS Proxy** for efficient connection pooling.
- Implements **read replicas** for horizontal scaling.
- Demonstrates **Prisma read/write splitting** for performance optimization.
- Proposes **ElastiCache integration** for frequent queries.
- Includes an **architecture diagram** and tradeoff analysis.

📄 **Read the full solution here:**
[docs/rds-scaling-architecture.md](./docs/rds-scaling-architecture.md)

---

## 📌 Part 3: Architecture & Workflow Short Answers

For Part 3, I provided concise answers (3–5 sentences each) on:

1. **Scaling** → Designing a backend to handle **100k+ concurrent users**.
2. **CI/CD** → Automating React Native & AWS deployments.
3. **Team Workflow** → Maintaining **fast iteration** while ensuring **code quality**.

📄 **Read the full answers here:**
[docs/architecture-workflow-answers.md](./docs/architecture-workflow-answers.md)

---

## 🚀 Key Highlights

- **React Native** → Built a Focus Groups feature for Part 1 with beautiful UI/UX, safe area handling, and adaptive design
- **Modern Architecture** → Used TypeScript, Expo Router, and modular components for maintainable code
- **User Experience** → Implemented full-page scrolling, adaptive text colors, and enhanced keyboard management
- **Production Ready** → Proper error handling, responsive design, and scalable component structure
- **AWS + Prisma Expertise** → Designed a production-ready architecture with scaling considerations (Part 2)
- **System Design** → Addressed caching, failover, and read/write performance tradeoffs
- **Code Quality** → Followed modular, maintainable best practices throughout

---

## 📝 Submission Info

- **Name:** Aditya Krishna
- **Date Submitted:** August 22, 2025
- **Contact:** adi3kris@gmail.com

---

## ✅ Final Notes

This repository demonstrates my ability to:

- Build **scalable systems** with AWS, Prisma, and React Native.
- Design **clean, maintainable architectures** optimized for performance.
- Balance **fast iteration** with high-quality, production-ready code.

Thank you for reviewing my submission!
