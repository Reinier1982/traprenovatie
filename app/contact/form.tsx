"use server";
import mailjet from "node-mailjet";

interface Request {
  body: {
    Messages: [
      {
        Status: string;
        CustomID: string;
        To: [];
        Cc: [];
        Bcc: [];
      }
    ];
  };
}

export async function submitForm(
  prevState: { message: string },
  formData: FormData
) {
  const sendMail = async (body: string) => {
    const emailData = {
      Messages: [
        {
          From: {
            Email: "thapegasus@gmail.com",
            Name: "Kompleettraprenovatie.nl Website",
          },
          To: [
            {
              Email: "info@kompleettraprenovatie.nl",
              Name: "Kompleet Trap Renovatie",
            },
          ],
          Subject: "Contactformulier Website",
          TextPart: body,
        },
      ],
    };
    try {
      const request: Request = await mailjet
        .apiConnect(
          process.env.MAILJET_API_PUBLIC_KEY as string,
          process.env.MAILJET_API_PRIVATE_KEY as string
        )
        .post("send", { version: "v3.1" })
        .request(emailData);
      console.log("body", request.body);
      const { Status } = request.body.Messages[0];
      console.log("S", Status);
      return Status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const body = formData.get("question");

  const mailBody = `
    Naam: ${name} \n
    E-mail: ${email} \n
    Telefoon: ${phone} \n
    Vraag: ${body} \n
  `;
  try {
    await sendMail(mailBody);
    return { message: "true" };
  } catch (e) {
    return { message: "false" };
  }
}
