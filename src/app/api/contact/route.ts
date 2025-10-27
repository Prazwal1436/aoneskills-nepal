import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration with multiple fallback strategies
let transporter: nodemailer.Transporter;

const smtpPort = parseInt(process.env.SMTP_PORT || '465');
const isSecurePort = smtpPort === 465;

try {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: smtpPort,
    secure: isSecurePort, // true for port 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: 'SSLv3'
    },
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000, // 30 seconds  
    socketTimeout: 60000, // 60 seconds
    debug: true, // Enable debugging
    logger: true // Enable logging
  });
} catch (error) {
  console.error('Failed to create transporter:', error);
  // Fallback transporter
  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Log environment variables (without sensitive data)
    console.log('SMTP Configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? 'configured' : 'missing',
      pass: process.env.SMTP_PASS ? 'configured' : 'missing',
      admin: process.env.ADMIN_EMAIL
    });

    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      subject,
      budget,
      timeline,
      message,
      timestamp,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Format the submission data
    const submissionTime = new Date(timestamp).toLocaleString('en-US', {
      timeZone: 'Asia/Kathmandu',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Create email content for admin notification
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🎉 New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">A.One Skills Tech Solutions Pvt Ltd</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 25px;">
            <h2 style="color: #334155; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px;">Client Information</h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div>
                <strong style="color: #475569;">👤 Name:</strong><br>
                <span style="color: #64748b;">${name}</span>
              </div>
              <div>
                <strong style="color: #475569;">📧 Email:</strong><br>
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
              </div>
              <div>
                <strong style="color: #475569;">📱 Phone:</strong><br>
                <a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a>
              </div>
              <div>
                <strong style="color: #475569;">🏢 Company:</strong><br>
                <span style="color: #64748b;">${company || 'Not specified'}</span>
              </div>
            </div>
          </div>

          <div style="margin-bottom: 25px;">
            <h3 style="color: #334155; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px;">Project Details</h3>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div>
                <strong style="color: #475569;">🎯 Service:</strong><br>
                <span style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${subject}</span>
              </div>
              <div>
                <strong style="color: #475569;">💰 Budget:</strong><br>
                <span style="background: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${budget || 'Not specified'}</span>
              </div>
              <div>
                <strong style="color: #475569;">⏰ Timeline:</strong><br>
                <span style="background: #fef3c7; color: #92400e; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${timeline || 'Not specified'}</span>
              </div>
            </div>
          </div>

          <div style="margin-bottom: 25px;">
            <strong style="color: #475569;">💬 Message:</strong><br>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #3b82f6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h4 style="color: #475569; margin: 0 0 10px 0;">📊 Submission Details</h4>
            <div style="font-size: 14px; color: #64748b;">
              <p style="margin: 5px 0;"><strong>Time:</strong> ${submissionTime}</p>
              <p style="margin: 5px 0;"><strong>Source:</strong> Contact Form</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
            <a href="tel:${phone}" style="background: #10b981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-right: 10px; display: inline-block;">📞 Call Client</a>
            <a href="mailto:${email}" style="background: #3b82f6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">📧 Reply via Email</a>
          </div>
        </div>
      </div>
    `;

    // Create confirmation email for client
    const clientEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Thank you for contacting us!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">A.One Skills Tech Solutions Pvt Ltd</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="color: #334155; font-size: 16px; line-height: 1.6;">Dear ${name},</p>
          
          <p style="color: #64748b; line-height: 1.6;">Thank you for reaching out to A.One Skills Tech Solutions Pvt Ltd! We have received your inquiry about <strong>${subject}</strong> and our team will review your requirements carefully.</p>
          
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0;">What happens next?</h3>
            <ul style="color: #1e3a8a; margin: 0; padding-left: 20px;">
              <li>Our expert team will review your project details within 2-4 hours</li>
              <li>We'll contact you within 24 hours via phone or email</li>
              <li>Schedule a free consultation to discuss your requirements</li>
              <li>Receive a detailed proposal with timeline and pricing</li>
            </ul>
          </div>

          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #334155; margin: 0 0 10px 0;">Your Submission Summary:</h4>
            <div style="color: #64748b;">
              <p><strong>Service:</strong> ${subject}</p>
              <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
              <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
              <p><strong>Submitted:</strong> ${submissionTime}</p>
            </div>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #64748b; margin-bottom: 20px;">Need immediate assistance?</p>
            <a href="tel:+977-9842747572" style="background: #10b981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-right: 10px; display: inline-block;">📞 Call: +977-9842747572</a>
            <a href="https://wa.me/9779842747572" style="background: #059669; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">💬 WhatsApp</a>
          </div>

          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
            <p style="color: #92400e; margin: 0; font-weight: bold;">🎉 Special Offer: Get 15% off your first project when you respond within 7 days!</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          
          <div style="text-align: center; color: #64748b; font-size: 14px;">
            <p>A.One Skills Tech Solutions Pvt Ltd<br>
            Damak, Koshi Province, Nepal<br>
            📧 info@aoneskills.com.np | 📱 +977-9842747572</p>
          </div>
        </div>
      </div>
    `;

    // Verify SMTP connection before sending
    console.log('Verifying SMTP connection...');
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      
      // Try to recreate transporter with different settings
      console.log('Attempting to recreate transporter...');
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.hostinger.com',
        port: 587, // Try port 587 instead
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      
      // Verify again
      await transporter.verify();
      console.log('SMTP connection verified with fallback settings');
    }

    // Send admin notification email
    console.log('Sending admin notification email...');
    const adminResult = await transporter.sendMail({
      from: `"Contact Form - A.One Skills" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || 'info@aoneskills.com.np',
      subject: `🚀 New Contact Form: ${subject} - ${name}`,
      html: adminEmailContent,
      replyTo: email,
    });
    console.log('Admin email sent:', adminResult.messageId);

    // Send client confirmation email
    console.log('Sending client confirmation email...');
    const clientResult = await transporter.sendMail({
      from: `"A.One Skills Tech Solutions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting A.One Skills - ${subject}`,
      html: clientEmailContent,
    });
    console.log('Client email sent:', clientResult.messageId);

    // Log successful submission
    console.log('Contact form submission received:', {
      name,
      email,
      subject,
      timestamp: submissionTime,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will contact you within 24 hours.',
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Provide more specific error information
    let errorMessage = 'Sorry, there was an error sending your message. Please try again or contact us directly at +977-9842747572.';
    
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        code: (error as any).code,
        command: (error as any).command
      });
      
      // Handle specific SMTP errors
      if ((error as any).code === 'EAUTH') {
        errorMessage = 'Email configuration error. Please contact us directly at +977-9842747572 or info@aoneskills.com.np';
      } else if ((error as any).code === 'ECONNECTION') {
        errorMessage = 'Connection error. Please try again in a moment or contact us directly at +977-9842747572';
      }
    }
    
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}

// Handle GET requests (for health check and debugging)
export async function GET() {
  try {
    // Test SMTP configuration without sending actual email
    const testConfig = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      userConfigured: !!process.env.SMTP_USER,
      passConfigured: !!process.env.SMTP_PASS,
      adminEmail: process.env.ADMIN_EMAIL,
    };

    // Try to verify connection
    try {
      await transporter.verify();
      return NextResponse.json({
        status: 'Contact API is running',
        smtpStatus: 'Connected successfully',
        config: testConfig,
        timestamp: new Date().toISOString(),
      });
    } catch (smtpError) {
      return NextResponse.json({
        status: 'Contact API is running',
        smtpStatus: 'Connection failed',
        error: smtpError instanceof Error ? smtpError.message : 'Unknown error',
        config: testConfig,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 'Contact API error',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    });
  }
}