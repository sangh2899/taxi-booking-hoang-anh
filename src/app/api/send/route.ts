import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const receivers = process.env.RECEIVERS?.split(',');

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.fullName || !body.phone || !body.destination || !body.date || !body.time || !body.carType) {
    return Response.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }
  try {
    const { data, error } = await resend.emails.send({
      from: 'ThueXeDuLichSG.com <no-reply@thuexedulichsg.com>',
      to: receivers || [],
      subject: "Khách hàng vừa đặt một chuyến xe mới. Hãy kiểm tra ngay!",
      react: EmailTemplate(body) as React.ReactElement,    
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}