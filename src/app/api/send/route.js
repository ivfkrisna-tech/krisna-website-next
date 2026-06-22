import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, enquiryType, message } = body;

    const data = await resend.emails.send({
      from: 'Website Form <onboarding@resend.dev>', 
      to: 'ivfkrisna@gmail.com', 
      subject: `New Form Submission: ${enquiryType}`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}