import { ObjectId } from 'mongodb';
import * as mongoDB from 'mongodb'

interface User extends mongoDB.Document {
    _id: ObjectId;
    name: string
    userId:string
}

interface Draft extends mongoDB.Document {
    _id: ObjectId,
    userId: string,
    name: string,
    weave: WeaveObject,
    created: Date,
    updated: Date,
    public:Boolean
}

interface Loom extends mongoDB.Document {
    _id: ObjectId,
    userId: string,
    shafts: number,
    treadles: number,
    name: string,
}

interface Loom extends mongoDB.Document {
    _id: ObjectId,
    userId: string,
    dents:number,
    section:number,
    unit: 'cm'|'in',
    length:number
}