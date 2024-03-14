//Function for handling a single weave
import { Db } from 'mongodb';

import { dbConnection } from '@/database/mongodb'
import { Draft } from '@/database/types/documents'

export async function getDraft(userId: string) {
    try {
        const db = await dbConnection() as Db
        let dbResponse = await db.collection('drafts').findOne({ userId: userId })
        console.log(dbResponse)
        if (dbResponse) {
            console.log(dbResponse.weave)
            let weaveObject = dbResponse.weave
            return weaveObject
        }else{
            return null
        }
    } catch (error) {
        return error
    }

}

export async function saveDraft(userId: string, weaveObject: WeaveObject) {
    try {
        const db = await dbConnection() as Db


        let newDocument: Draft = { userId: userId, name: 'One', weave: weaveObject, created: Date.now(), updated: Date.now(), public: false }
        let dbResponse = await db.collection('drafts').insertOne(newDocument)
        return dbResponse
    } catch (error) {
        return error
    }

}