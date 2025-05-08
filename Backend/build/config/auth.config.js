"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    creds: {
        identityMetadata: "https://login.microsoftonline.com/<TENANT_ID>/v2.0/.well-known/openid-configuration",
        clientID: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        redirectUrl: "http://localhost:3000/auth/callback",
        responseType: "code",
        responseMode: "query",
        scope: ["profile", "email"],
    },
};
