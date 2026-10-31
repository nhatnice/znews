# 📰 ZNews - Smart News Aggregator & Story Reader

> **ZNews** is a modern, cross-platform mobile news aggregation application built with React Native and Expo. It delivers a personalized, distraction-free reading experience with Instagram-style news stories, an intelligent time-based content recommendation engine, and real-time push notifications.

<div align="center">
  <table border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td><img width="260" src="https://play-lh.googleusercontent.com/nUnQhUajmok5enW6IayNfBAXp4Dvi3_l1Z6O3CSvlAwr32JpVi2cxIV1DYqF15m_Kg=w5120-h2880-rw" alt="News Feed Screen"/></td>
      <td><img width="260" src="https://play-lh.googleusercontent.com/IjoIu1GvdikwCxscQihmOLtwNtQrjKc1b3z7KYX71a0piHERpBevDnJInhFGZyWEWWg=w5120-h2880-rw" alt="Topics and Stories Screen"/></td>
      <td><img width="260" src="https://play-lh.googleusercontent.com/EaYDCYPVUQfmRWungL7uLJFwMiEH6UT_CMhw6T4KTQKF1ZRoIc4AySyxPNRzly9n1Sel=w5120-h2880-rw" alt="Article Detail Screen"/></td>
    </tr>
  </table>
</div>

---

## 📑 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started & Setup](#-getting-started--setup)
- [Usage & Scripts](#-usage--scripts)
- [Security & Environment](#-security--environment)
- [Author & Credits](#-author--credits)

---

## 📖 Overview

**ZNews** transforms everyday news consumption into an intuitive, engaging mobile experience. Instead of scrolling through endless cluttered feeds, ZNews aggregates and digests articles from premier media outlets via RSS, providing tailored recommendations based on user habits and reading times (morning, noon, or evening).

Additionally, ZNews incorporates a **Story Format (24h Digest)** inspired by modern social media platforms, allowing users to quickly swipe through headlines and bite-sized article summaries in seconds.

---

## ✨ Key Features

- 🚀 **QuickStart Onboarding**: First-time users can immediately select preferred topics and RSS news sources to bootstrap their personalized feed.
- 📱 **Instagram-Style Stories**: Read top daily highlights through a fluid story viewer featuring animated auto-advancing progress bars and gesture controls.
- 🧠 **Intelligent Content Scoring Engine**:
  - Dynamically calculates interest scores across keywords, authors, and topics based on reader engagement (views, reactions, bookmarks).
  - Contextual recommendation partitioned by daily routines (`morning`, `noon`, `night`).
  - Read-state tracking with option to hide or show previously read articles.
- 🎨 **Polished & Fluid UI**:
  - Smooth bottom navigation with `react-native-animated-nav-tab-bar`.
  - Flexible feed layouts: switch between Standard Card and Expanded Detail Card views.
  - Light & Dark theme support.
- 🔖 **Article Management & Search**:
  - Save articles locally to Bookmarks for offline reference.
  - Full-text search with infinite scrolling pagination.
- 🔔 **Smart Push Notifications (FCM)**:
  - Powered by Firebase Cloud Messaging.
  - Granular notification channels (e.g., Relax mode vs. All updates).
  - Deep linking support (`news://`) to jump directly to specific articles from push notifications.

---

## 🛠 Tech Stack

| Category | Technology / Library |
| :--- | :--- |
| **Framework & Core** | [React Native](https://reactnative.dev/) `0.68.2`, [Expo](https://expo.dev/) `~45.0.0` (Bare Workflow) |
| **State Management** | [Redux](https://redux.js.org/) `8.0.2`, [Redux-Saga](https://redux-saga.js.org/) `1.1.3` |
| **Navigation** | [React Navigation v6](https://reactnavigation.org/) (`@react-navigation/native-stack`, `react-native-animated-nav-tab-bar`) |
| **Persistent Storage** | [`@react-native-async-storage/async-storage`](https://github.com/react-native-async-storage/async-storage) |
| **Cloud & Notifications** | [Firebase Core](https://rnfirebase.io/) (`@react-native-firebase/app`), [Firebase FCM](https://rnfirebase.io/messaging/usage) (`@react-native-firebase/messaging`), `react-native-push-notification` |
| **UI & Motion** | `react-native-reanimated`, `react-native-fast-image`, `react-native-vector-icons`, `react-native-gesture-handler`, `react-native-modalbox` |
| **Networking & HTML** | [Axios](https://axios-http.com/), [Cheerio](https://cheerio.js.org/), `react-native-webview` |

---

## 📂 Project Architecture

```text
znews/
├── android/                 # Android native code, gradle scripts, and resources
├── ios/                     # iOS native code, Podfile, and workspace
├── api/                     # Modular API services
│   ├── Analytics/           # User feedback & event reporting
│   ├── Articles/            # Feed retrieval, stories, pagination, search
│   ├── Bookmarks/           # Local bookmark synchronization
│   ├── FcmTokens/           # Device FCM token registration & topics
│   ├── NewsFeed/            # Aggregated timeline services
│   ├── RSS/                 # RSS feed source endpoints
│   ├── Settings/            # User preferences and Content Scoring algorithm
│   ├── Topics/              # Category and tag queries
│   ├── Users/               # Publisher & author profile endpoints
│   └── config.js            # Base API URL and header configurations
├── components/              # Reusable UI components
│   ├── Appbar/              # Navigation bar headers
│   ├── Button/              # Custom stylized button elements
│   ├── Card/                # Standard and detail post card layouts
│   ├── Headerbar/           # Home screen branding header
│   ├── Loading/             # Loading skeletons and spinners
│   ├── ScreenView/          # SafeArea keyboard-aware wrapper
│   ├── Section/             # Section separators and title headers
│   ├── Stories/             # StoryContainer, ProgressArray, and avatar viewers
│   └── Titles/              # Responsive typography components
├── global/                  # Global app constants, CDN URLs, and score weights
├── helper/                  # Utility functions (prettyDate formatting, randomizers)
├── hooks/                   # Custom React hooks (useFCM notification management)
├── navigation/              # RootStack navigation and animated tab controllers
├── sagas/                   # Redux action creators, sagas, and state reducers
├── views/                   # Screen views
│   ├── Article/             # Article reader & webview viewer
│   ├── Bookmarks/           # Saved articles collection
│   ├── Home/                # Main feed and story carousel
│   ├── QuickStart/          # First-launch onboarding and interest setup
│   ├── Search/              # Keyword search and filter view
│   └── Settings/            # Preferences, appearances, and about screen
├── App.js                   # Application entry point & provider wrapper
├── app.json                 # Expo metadata and EAS configuration
└── package.json             # Dependencies and build scripts
```

---

## 🚀 Getting Started & Setup

### 1. Prerequisites
- **Node.js**: `>= 16.x`
- **Package Manager**: `npm` or `yarn`
- **Java Development Kit**: OpenJDK 11
- **Android Studio**: Android SDK (API 24+) and NDK (for native builds)
- **Xcode** (macOS only): `>= 12.x` and CocoaPods (for iOS builds)

### 2. Installation
Clone the repository and install project dependencies:

```bash
# Clone repository
git clone git@github.com:nhatnice/znews.git
cd znews

# Install dependencies (legacy peer deps recommended for RN 0.68)
npm install --legacy-peer-deps
# or
yarn install
```

### 3. Environment Configuration
Create an environment file using the provided template:

```bash
cp .env.example .env.development
```

Edit `.env.development`:
```env
REACT_APP_NEWS_API_KEY=your_actual_news_api_key_here
```

### 4. Firebase Configuration
Firebase Cloud Messaging powers real-time alerts and push notifications:
1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Add an Android app with package name: `com.lavenes.znews`.
3. Download `google-services.json` and place it at:
   ```text
   android/app/google-services.json
   ```
   *(See `android/app/google-services.json.example` for the required schema)*
4. For iOS, register `org.lavenes.news` and place `GoogleService-Info.plist` into `ios/news/`.

### 5. Android Signing Configuration (Release Builds)
Configure your upload keystore in `android/gradle.properties`:
```properties
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=your_keystore_password
MYAPP_UPLOAD_KEY_PASSWORD=your_key_password
```

---

## 📱 Usage & Scripts

### Development

```bash
# Start Metro bundler with Expo dev client
npm run start

# Launch on connected Android device / emulator
npm run android

# Launch on iOS simulator (macOS required)
npm run ios

# Run web preview
npm run web
```

### Production Build

```bash
# Compile Android Release Bundle (.aab)
npm run build-android

# Run release APK directly on a connected Android device
npm run release-android
```
The resulting `.aab` file will be generated at:
`android/app/build/outputs/bundle/release/app-release.aab`

---

## 🔒 Security & Environment

- **Keystore & Credentials**: Never commit production keystore files or passwords to public version control.
- **API Keys & Firebase**: The repository includes `.env.example` and `google-services.json.example` as placeholders. Keep production keys in secure secret managers or CI/CD environment variables.

---

## 👤 Author & Credits

- **Developer**: **NHΛT TRΛN**
- **Website**: [nhattran.dev](https://nhattran.dev)
- **Contact**: [contact@nhattran.dev](mailto:contact@nhattran.dev)
- **Repository**: [github.com/nhatnice/znews](https://github.com/nhatnice/znews)

Licensed under the [MIT License](LICENSE) (or original author terms). Open-source contributions and pull requests are welcome!
