// export const appwriteConfig = {
//   appWriteEndPoint: 'http://localhost/v1',
//   appWriteProject: '6632761c003c7ed91704',
//   appWriteBucket: '663276d6002d8d8d9592',
//   appWriteDatabase: '663276af002ae6ca7625',
//   appWriteProductCollectionID: '66327712000da943bdbd',
//   appWriteUsersCollectionID: '66363fb8000ca5c9b7a1',
//   appWriteMessegesCollectionID: '669d5bd90019d6eb6664',
//   appWriteRoomsCollectionID: '669d5b40002c12228b28',
// };
export const appwriteConfig = {
  appWriteEndPoint: String(process.env.REACT_APP_APPWRITE_END_POINT),
  appWriteProject: String(process.env.REACT_APP_APPWRITE_PROJECT),
  appWriteBucket: String(process.env.REACT_APP_APPWRITE_BUCKET),
  appWriteDatabase: String(process.env.REACT_APP_APPWRITE_DATABASE),
  appWriteProductCollectionID: String(
    process.env.REACT_APP_APPWRITE_PRODUCT_COLLECTION_ID
  ),
  appWriteUsersCollectionID: String(
    process.env.REACT_APP_APPWRITE_USERS_COLLECTION_ID
  ),
  appWriteMessegesCollectionID: String(
    process.env.REACT_APP_APPWRITE_MESSEGES_COLLECTION_ID
  ),
  appWriteRoomsCollectionID: String(
    process.env.REACT_APP_APPWRITE_ROOMS_COLLECTION_ID
  ),
};
