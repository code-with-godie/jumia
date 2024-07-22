import { Client, Databases, ID, Query } from 'appwrite';
import { appwriteConfig } from './appConfig';

class AppWriteService {
  client = new Client();
  #_database;
  constructor() {
    this.client
      .setEndpoint(appwriteConfig.appWriteEndPoint)
      .setProject(appwriteConfig.appWriteProject);
    this.#_database = new Databases(this.client);
  }
  async getCategories() {
    const titles = [];
    const products = await this.#_database.listDocuments(
      appwriteConfig.appWriteDatabase,
      appwriteConfig.appWriteProductCollectionID,
      [Query.select('category')]
    );
    if (products.documents.length > 0) {
      products.documents.forEach(item => {
        const { category } = item;
        if (!titles.includes(category)) {
          titles.push(category);
        }
      });

      return titles;
    } else {
      return titles;
    }
  }
  async getFilteredProducts(filters) {
    let query = [];
    try {
      //filter by category
      if (filters.categories?.length > 0) {
        console.log('category is true');
        query = [
          ...query,
          ...filters.categories?.map(item => Query.contains('tags', item)),
        ];
      }
      //filter by brand
      if (filters.brands?.length > 0) {
        console.log('brand is true');
        query = [
          ...query,
          ...filters.brands?.map(item => Query.equal('brand', item)),
        ];
      }
      const products = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        query
      );
      return products.documents;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getFilters(category, email) {
    try {
      let products = [];
      switch (category) {
        case 'recent':
          products = await this.getRecentProducts(email);
          return await this.helpGenerateFilters(products);
        case 'recommended':
          products = await this.getRecommendedProducts();
          // console.log('recommended', products);
          return await this.helpGenerateFilters(products);
        case 'top-picks':
          products = await this.getTopPicksProducts();
          // console.log('top-picks', products);
          return await this.helpGenerateFilters(products);
        default:
          products = await this.getProductsByCategory(category);
          // console.log('category', products);
          return await this.helpGenerateFilters(products);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async helpGenerateFilters(products = []) {
    try {
      const filters = {
        brand: [],
        price: { min: Number.MAX_SAFE_INTEGER, max: 0 },
        categories: [],
      };
      if (products.length > 0) {
        products.forEach(product => {
          const { tags, sellingPrice, brand } = product;
          //handle min price
          if (filters.price.min > sellingPrice) {
            filters.price.min = sellingPrice;
          }
          //handle max price
          if (filters.price.max < sellingPrice) {
            filters.price.max = sellingPrice;
          }
          //handle brand
          if (!filters.brand.includes(brand)) {
            filters.brand.push(brand);
          }
          //handle categories
          tags.forEach(tag => {
            if (!filters.categories.includes(tag)) {
              filters.categories.push(tag);
            }
          });
        });
      }
      return filters;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCategoryProducts(category, email) {
    switch (category) {
      case 'recent':
        return await this.getRecentProducts(email);
      case 'recommended':
        return await this.getRecommendedProducts();
      case 'top-picks':
        return await this.getTopPicksProducts();
      default:
        return await this.getProductsByCategory(category);
    }
  }
  async getRecommendedProducts() {
    //implement recommendation logic
    try {
      const products = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID
      );
      return products.documents;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getTopPicksProducts() {
    try {
      const products = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.greaterThan('discount', 100)]
      );
      return products.documents;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getProductsByCategory(category) {
    try {
      const products = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.equal('category', category)]
      );
      return products?.documents;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getRecentProducts(email) {
    let products = [];
    const user = await this.getUserByEmail(email);
    const viewed = [...user?.viewed];
    if (viewed.length === 0) {
      return [];
    }
    let index = 0;

    while (index < viewed.length - 1) {
      const product = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [
          Query.equal('$id', viewed[index]),
          // Query.select(['category', '$id', 'images']),
        ]
      );
      products.push(product.documents[0]);
      index++;
    }
    return products;
    // return products.reverse().slice(0, 11);
  }
  async getSavedProducts(email) {
    let products = [];
    const user = await this.getUserByEmail(email);
    const saved = [...user?.saved];
    if (saved.length === 0) {
      return [];
    }
    let index = 0;

    while (index < saved.length - 1) {
      console.log(saved);
      const product = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [
          Query.equal('$id', saved[index]),
          // Query.select(['category', '$id', 'images']),
        ]
      );
      console.log(product);
      products.push(product.documents[0]);
      index++;
    }
    console.log(products);
    return products;
    // return products.reverse().slice(0, 11);
  }
  async getUniqueCategory() {
    const titles = await this.getCategories();
    const products = await this.helpGetProducts(titles);
    return products;
  }
  async getSingleProduct(id) {
    const product = await this.#_database.getDocument(
      appwriteConfig.appWriteDatabase,
      appwriteConfig.appWriteProductCollectionID,
      id
    );
    return product;
  }
  async helpGetProducts(titles = []) {
    let index = 0;
    const products = [];
    while (index < titles.length) {
      const product = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [
          Query.equal('category', titles[index]),
          Query.select(['category', '$id', 'images']),
          Query.limit(1),
        ]
      );
      products.unshift(product.documents[0]);
      index++;
    }
    return products;
  }
  async addToRecentlyViewed(email, id) {
    let user = await this.getUserByEmail(email);
    const userID = user?.$id;
    const viewed = user?.viewed;
    if (!viewed.includes(id)) {
      console.log('performing viewed operation');
      user = await this.#_database.updateDocument(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        userID,
        { viewed: [id, ...viewed] }
      );
    } else {
      console.log('already viewed. no operation performed');
    }
    return user.documents;
  }
  async saveProduct(email, productID) {
    try {
      let user = await this.getUserByEmail(email);
      let saved = [...user?.saved];
      if (saved?.includes(productID)) {
        console.log('product already saved,removing the item');
        saved = saved.filter(item => item !== productID);
      } else {
        console.log('saving the products');
        saved.unshift(productID);
      }
      const newUser = await this.#_database.updateDocument(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        user.$id,
        {
          saved,
        }
      );
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getUserByEmail(email) {
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
  async getUserByUseID(id) {
    try {
      let user = await this.#_database.getDocument(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        id
      );
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
  //messenging functionality
  async sendMessage(messege) {
    try {
      let newMessege = await this.#_database.createDocument(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteMessegesCollectionID,
        ID.unique(),
        messege
      );
      return newMessege;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getUserRooms(email) {
    try {
      const user = await this.getUserByEmail(email);
      let rooms = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteRoomsCollectionID
      );
      rooms = rooms.documents;
      const usersRooms = rooms.filter(item => {
        if (item?.members?.includes(user?.$id)) {
          return item;
        } else {
          return false;
        }
      });
      return usersRooms;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const appwriteService = new AppWriteService();
