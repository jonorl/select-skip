# Skip Hire Frontend Redesign

This is a front-end redesign project for a skip hire service page. The goal was to modernize the user interface while preserving functionality and improving overall UX, responsiveness, and code maintainability.

> 💡 This demo was created as part of a front-end coding test for a job application.

---

## 🧠 Project Goals

- Replace the legacy skip selection page with a completely new UI
- Improve responsiveness (mobile + desktop)
- Maintain core functionality (skip selection, step navigation)
- Focus on clean, modular React code and UX clarity

---

## 📸 Preview

![skip-hire-demo](public/Screenshot%202025-06-09%20151617.png) 

Live Demo: https://select-skip.netlify.app/

---

## 🚀 Features

- ✅ Responsive design with Tailwind CSS
- ✅ Step-based UI flow (Postcode → Waste Type → Select Skip)
- ✅ Interactive skip selection cards
- ✅ API integration (skip sizes/prices by postcode)
- ✅ Reusable components (`DemoUnderHeader`, `DemoFooter`)
- ✅ Loading and error states handled gracefully

---

## 📦 Tech Stack

- React 19
- Tailwind v4 CSS
- Lucide React Icons
- Deployed using [Vite](https://vitejs.dev/)

---

## 🗺️ Project Structure

```
src/
├── components/
│ ├── DemoUnderHeader.jsx
│ └── DemoFooter.jsx
├── utils
├── App.jsx
└── main.jsx
```

---

## 🔧 API Used

Skip data is fetched from:

GET https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

---

## 🧪 Usage (for reviewer)

1. Run the app locally:

```bash
npm install
npm run dev
```

1. Interact with the demo:
- Navigate steps by clicking in the progress bar

- Select a skip to proceed

- Placeholder steps for postcode and waste type are included

## 🗺️ Notes

- This is a front-end prototype; functionality like form validation, backend logic, and real payment flow are out of scope.

- The design and layout were created from scratch for demo purposes only.

- The current postcode (NR32) and area (Lowestoft) are hardcoded for testing.

## 👤 Author

Jonathan Orlowski

jonorl@gmail.com

[LinkedIn](https://www.linkedin.com/in/jonathan-orlowski-58910b21/)

[GitHub](https://github.com/jonorl)

## 📄 License

This project is for demonstration and evaluation purposes only.

