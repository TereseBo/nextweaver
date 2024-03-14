
//Route for actions on single weaves owned by a user
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import { getDraft, saveDraft } from '../utils/handleWeave';

export async function GET(
    req: Request,

) {
    //Fetches one weave for the user
    const { userId } = auth();
    if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        const draft = await getDraft(userId)

        if (!draft) {
            return new NextResponse('You have no saved weaves', { status: 204 });
        }
        return NextResponse.json({ weaveObject:draft }, { status: 200 });

    } catch (error) {
        console.log('api/filehandler', error);
        return new NextResponse(
            'Ooops, something went very wrong on the server',
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
        const body = await req.json();
        const { weaveObject } = body.values
        const draft = await saveDraft(userId, weaveObject)


        return NextResponse.json('Successfully posted WEAVE at route api/weaves/', { status: 201 });
    } catch (error) {
        console.log('api/[user]/weaves/[tag]', error);
        return new NextResponse(
            'Ooops, something went wrong when posting the weave',
            { status: 500 }
        );
    }
}