# Crwn Shop
## Features
- React
- React Router
- Redux
- Redux Thunk
- Redux Saga
- Firebase & Firestore
- Stripe API
- Styled Components
- GraphQL
- TypeScript

This is an e-commerce React web app that handles user authentication with the ability to show products of multiple categories, adding them to the cart with a checkout page to add/remove cart items before submitting the purchase order using Stripe API.
[See Live](https://comshop.netlify.app/)

![crwn-shop](https://i.ibb.co/3TGtdcj/crwnshop.png)

## Notes
- Parent route component renders on all nested routes.
- Nested routes are rendered in the `Outlet` component.
- To make a nested route renders with the parent route's component, use `index` property.