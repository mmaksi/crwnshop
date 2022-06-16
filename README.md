# Crwn Shop

This is an e-commerce React web app that handles user authentication with the ability to show products of multiple categories, adding them to the cart with a checkout page to add/remove cart items before submitting the purchase order using Stripe API.

# Key ideas

- Pass the prop as an object and destructure it inside the child component
- By default all buttons are of type `submit` inside forms. To prevent a button inside a form from submitting, change the `type` prop to "button".

### React Router V6

- Set up a directory specifically for routes -- these are single-use components.

```
<BrowserRouter>
    <App />
</BrowserRouter>
```

- Nested Routes are relative to the base Route:

```
<Route>
    <Route />
</Route>
```

- Nested Routes are rendered in the `<Outlet />` in the base Route
- Nested Routes that recieve the `index` property will be rendered:

1. At the same path of the base Route.
2. At the `<Outlet />` component.

- The Navigation Component implements the `<Link>` component from React Router:

```
<Link to="/shop">
   SHOP
</Link>
```

- Importing a Logo img:

```
import { ReactComponent as CrwnLogo } from './crwn.svg'
```

### Firebase - Authentication

- When using an external API, always implement its methods in its own directory using custom methods of your own, so that if that API (e.g Firebase) changes its methods, you change your codebase once.
- Firebase `SignInWithPopUp()` method returns `providerAuthenticatedUser` when invoked:

```
const auth = getAuth()
export const signInWithGooglePopup = SignInWithPopUp(auth, provider)
```

### Firebase - Storage

```
export const createUserDocumentFromAuth = async (
  providerAuthenticatedUser,
  additionalInformation = {}
) => {
  if (!providerAuthenticatedUser) return;

  const userDocRef = doc(db, 'users', providerAuthenticatedUser.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = providerAuthenticatedUser;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
```

### useContext
- useContext causes the component function to be recalled if the value of the context has changed but not necessarily to be re-rendered. That occurs even if the context was initialized without using its values.

### Observer Pattern
- Streams are a sequence of asynchronous events like clicks
- Stream events emit 3 methods: next, error, complete
- The `complete` mthod is called when the stram is finished