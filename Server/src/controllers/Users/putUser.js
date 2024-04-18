const { Users } = require('./Server/src/db');

const editUserHandler = async (req, res) => {
    // Solo aceptamos solicitudes de tipo PUT
    if (req.method !== 'PUT') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { name, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Correo electrónico y contraseña son requeridos' });
    }

    try {
        const updatedUser = await Users.update({
            data: {
                name,
                email,
            },
        });

        // Enviar una respuesta exitosa con los datos actualizados del usuario
        res.json(updatedUser);
    } catch (error) {
        // Manejar errores (por ejemplo, error al actualizar en la base de datos)
        res.status(500).json({ error: 'Error al actualizar la cuenta' });
    }
};

export default editUserHandler;
