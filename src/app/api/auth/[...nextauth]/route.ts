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
    signIn: "/", // optional, falls man manuell auf SignIn-Seite geht
    signOut: "/", // wird auf / geleitet
    error: "/",   // bei Fehler ebenfalls zurück zur Startseite
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Immer auf Startseite weiterleiten
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
