import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET() {
  // Initialize Google OAuth client
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  // Define scopes for Gmail + Calendar
  const scopes = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/gmail.send',
    'https://mail.google.com/',
    'openid',
    'email',
    'profile'
  ];

  // Generate the authorization URL
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // 👈 ensures refresh token is included
    prompt: 'consent',      // 👈 forces consent screen again
    scope: scopes,
  });

  // Redirect user to Google login screen
  return NextResponse.redirect(url);
}
