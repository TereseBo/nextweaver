//Route for actions on multiple weaves owned by a user

import { NextResponse } from 'next/server';

export async function GET(
    req: Request,

) {
    try {

        return NextResponse.json('Reached route api/public/weaves/[tag]', { status: 200 });
    } catch (error) {
        console.log('api/(user)/weaves/', error);
        return new NextResponse(
            'Ooops, something went wrong when getting the route',
            { status: 500 }
        );
    }
}