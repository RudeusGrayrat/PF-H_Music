const stripe = require('stripe')('sk_test_51P8CelRr76oXniAXLGUrXVbTsHOaQwkgXHpiFXCHTVPrl54VUVfPKFHEuSzrbodyGidjrJZy5GDEP8G71q6Lfd0800njl5MqcW');

const Paied = async (req, res) => {
    try {
        const body = await req.text()

        console.log(body)
        return res.status(200).json(res);
    } catch (error) {
        // Manejar errores de validación de Sequelize
        console.error(error);
        res.status(500).json({ error: 'Error al ser premium' });

    }
};

module.exports = Paied;