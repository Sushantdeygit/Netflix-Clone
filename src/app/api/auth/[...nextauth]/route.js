import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
    })
    // ...add more providers here
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET

}
const handler=NextAuth(authOptions)
console.log(process.env.NEXT_PUBLIC_NEXTAUTH_SECRET)
export {handler as GET, handler as POST}