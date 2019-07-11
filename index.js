const server = require('express')();

const PORT = process.env.PORT;

server.get('/', (req, res) => res.status(200).json('Hello Docker!'));

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
