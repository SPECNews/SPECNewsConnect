import { storage } from "@/lib/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImage = async (file: File) => {
  const imageRef = ref(storage, `articles/${Date.now()}-${file.name}`);

  await uploadBytes(imageRef, file);

  const url = await getDownloadURL(imageRef);

  return url;
};