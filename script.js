// Создаем канвас элемент
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Создаем массив точек
var points = [];
for (var i = 0; i < 100; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1
    });
}

// Функция для отрисовки кадра
function draw() {
    // Закрашиваем канвас черным цветом
    ctx.fillStyle = '#0c1f36';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Отрисовываем точки
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#5bc0de';
        ctx.fill();

        // Обновляем координаты точек
        point.x += point.vx;
        point.y += point.vy;

        // Отталкиваем точки от границ канваса
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
    }

    // Запускаем функцию снова на следующем кадре
    requestAnimationFrame(draw);
}

// Запускаем анимацию
draw();