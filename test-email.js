const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('Testing SMTP connection...');
  console.log('Host:', process.env.SMTP_HOST);
  console.log('User:', process.env.SMTP_USER);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection configuration
    await transporter.verify();
    console.log('Server is ready to take our messages (SMTP connection successful)');

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'arundevv.com@gmail.com',
      subject: 'Test Email from Script',
      text: 'This is a test email sent directly from the Node.js script to verify SMTP credentials.',
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent successfully! Message ID:', info.messageId);
  } catch (error) {
    console.error('Error during SMTP test:', error);
  }
}

testEmail();
