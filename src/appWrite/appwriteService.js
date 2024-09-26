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
  async search(searchTerm, brand) {
    try {
      const titles = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.search('title', searchTerm)]
      );

      const brand = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.search('brand', searchTerm)]
      );
      const category = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.search('category', searchTerm)]
      );
      const tags = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.search('tags', searchTerm)]
      );
      console.log('tags', tags);

      const products = [];
      tags.documents?.forEach(item => {
        if (!products.some(product => product.$id === item.$id)) {
          products.push(item);
        }
      });

      titles.documents?.forEach(item => {
        if (!products.some(product => product?.$id === item.$id)) {
          products.push(item);
        }
      });
      brand.documents?.forEach(item => {
        if (!products.some(product => product.$id === item.$id)) {
          products.push(item);
        }
      });
      category.documents?.forEach(item => {
        if (!products.some(product => product.$id === item.$id)) {
          products.push(item);
        }
      });

      if (brand) {
        return brand.documents;
      }
      return products;
    } catch (error) {
      throw new Error(error);
    }
  }
  async flashSales() {
    try {
      const products = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.equal('flash', true)]
      );
      console.log('flash', products);

      return products.documents;
    } catch (error) {
      throw new Error(error);
    }
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
          products = await this.getProductsByCategory({ category });
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
  async filterProducts({ category, brands, tags }, email) {
    switch (category) {
      case 'recent':
        return await this.getRecentProducts(email);
      case 'flash':
        return await this.flashSales();
      case 'recommended':
        return await this.getRecommendedProducts({ tags, brands });
      case 'top-picks':
        return await this.getTopPicksProducts({ tags, brands });
      default:
        return await this.getProductsByCategory({ category, brands, tags });
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
  async getProductsByCategory({ category, tags, brands }) {
    try {
      const data = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.equal('category', category)]
      );
      if (tags) {
        console.log('tags present');
      }
      if (brands) {
        console.log('brands present');
      }

      return data?.documents;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getRecentProducts(email) {
    let products = [];
    if (!email) throw new Error('please provide email address');
    const user = await this.getUserByEmail(email);
    const viewed = [...user?.viewed];

    if (viewed.length === 0) {
      return [];
    }
    let index = 0;

    while (index < viewed.length - 1) {
      const product = await this.#_database.getDocument(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        viewed[index]
      );
      products.push(product);
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
      const product = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [
          Query.equal('$id', saved[index]),
          // Query.select(['category', '$id', 'images']),
        ]
      );
      products.push(product.documents[0]);
      index++;
    }
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
    let viewed = [...user?.viewed];
    if (!viewed.includes(id)) {
      // console.log('performing viewed operation');
      user = await this.#_database.updateDocument(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        userID,
        { viewed: [id, ...viewed] }
      );
    } else {
      // viewed = viewed.filter(item => item !== id);
      // viewed = [id, ...viewed];
      // console.log('already viewed. no operation performed,sorting insteaded');
    }

    return user.documents;
  }
  async getUserByID(userID) {
    try {
      const user = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        [Query.equal('$id', userID)]
      );
      return user.documents[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async getUserByEmail(email) {
    try {
      const user = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        [Query.equal('email', email)]
      );
      return user.documents[0];
    } catch (error) {
      throw new Error(error);
    }
  }

  async saveProduct(email, productID) {
    try {
      let user = await this.getUserByEmail(email);
      if (!user) {
        return null;
      }
      let saved = [...user?.saved];
      if (saved?.includes(productID)) {
        // console.log('product already saved,removing the item');
        saved = saved.filter(item => item !== productID);
      } else {
        // console.log('saving the products');
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
  async sendMessage(messege) {
    try {
      let newMessege = await this.#_database.createDocument(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteMessegesCollectionID,
        ID.unique(),
        messege
      );
      const { last_messege } = await this.#_database.updateDocument(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteRoomsCollectionID,
        messege?.roomID,
        { last_messege: messege?.body }
      );
      return { newMessege, last_messege };
    } catch (error) {
      throw new Error(error);
    }
  }
  async getRoomMesseges(roomID) {
    try {
      let messeges = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteMessegesCollectionID,
        [Query.equal('roomID', roomID)]
      );
      return messeges.documents;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getUserRooms(userID) {
    try {
      let rooms = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteRoomsCollectionID,
        [Query.contains('members', userID)]
      );
      return rooms.documents;
    } catch (error) {
      throw new Error(error);
    }
  }
  async createRoom(members) {
    try {
      let room = await this.#_database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteRoomsCollectionID,
        [
          Query.contains('members', members[0]),
          Query.contains('members', members[1]),
        ]
      );
      if (room.total === 0) {
        room = await this.#_database.createDocument(
          appwriteConfig.appWriteDatabase,
          appwriteConfig.appWriteRoomsCollectionID,
          ID.unique(),
          { members }
        );
        console.log('created a new room');
        return room;
      } else {
        console.log('room alreday exists');
        return room.documents[0];
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const appwriteService = new AppWriteService();
