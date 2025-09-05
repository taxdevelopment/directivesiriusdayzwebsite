import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const handler = NextAuth({
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
    async redirect({ baseUrl }) {
      // Immer auf Startseite weiterleiten
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
