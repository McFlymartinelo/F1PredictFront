# 🏎️ F1Predict Mobile (Expo + React Native + TypeScript)

Application mobile de pronostics F1.

## 🚀 Stack
- Expo + React Native
- TypeScript
- Navigation: React Navigation (Tab + Stack)
- State: Zustand
- UI: Tailwind (nativewind) + styled-components
- Animations: Moti / Reanimated
- Auth: Firebase Authentication
- Notifications: Firebase Cloud Messaging
- API backend: Node.js/Express (séparé)
- Tests: Jest + React Native Testing Library

## 🗂️ Scripts
- `yarn start` : lancer Expo
- `yarn android` / `yarn ios`
- `yarn test`
- `yarn lint`

## 🔐 Variables d'env (voir .env.example)
```
API_BASE_URL=https://api.f1predict.dev
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_APP_ID=...
FIREBASE_MESSAGING_SENDER_ID=...
```

## 🧠 Fonctionnalités (MVP ciblé pour phase 1)
1. Auth (email + Google + Apple) + invité
2. Liste des GP (Ergast API)
3. Pronostic (Pole + Podium drag & drop) + verrouillage
4. Classement global + perso
5. Profil (stats basiques)
6. News (placeholder + intégration flux future)

Les bonus (Ligues, Quiz, Live scoreboard, Badges, Widgets) seront ajoutés progressivement.

## 🧪 Tests
Ex: tests sur UI Button + store logique.

## 🎨 Design
Theme sombre néon (rouge / bleu), fonts Orbitron / Inter.

## 📦 Evolutions possibles
- Monorepo (packages: mobile, api, shared-types)
- Offline cache (MMKV)
- Feature flags (ex: Stats avancées)

## ✅ Checklist initiale
- [ ] Setup Firebase
- [ ] Ajouter vraies news RSS
- [ ] Intégrer authent Google / Apple
- [ ] Connecter backend real
- [ ] Drag podium final + points
- [ ] Notifications push (qualifs / course)

---

Made with ❤️ and downforce.