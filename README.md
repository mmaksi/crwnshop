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
## React Router
- Parent route component renders on all nested routes.
- Nested routes are rendered in the `Outlet` component.
- To make a nested route renders with the parent route's component, use `index` property.

## useContext Hook
Any component that import `useContext` will make its function rerun whenever any value of the context changes even if that component doesn't use these actual values.

## Observer Pattern
A stream is a **observable** sequence of **asynchronous events**. E.g: mouse clicks. We don't know when the user will click or how many times the user will click or even the time difference between each click.
We interact with the stream with a class that has 3 methods:
1. next: (event) => { // do something with the event value }
2. error: (error) => { // do something with the error object }
3. complete: () => { // do something when the the stream stops }
We don't trigger or call these methods manually. Usually the observer stream revokes these methods on the listener that is subscribed to them.
Subscribers to the stream cannot listen to past events that happened before their subscribtion.