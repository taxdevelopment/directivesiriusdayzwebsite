import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/", // optional
    signOut: "/", // optional
    error: "/",   // optional
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Immer auf die Startseite weiterleiten
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
