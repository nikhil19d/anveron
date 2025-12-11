import clientPromise from '@/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'
import { calendar_v3, google } from 'googleapis'
import { calendar } from '@/lib/googleClient'
import { convertTo24Hour } from '@/lib/time'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const FormSchemea = z.object({
  fullName: z.string().min(1),
  email: z.string().includes('.com'),
  websiteUrl: z.string().includes('.com'),
  challenge: z.string(),
  preferredDate: z.string(),
  preferredTime: z.string(),
  auditType: z.string()
})

export const POST = async (req: NextRequest, { params }: { params: Promise<{ action: string }> }) => {
  try {
    const { action } = await params
    const client = await clientPromise
    const db = client.db()

    if (action === 'audit') {
      const form = FormSchemea.parse(await req.json())
      await db.collection('audit').insertOne(form)
      const eventStartTime = new Date(`${form.preferredDate}T${convertTo24Hour(form.preferredTime)}:00`);
      const eventEndTime = new Date(eventStartTime);
      if (form.auditType === "detailed") eventEndTime.setHours(eventEndTime.getHours() + 1); // 1-hour meeting
      else eventEndTime.setMinutes(eventEndTime.getMinutes() + 30)
      const event: calendar_v3.Schema$Event = {
        summary: 'Scheduled Meeting',
        description: 'Auto-generated meeting',
        start: { dateTime: eventStartTime.toISOString(), timeZone: 'Asia/Kolkata' },
        end: { dateTime: eventEndTime.toISOString(), timeZone: 'Asia/Kolkata' },
        attendees: [{ email: form.email }],
        conferenceData: {
          createRequest: { requestId: `meet-${Date.now()}` },
        },
      };

      const response = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: event,
        conferenceDataVersion: 1
      })
      const meetLink = response.data.hangoutLink;
      // ✅ 2. Send email with Meet link
      const oAuth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        "http://localhost:3000/api/auth/callback/google"
      );
      oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
      const accessTokenResponse = await oAuth2Client.getAccessToken();
      const accessToken = accessTokenResponse.token
      if (!accessToken) throw new Error("Failed to get access token");
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.GMAIL_USER,
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
          accessToken
        },
        tls: {
          rejectUnauthorized: false
        }
      })
      await transporter.sendMail({
        from: `Anveron <${process.env.GMAIL_USER}>`,
        to: form.email,
        subject: 'Your Google Meet Link',
        html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color:#0077ff;">Thanks ${form.fullName}! We’ve received your request 🚀</h2>
        <p>Hi ${form.fullName},</p>
        <p>Thank you for reaching out to <b>Anveron</b>!<br>We’ve received your request and are excited to learn more about your project.</p>
        <h3>Here’s what we got from you:</h3>
        <p>
          <b>Email:</b> ${form.email}<br>
          <b>Website / Product Link:</b> ${form.websiteUrl}<br>
          <b>Your Biggest Challenge:</b> ${form.challenge}<br>
        </p>

        <h3>Scheduled Call:</h3>
        <p>📅 <b>Date:</b> ${form.preferredDate}<br>
        ⏰ <b>Time:</b> ${form.preferredTime}</p>

        <p>Our team will use this call to understand your product, users, and goals in depth — 
        so we can plan a UX strategy tailored specifically for your needs.</p>

        <p>Meet Link : <a href=${meetLink}>${meetLink}</a>
        <ul>
          <li>We’ll discuss your challenge, analyze your goals, and explore possible solutions in this Meet.</li>
        </ul>

        <p>If you have any questions before the call, feel free to reply to this email — we’re here to help.</p>

        <p>Looking forward to connecting soon!</p>
        <br>
        <p>Warm regards,<br>
        <b>Team Anveron</b><br>
        Design that understands your users.<br>
        🌐 <a href="https://anveron.vercel.app">anveron.vercel.app</a><br>
        </p>
      </div>
      `
      });
      return NextResponse.json({
        message: 'success'
      })
    } else if (action == 'build') {
      const form = await req.json()
      await db.collection('build').insertOne(form)
      return NextResponse.json({
        message: 'success'
      })
    } else if (action == 'rebuild') {
      const form = await req.json()
      await db.collection('rebuild').insertOne(form)
      return NextResponse.json({
        message: 'success'
      })
    }
    return NextResponse.json({
      message: 'invalid params'
    })
  } catch (e) {
    return NextResponse.json({
      message: e
    })
  }
}
