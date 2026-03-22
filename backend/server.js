import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app  = express()
const PORT = process.env.PORT || 3001

/* ── Middleware ─────────────────────────────────────── */
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}))
app.use(express.json())

/* ── Health check ───────────────────────────────────── */
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

/* ── Contact form ───────────────────────────────────── */
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message too long (max 2000 chars).' })
  }

  try {
    // Configure transporter — uses Gmail app password by default.
    // Set SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS in .env to use
    // any other provider (Resend, Mailgun, SendGrid SMTP, etc.)
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   || 'smtp.gmail.com',
      port:   parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text:    `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
          <h2 style="color:#a78bfa;margin-bottom:4px">New portfolio message</h2>
          <p style="color:#9896b4;font-size:13px;margin-top:0">via yannfp.github.io</p>
          <hr style="border-color:#1e1c30;margin:16px 0"/>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border-color:#1e1c30;margin:16px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    })

    return res.json({ ok: true, message: 'Message sent.' })
  } catch (err) {
    console.error('[contact]', err.message)
    return res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
})

/* ── Start ──────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
