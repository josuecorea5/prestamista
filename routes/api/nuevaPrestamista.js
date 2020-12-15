const { Router } = require('express');
const NuevaPrestamista = require('../../models/NuevaPrestamista');

const router = Router();

router.get('/', async(req, res) => {
    try {
        const nuevaPrestamista = await NuevaPrestamista.find();
        if (!nuevaPrestamista) throw new Error('No se han obtenido los datos del prestamista')
        const DatosOrdenados = nuevaPrestamista.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        res.status(200).json(DatosOrdenados)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/:id', async(req, res) => {
    const nuevaPrestamista = await NuevaPrestamista.findById(req.params.id);
    res.json(nuevaPrestamista)

})


router.post('/', async(req, res) => {
    const newNuevaPrestamista = new NuevaPrestamista(req.body);
    try {
        const nuevaPrestamista = await newNuevaPrestamista.save();
        if (!nuevaPrestamista) throw new Error('Ha ocurrido un error en el momento de guardar los datos')
        res.status(200).json(nuevaPrestamista);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const Borrar = await NuevaPrestamista.findByIdAndRemove(id);
        if (!Borrar) throw Error('Ha ocurrido un error en el momento de borrar los datos')
        res.status(200).json(Borrar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async(req, res) => {
    const { Nombres, Apellidos, DUI, Monto_Prestado, Intereses, Plazo_Pago } = req.body;
    const actualizar = await NuevaPrestamista.findByIdAndUpdate(req.params.id, { Nombres, Apellidos, DUI, Monto_Prestado, Intereses, Plazo_Pago });
    res.status(200).json(actualizar)
});

module.exports = router;