const express = require('express');
const robot = require('robotjs');
const app = express();

app.use(express.json());

app.post('/move', (req, res) => {
    const { deltaX, deltaY } = req.body;

    const mouse = robot.getMousePos();

    robot.moveMouse(mouse.x + deltaX, mouse.y + deltaY);

    res.send('Mouse moved');
});

app.post('/click', (req, res) => {
    robot.mouseClick('left');
    res.send('Left mouse clicked');
});

app.post('/right-click', (req, res) => {
    robot.mouseClick('right');
    res.send('Right mouse clicked');
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
