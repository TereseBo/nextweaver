
//Route for actions on single weaves owned by a user
import { auth } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';
import { Db } from 'mongodb';
import { NextResponse } from 'next/server';

import { dbConnection } from '@/database/mongodb'
import { Draft } from '@/database/types/documents'
export async function GET(
    req: Request,

) {
    const { userId } = auth();
    if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        const db = await dbConnection() as Db
        let dbResponse = await db.collection('drafts').findOne({userId:userId})
        console.log(dbResponse)
        if(!dbResponse){
            return new NextResponse('No such weave found', { status: 204 });
        }
        console.log(dbResponse.weave)
        let weaveObject=dbResponse.weave

        return NextResponse.json({weaveObject}, { status: 200 });
    } catch (error) {
        console.log('api/filehandler', error);
        return new NextResponse(
            'Ooops, something went wrong when getting the route',
            { status: 500 }
        );
    }
}

//Inserts a Draft in the draft collection
export async function POST(
    req: Request,

) {


    const { userId } = auth();
    if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {

        const db = await dbConnection() as Db
        const body = await req.json();
        const { weaveObject, user } = body.values
        let newDocument: Draft = { userId: userId, name: 'One', weave: weaveObject, created: Date.now(), updated: Date.now(), public: false }
        let dbResponse = await db.collection('drafts').insertOne(newDocument)
        console.log(dbResponse)

        return NextResponse.json('Successfully posted WEAVE at route api/weaves/', { status: 201 });
    } catch (error) {
        console.log('api/[user]/weaves/[tag]', error);
        return new NextResponse(
            'Ooops, something went wrong when posting the weave',
            { status: 500 }
        );
    }
}