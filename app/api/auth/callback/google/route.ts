
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    // Extract "code" query param
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');

    if (!code) {
      return NextResponse.json({ error: 'Missing authorization code' }, { status: 400 });
    }

    // Initialize OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    )

    // Exchange authorization code for tokens
    const { tokens } = await oauth2Client.getToken(code);

    // ✅ Set tokens to the client
    oauth2Client.setCredentials(tokens);

    // ✅ Return only serializable fields
    return NextResponse.json({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      expiry_date: tokens.expiry_date,
      tokens
    });
  } catch (e) {
    console.error('Error in Google OAuth callback:', e);
    const message = e instanceof Error ? e.message : "Unknown Error Occured"

    return NextResponse.json(
      { error: 'Internal Server Error', details: message },
      { status: 500 }
    );
  }
}

