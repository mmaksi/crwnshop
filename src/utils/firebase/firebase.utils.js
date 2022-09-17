// Importing different functions from different SDKs
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuB4EPRr8HVUwyFIzKfnAGpXrv8TxKOBQ",
  authDomain: "crwn-db-26707.firebaseapp.com",
  projectId: "crwn-db-26707",
  storageBucket: "crwn-db-26707.appspot.com",
  messagingSenderId: "1066520549852",
  appId: "1:1066520549852:web:dfaf2fe655e37d5ab09719",
  measurementId: "G-M797473KSN",
};

// Initializes Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
  // Document reference is a unique reference to some place in Firestore users collection
  const userDocRef = doc(db, "users", userAuth.uid);

  // gets "document data" from the database
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      // sets "document data" in the database
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      alert("error creating the user");
    }
  }

  return userDocRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    // doc methods gets the document instance not document data
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// observer listener - callback will be called whenever the auth object changes
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
