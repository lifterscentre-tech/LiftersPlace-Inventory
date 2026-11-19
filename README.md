# Lifter's Apartments Inventory – fresh build (free plan, no card)
Files: index.html, sw.js, firebase-config.js, manifest.webmanifest, logo.png, icon-180/192/512.png, .gitignore, firestore.rules (rules are pasted in Firebase, not uploaded to GitHub).

1. Firebase > Authentication > Users: delete the old test accounts. Sign-in method: Email/Password enabled.
2. Firebase > Authentication > Users > **Add user**: your own real email + password (this will be the Admin).
3. Firestore > Rules: replace everything with firestore.rules > Publish.
4. GitHub: delete the old files, upload these. Settings > Pages (main, root). Authorized domain in Firebase: lifterscentre-tech.github.io
5. Open the site, sign in with that email. It offers "Set up the Admin": type your name. Do this at once.
6. Admin > Load starting products. Items & prices: set kitchen prices.
7. Users: add each person (name, email, role, password). Or add the login in Firebase and leave the password empty.
8. Drive backup: Google Cloud console > enable Google Drive API > OAuth client ID (Web), origin https://lifterscentre-tech.github.io > paste in Sync & backup > add Google accounts.
Raise VERSION in sw.js whenever you upload a new version.
