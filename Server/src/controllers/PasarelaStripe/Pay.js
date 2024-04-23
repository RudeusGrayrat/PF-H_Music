const stripe = require('stripe')('sk_test_51P8CelRr76oXniAXLGUrXVbTsHOaQwkgXHpiFXCHTVPrl54VUVfPKFHEuSzrbodyGidjrJZy5GDEP8G71q6Lfd0800njl5MqcW');
const Pay = async (req, res) => {
    try {
        // const { id } = req.body;
        const subscription = await stripe.subscriptions.create({
            customer: "cus_PyBs4EfZBziNN5",
            items: [
                {
                    price: 'price_1P8FlSRr76oXniAXY5Q2kV9A',
                },
            ],
        });
        console.log(subscription)
        return res.status(200).json(subscription);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al pagar suscription' });
    }
}
module.exports = Pay;