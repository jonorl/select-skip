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

## 🗺️ Notes

- As per the scope of the project, the focus was on the "skip hire" section. The images 
which looked like old PC rendered pictures from the 90s were not included as they were not
part of the API backend data provided either. I think tailwind gives this new frontend a
nice professional look themed with an emerald green which is a soft colour that many
companies related to waste management prefer to handle. Warnings are shown in an orange tone and the bottom bar when selecting a skip was removed as it's just navigational noise.

- From a ui perspective you may want to "force" the user to scroll down to see all the available options for skips. The whole VAT / non-vat was specified as there may be B2B or 
B2C customers hiring skips

- Although not in scope, I've added a header and footer to make things more visually appealing. Mobile responsiveness has been tested.

- From a code maintainability only the absolutely essential has been hardcoded, and given
the size of the project, most components were left on App.jsx file and only the header/footer which are out of scope were removed to a separate component directory. I could've left the calculate VAT function in the main area, but in terms of scalability, I believe it's a good idea to start with a utils directory and separate these functions.

- Error handling coming from the API endpoint has been considered, as well as a spinner loader to alert the user of a potential error or just a delay in loading the data.

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

## 👤 Author

Jonathan Orlowski

jonorl@gmail.com

[LinkedIn](https://www.linkedin.com/in/jonathan-orlowski-58910b21/)

[GitHub](https://github.com/jonorl)

## 📄 License

This project is for demonstration and evaluation purposes only.

