'use strict';

const trees = [
    {
        name: "apple",
        born: "2021.04.03",
        owner: "hako"
    },
    {
        name: "lemon",
        born: "2021.05.03",
        owner: "hako"
    },
    {
        name: "cherry",
        born: "2021.06.03",
        owner: "hako"
    },
];

const tree = {
    name: "naranja",
    born: "2021.01.01",
    owner: "hako"
}

module.exports = function (app) { //param - express
    app.route('/tree')
        .get((req, res) => res.json(tree))
        .post((req, res) => createTree(req, res));
    
    app.route('/tree/:name')
        .get((req, res) => findTree(req, res));
    
    app.route('/trees')
        .get((req, res) => res.json(trees));
}

const createTree = (req, res) => {
    const { name } = req.body;
    console.log(name);
    res.send(tree);
}

const findTree = (req, res) => {
    const result = trees.filter((tree) => tree.name === req.params.name);
    res.json(result);
}

