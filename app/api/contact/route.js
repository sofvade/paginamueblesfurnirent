export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log('Mensaje recibido:', { name, email, message });

  return Response.json({ success: true });
}
