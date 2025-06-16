// src/pages/api/submit-form.js
// Puedes usar .js o .ts

export async function POST({ request, redirect }) {
  // Verificamos que la solicitud sea POST
  if (request.method !== 'POST') {
    return new Response('Método no permitido', { status: 405 });
  }

  try {
    // Obtenemos los datos del formulario
    const formData = await request.formData();

    // Accedemos a los campos individuales
    const nombre = formData.get('name');
    const email = formData.get('email');
    const mensaje = formData.get('message');

    // Aquí es donde harías algo con los datos:
    // - Guardarlos en una base de datos
    // - Enviarlos a un servicio de email (ej. Resend, Nodemailer)
    // - Guardarlos en un archivo (¡solo para desarrollo, no en producción!)
    // - Imprimirlos en la consola del servidor (para depuración)

    console.log('--- Datos del Formulario Recibidos ---');
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
    console.log('------------------------------------');

    // Puedes redirigir al usuario a una página de éxito o mostrar un mensaje
    // Si quieres redirigir:
    return redirect('/gracias');

    // O si quieres enviar una respuesta JSON:
    // return new Response(JSON.stringify({ message: 'Formulario enviado con éxito!' }), {
    //   status: 200,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });

  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return new Response('Error interno del servidor', { status: 500 });
  }
}