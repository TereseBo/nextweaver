import { NextResponse } from 'next/server';


export async function GET(
    req: Request,

) {
    try {

        return NextResponse.json('Reached route api/[user]/weaves/[tag]', { status: 200 });
    } catch (error) {
        console.log('api/[user]/weaves/[tag]', error);
        return new NextResponse(
            'Ooops, something went wrong when getting the route',
            { status: 500 }
        );
    }
}