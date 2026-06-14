import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

import { db } from "@/firebase";

const COLLECTION_NAME = "articles";

export const createArticle = async (data: any) => {
  const ref = await addDoc(collection(db, COLLECTION_NAME), data);
  return ref.id;
};

export const getArticles = async () => {
  const snapshot = await getDocs(collection(db, COLLECTION_NAME));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getArticleById = async (id: string) => {
  const ref = doc(db, COLLECTION_NAME, id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...snap.data(),
  };
};

export const updateArticle = async (id: string, data: any) => {
  const ref = doc(db, COLLECTION_NAME, id);
  await updateDoc(ref, data);
};

export const deleteArticle = async (id: string) => {
  const ref = doc(db, COLLECTION_NAME, id);
  await deleteDoc(ref);
};