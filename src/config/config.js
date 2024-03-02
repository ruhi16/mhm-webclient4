const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteDatabaseName: String(import.meta.env.VITE_DATABASE_NAME),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBuckedId: String(import.meta.env.VITE_BUCKET_ID),
}


export default config