import { Collection, MongoClient } from 'mongodb'



class MongoDatabase {
    //Connection url saved in .env
    url = process.env.DATABASE_URL as string

    //Active MongoDB client
    client:any

    //Name of database to use
    database = process.env.DATABASE_NAME;

    //collections
    collections: { users?: Collection, drafts?: Collection, looms?: Collection, reeds?: Collection,} = {}
  

    //Start connection
    async connect() {
        try {
            console.log('Attempting to connect to database.');
            this.client = await MongoClient.connect(this.url);
            console.log('Successfully connected to the database.');
        } catch (err) {
            console.log('database.js: 34', err);
        }

        this.setupCollections();
    }

   //closes the connection to the db
    async disconnect() {
        console.log('closing DB connection');
        await this.client.close();
    }

  //Sets up the collections
    setupCollections() {
        const db = this.client.db(this.database);

        
        this.collections.users = db.collection('users');
        this.collections.drafts = db.collection('drafts');
        this.collections.looms = db.collection('looms');
        this.collections.reeds = db.collection('reeds');
    }
}

const db:MongoDatabase = new MongoDatabase()

export { db }