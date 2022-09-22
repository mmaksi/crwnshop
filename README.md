# Crwn Shop
## Features
- React & TypeScript
- React Router
- Redux with TypeScript
- Redux Thunk
- Redux Saga
- Firebase & Firestore
- Stripe API
- Styled Components
- GraphQL

This is an e-commerce React web app that handles user authentication with the ability to show products of multiple categories, adding them to the cart with a checkout page to add/remove cart items before submitting the purchase order using Stripe API.
[See Live](https://ecomclothing.netlify.app/)

![crwn-shop](https://i.ibb.co/3TGtdcj/crwnshop.png)

## Notes
### React Router
- Parent route component renders on all nested routes.
- Nested routes are rendered in the `Outlet` component.
- To make a nested route renders with the parent route's component, use `index` property.

### useContext Hook
Any component that import `useContext` will make its function rerun whenever any value of the context changes even if that component doesn't use these actual values.

### Context vs. Redux (Accessibility & User Flow)
- In context we you can limit the accessibility to the context to a specific component(s) while Redux always makes a global state for the entire application.
- In context, the state is accessible only inside the components in a given context while in Redux every reducer recieves every action because there is one **Root Reducer** and one **Dispatch action** in the **Redux Store**.

### Redux - Notes and Data Flow Diagram
- All Middlewares (except sagas) are fired _before_ actions hit the root reducer.
- Selectors are responsible for transforming the data from one structure to another.
- Reducers should care about returning the data in the desired output without being concerned about transforming it to another data structure. Business logic goes into the selectores.
- Any time the root reducer updates, all components that have `useSelector` will rerun but not necessarily will cause re-rendering.
- `useSelector` will cause the component to re-render if the return of the selector function you pass to it is different. But since selector functions always return the same value, it will cause rerendering only when returns a new object and since objects are stored in memory by reference, React will look at them as new state even if they have the same properties.
![redux-data-flow-diagram](https://i.ibb.co/gF2bPFq/Redux-min.png)

### Redux Thunk - Notes and Data Flow Diagram
- Redux Thunk is an asynchronous side effect event handling middleware inside Redux that recieves an **action** in the form of a function and dispatching that action occurs within the middleware itself.
![redux-thunk-middleware-data-flow-diagram](https://i.ibb.co/1Kk0kkY/Redux-thunk-min.png)

### Redux Saga - Notes and Data Flow Diagram
- Sagas are middlewares that recieve actions _after_ they hit the reducers.
- Sagas can fire actions that pass through the typical middlewares and reducers and then pass through sagas again.
- The state inside sagas is the updated state because they have already hit the reducers.
- Just like there is a **Root Reducer**, there is a **Root Saga** that combines all sagas.
- In each Saga file we have mainly 3 parts:
    1. The main sagas function that holds all generators related to that specific saga.
    2. Entry saga(s) function generator(s) that listens to actions using the `take ()` method and respond to them.
    3. The respond generator function that will be passed as a response to the action.

![redux-saga-data-flow-diagram](https://i.ibb.co/2KKJPBr/Redux-saga-min.png)


### Observer Pattern
A stream is a **observable** sequence of **asynchronous events**. E.g: mouse clicks. We don't know when the user will click or how many times the user will click or even the time difference between each click.
We interact with the stream with a class that has 3 methods:
1. next: (event) => { // do something with the event value }
2. error: (error) => { // do something with the error object }
3. complete: () => { // do something when the the stream stops }
We don't trigger or call these methods manually. Usually the observer stream revokes these methods on the listener that is subscribed to them.
Subscribers to the stream cannot listen to past events that happened before their subscribtion.

### TypeScript with React
- `ChangeEventHandler` is a **function definition** from React
- Types can take **type parameters**: `ChangeEventHandler<T = ELement>`. This parameter is a type that is used inside its own type definition.
- **Type Predicate** is acustom _Type Guard_ technique. Type predicates are always attached to a function that takes a single argument and returns a boolean to verify the argument is a narrower type. Type predicates are expressed as `argumentName is Type`.
```
type Human = { speak: () => {} }
type Alien = { fly: () -> {} }

function isHuman(entity: Human | Alien): entity is Human {
    retutn (entity as Human).speak() !== undefined
}
```

- **Intersection** gets the intersection of two types:
```
type Human = { speak: () => {} }
type Alien = { fly: () -> {} }
type Entity = Human & Alien

const josh: Entity
josh.fly() // no errors
josh.speak() // no errors
```

- **ReturnType** Constructs a type consisting of the return type of function `Type`.
```
type MyReturn = ReturnType<MyType>
```
