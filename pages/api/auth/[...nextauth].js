import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    provider: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
};

export default Index;
