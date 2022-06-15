# Crwn Shop

# React Router V6
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

# Firebase - Authentication
- When using an external API, always implement its methods in its own directory using custom methods of your own, so that if that API (e.g Firebase) changes its methods, you change your codebase once.
- Firebase `SignInWithPopUp()` method returns `providerAuthenticatedUser` when invoked:
```
const auth = getAuth()
export const signInWithGooglePopup = SignInWithPopUp(auth, provider)
```
# Firebase - Storage
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

# useContext
- If a context exposes a `state`, any component depneding on that state will re-render if the value is changed using the `setState()` in another component.

