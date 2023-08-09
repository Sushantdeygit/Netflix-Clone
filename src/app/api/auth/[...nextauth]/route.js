import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '180617725484-ba7scr1b1k0b1gfstdtb87vog0rab6g3.apps.googleusercontent.com',
      clientSecret:'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',
    }),
    GithubProvider({
      clientId: '2827640f4c6d5accda3c',
      clientSecret: 'dd43d1b7d615acdd514b7ecdb45a18aee50a280a'
    })
    // ...add more providers here
  ],
  secret: 'HSDFJSHKS'
}
const handler=NextAuth(authOptions)

export {handler as GET, handler as POST}