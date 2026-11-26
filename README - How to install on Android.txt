P1087 PENDULUM CHECK - ANDROID APP (Progressive Web App)
=========================================================

What is in this folder
  index.html               the app
  manifest.webmanifest     app name, icon and colours (makes it installable)
  sw.js                    offline support (works at the quay without signal)
  icon-*.png               app icons

The folder must be put on an HTTPS web address once. After that each phone
installs it from Chrome and it runs offline like a normal app.


OPTION A - Install from Chrome (recommended, about 10 minutes, free)
--------------------------------------------------------------------
1. Host the folder on any HTTPS site, for example GitHub Pages:
   a. Create a free account at github.com and a new public repository,
      e.g. "p1087-pendulum".
   b. "Add file" > "Upload files" > drag in ALL files from this folder > Commit.
   c. Settings > Pages > Source: "Deploy from a branch", Branch: main / root > Save.
   d. After 1-2 minutes the address is shown, e.g.
      https://<your-user>.github.io/p1087-pendulum/
   (A company web server works too - copy the folder to any HTTPS location.)
2. On each Android phone open that address in Chrome.
3. Chrome menu (three dots) > "Install app" (or "Add to Home screen" > Install).
4. The "Pendulum" icon appears in the app drawer. Open it once while online;
   from then on it works offline.


OPTION B - Real APK file to send to phones (no coding)
------------------------------------------------------
1. Do Option A step 1 to get the HTTPS address.
2. Go to https://www.pwabuilder.com, paste the address, click Start.
3. "Package For Stores" > Android > "Generate Package" (choose "Other Android"
   / sideload if offered) > Download.
4. In the downloaded zip, send the .apk file to the phones (WhatsApp, email,
   USB). On the phone tap the file and allow "Install unknown apps" for the
   app you opened it from.
   Keep the signing key file from the zip if you want to publish updates later.


Using the app
-------------
- Inputs (tap "Inputs"): default values are the P1087 values; any value can be
  changed. "Reset to defaults" restores them. Changed fields are outlined.
- Enter each batten reading (mm) after the pendulum settles and lines are slack.
  Use the +/- button for negative readings (weight P->S gives negative).
- Each move shows deflection, running-average deviation (DOC-123 10.3, 5%) and
  OK / REPEAT MOVE. Moves 4 and 8 also flag zero drift.
- After move 8: GMT and KG by the mean-deflection method.
- "Copy results" copies a text summary to paste into WhatsApp / email / NA605.
- Readings are saved on the phone only (each phone keeps its own copy).


Updating the app later
----------------------
Edit index.html, change VERSION in sw.js (e.g. v1.1), upload again.
Installed phones pick up the new version the next time they open the app online.
