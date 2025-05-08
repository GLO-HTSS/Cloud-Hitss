export default {
  creds: {
    identityMetadata: `https://login.microsoftonline.com/${process.env.TENANT_ID}/v2.0/.well-known/openid-configuration`,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUrl:
      process.env.REDIRECT_URL || "http://localhost:3000/auth/callback",
    responseType: "code",
    responseMode: "query",
    scope: ["profile", "email"],
  },
};
