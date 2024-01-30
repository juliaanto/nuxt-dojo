# Nuxt Dojo

Nuxt Dojo is a project designed for learning web development concepts, focusing on building a basic online shop with product listings, currency switching, and a category chart.


## Technologies Used
- Nuxt
- TypeScript
- Pinia
- Vuetify
- Chart.js
- Cypress


## Key Features

- **Product Listing:** Products are displayed using the [Fake Store API](https://fakestoreapi.com/).
- **Currency Switcher:** Utilizes the [Currency Conversion API](https://currencyapi.com/) with an API key.
- **State Management:** Leverages Pinia for efficient application state management.
- **Category Chart:** Includes a category chart implemented using Chart.js.


## Getting Started

To run the project locally, use the following commands:

```bash
git clone https://github.com/juliaanto/nuxt-dojo.git
cd nuxt-dojo
npm install
npm run dev
```

Visit [Live Demo on Netlify](https://heartfelt-snickerdoodle-0f2adc.netlify.app/) to see the Nuxt Dojo in action.

## E2E Testing with Cypress

End-to-end (e2e) testing is implemented using [Cypress](https://www.cypress.io/).

To run the e2e tests locally, use the following command:

```bash
npm run cypress:open
```

## Project Structure

- `pages/`: Nuxt.js pages for routing and views.
- `stores/`: Pinia store modules for efficient state management.
- `components/`: Reusable Vue components for modularity.
- `plugins/`: Nuxt.js plugins for additional functionality.
- `data/`: Store static data files.
- `layouts/`: Custom layouts for different sections of the application.
- `public/`: Public assets such as images, fonts, or other static files.
- `server/`: Code for API registration and server-side handlers.
