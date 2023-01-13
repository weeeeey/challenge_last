import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

// export const authOptions = {
//     provider: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID!,
//             clientSecret: process.env.GITHUB_SECRET!,
//         }),
//     ],
// };

// export default NextAuth(authOptions);

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
    callbacks: {
        session({ session, token, user }) {
            return session; // The return type will match the one returned in `useSession()`
        },
    },
});
