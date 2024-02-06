//Working?
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github';
// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`

export const authOptions: NextAuthOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
    ], // rest of your config
} //satisfies  NextAuthOptions

/* // Use it in server contexts
export function auth(...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, config)
} */