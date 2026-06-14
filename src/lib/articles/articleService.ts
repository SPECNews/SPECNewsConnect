import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  DocumentData,
} from "firebase/firestore";

import { db } from "@/lib/firebaseConfig";

const COLLECTION_NAME = "articles";

/* ---------------- CREATE ---------------- */
export const createArticle = async (data: any) => {
  const ref = await addDoc(collection(db, COLLECTION_NAME), data);
  return ref.id;
};

/* ---------------- GET ALL ---------------- */
export const getArticles = async (): Promise<DocumentData[]> => {
  const snapshot = await getDocs(collection(db, COLLECTION_NAME));

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
};

/* ---------------- GET ONE ---------------- */
export const getArticleById = async (id: string) => {
  const ref = doc(db, COLLECTION_NAME, id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...snap.data(),
  };
};

/* ---------------- UPDATE ---------------- */
export const updateArticle = async (id: string, data: any) => {
  const ref = doc(db, COLLECTION_NAME, id);
  await updateDoc(ref, data);
};

/* ---------------- DELETE ---------------- */
export const deleteArticle = async (id: string) => {
  const ref = doc(db, COLLECTION_NAME, id);
  await deleteDoc(ref);
};