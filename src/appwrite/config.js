import config from '../config/config.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'


export class Service{
    client = new Client();
    databases;
    bucket

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({id, title, detail, imageUrl, isActive, publishDate, closeDate}){
        try{
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionNoticeId,
                ID.unique(), {
                    title, detail, imageUrl, isActive, publishDate, closeDate
                }
            )
        }catch(error){
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async getPost(id){
        try{
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionNoticeId,
                id
            )
        }catch(error){
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }




}


const service = new Service();
export default Service;
