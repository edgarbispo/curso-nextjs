export default function handler(req, res) {
    const id = +req.query.id
    res.status(200).json({
        id: id,
        nome: `João Almeida ${id}`,
        email: `jjjadfads${id}@gamil.com`
    })
}