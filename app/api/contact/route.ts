import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the input
    const validatedData = contactSchema.parse(body)
    
    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to a database
    // 3. Send a notification
    
    // For now, we'll just log it and return success
    console.log('Contact form submission:', validatedData)
    
    // Example: Send email using Nodemailer (uncomment and configure)
    /*
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      // Configure your email service
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'vilohithg@gmail.com',
      subject: `Portfolio Contact: ${validatedData.name}`,
      text: validatedData.message,
      replyTo: validatedData.email,
    })
    */
    
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

