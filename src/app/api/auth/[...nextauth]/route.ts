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
    signIn: "/",
    signOut: "/",
    error: "/",
  },
  callbacks: {
    async redirect({ baseUrl }) {
      // Immer auf Startseite weiterleiten
      return baseUrl;
    },
  },
});

// Für App-Router muss man explizit GET/POST exportieren
export { handler as GET, handler as POST };
