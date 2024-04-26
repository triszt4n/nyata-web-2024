import type { NextApiRequest, NextApiResponse } from "next";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!process.env.SENDGRID_API_KEY) throw new Error("No SendGrid API key found");
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ error: "No name or email given!" });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg: MailDataRequired = {
    to: 'nyata-vez@gszk.bme.hu',
    from: 'nyata2024-noreply@simonyi.bme.hu', // Use the email address or domain you verified above
    subject: '[nyata.hu] Új üzenet érkezett a weboldalon keresztül',
    html: `<div>
      <p>Üzenet érkezett egy érdeklődőtől a weboldalon keresztül.</p>
      <p><b>Név:</b> ${req.body.name}</p>
      <p><b>E-mail címe:</b> ${req.body.email}</p>
      <p><b>Üzenet szövege:</b> ${req.body.message}</p>
    </div>`,
    replyTo: req.body.email,
  };
  
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    if ((error as any)?.response) {
      console.error((error as any)?.response?.body)
    }
  }

  res.status(200).send("OK");
}
