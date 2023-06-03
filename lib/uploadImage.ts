import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "6470c04f595c7fb7d4f9",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;