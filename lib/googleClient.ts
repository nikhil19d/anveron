import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI // e.g. http://localhost:3000/api/auth/callback/google
);

// set refresh token (you’ll generate it once manually)
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

export const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
export const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
export { oauth2Client };
