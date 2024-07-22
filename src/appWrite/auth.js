import { Client, Account, ID, Databases, Query } from 'appwrite';
import { appwriteConfig } from './appConfig';
class AuthService {
  #_client = new Client();
  #_account;
  #_database;
  constructor() {
    this.#_client
      .setEndpoint(appwriteConfig.appWriteEndPoint)
      .setProject(appwriteConfig.appWriteProject);
    this.#_account = new Account(this.#_client);
    this.#_database = new Databases(this.#_client);
  }
  async loginWithEmailAndPassord({ email, password }) {
    try {
      const user = await this.getUser();
      if (user?.email) {
        console.log('already logged in');
        return await this.getUserByEmailAddress(user?.email);
      }
      const session = await this.#_account.createEmailPasswordSession(
        email,
        password
      );
      if (session) {
        return await this.getUserByEmailAddress(email);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getUserByEmailAddress(email) {
    try {
      let user = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        [Query.equal('email', email), Query.limit(1)]
      );
      return user.documents[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async loginWithOAuthProvider(provider) {
    try {
      const account = this.#_account.createOAuth2Session(provider);
      console.log(account);
    } catch (error) {
      console.log(error);
    }
  }

  async loginWithPhone(userID, phone) {
    try {
      const account = await this.#_account.createPhoneSession(userID, phone);
      console.log(account);
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    await this.#_account.deleteSessions();
    console.log('logged out');
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async getUser() {
    try {
      return await this.#_account.get();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async createAccount(user) {
    try {
      const { email, password, username } = user;
      const account = await this.#_account.create(
        ID.unique(),
        email,
        password,
        username
      );
      if (account) {
        await this.#_database.createDocument(
          appwriteConfig.appWriteDatabase,
          appwriteConfig.appWriteUsersCollectionID,
          ID.unique(),
          { username, email }
        );
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export const authService = new AuthService();
