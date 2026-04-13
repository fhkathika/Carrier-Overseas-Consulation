import connectDB from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, phone, message } = body;

    const newContact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    return Response.json(
      { success: true, data: newContact },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}