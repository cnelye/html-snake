var snake = document.querySelectorAll(".desktop-icon>i"); //
var snake_length = snake.length; // 赋值蛇的长度(赋值为变量，直接使用length为属性值，不便于后期修改)
var timer = null; // snake direct timer
var sleep = 500; // snake speed
var go_x; // 待移动坐标x
var go_y; // 待移动坐标y
var go_temp_x; // 临时坐标 x
var go_temp_y; // 临时坐标 y
var food_x; // 食物坐标 x
var food_y; // 食物坐标 y

setTimeout(function()
{
    for(var i = 0; i < snake.length; ++i)
    {
        snake[i].style.gridArea = (i + 1) + '/' + 1;
    }
}, 0);

function flush_food()
{
    var insert_to = document.getElementsByClassName('desktop-icon')[0];
    var food = document.createElement("i");
    var food_img = document.createElement("img");
    var food_text = document.createTextNode("food.txt");
    food_img.src = "img/desktop-icon/desktop-text.png"
    food.appendChild(food_img);
    food.appendChild(food_text);
    insert_to.appendChild(food);
    snake = document.querySelectorAll(".desktop-icon>i");
    food_x = Math.floor(Math.random()*18 + 1);
    food_y = Math.floor(Math.random()*8 + 1);
    setTimeout(function()
    {
        snake[snake.length - 1].style.gridArea = food_y + ' / ' + food_x;
    }, 0);
}

function food_ate()
{
    if((snake[0].style.gridColumn == food_x) && (snake[0].style.gridRow == food_y))
    {
        snake_length++;
        flush_food();
    }
}

document.body.onkeydown = function(x)
{
    var direct = x;

    switch (direct.keyCode)
    {
        //up
        case 38:
            clearInterval(timer);
            snake_go_up();
            break;
        //down
        case 40:
            clearInterval(timer);
            snake_go_down();
            break;
        //left
        case 37:
            clearInterval(timer);
            snake_go_left();
            break;
        //right
        case 39:
            clearInterval(timer);
            snake_go_right();
            break;
    }
}

// grid-area: y / x;

function snake_go_up()
{
    timer = setInterval(function()
    {
        i = snake[0].style.gridRow;
        go_x = snake[0].style.gridColumn;
        go_y = snake[0].style.gridRow;
        snake[0].style.gridRow = --i;
        food_ate();
        for(var n = 1; n < snake_length; ++n)
        {
            go_temp_x = snake[n].style.gridColumn;
            go_temp_y = snake[n].style.gridRow;
            snake[n].style.gridArea = go_y + " / " + go_x;
            go_x = go_temp_x;
            go_y = go_temp_y;
        };
    }, sleep);
}

function snake_go_down()
{
    timer = setInterval(function()
    {
        i = snake[0].style.gridRow;
        go_x = snake[0].style.gridColumn;
        go_y = snake[0].style.gridRow;
        snake[0].style.gridRow = ++i;
        food_ate();
        for(var n = 1; n < snake_length; ++n)
        {
            go_temp_x = snake[n].style.gridColumn;
            go_temp_y = snake[n].style.gridRow;
            snake[n].style.gridArea = go_y + " / " + go_x;
            go_x = go_temp_x;
            go_y = go_temp_y;
        };
    }, sleep);
}

function snake_go_left()
{
    timer = setInterval(function()
    {
        i = snake[0].style.gridColumn;
        go_x = snake[0].style.gridColumn;
        go_y = snake[0].style.gridRow;
        snake[0].style.gridColumn = --i;
        food_ate();
        for(var n = 1; n < snake_length; ++n)
        {
            go_temp_x = snake[n].style.gridColumn;
            go_temp_y = snake[n].style.gridRow;
            snake[n].style.gridArea = go_y + " / " + go_x;
            go_x = go_temp_x;
            go_y = go_temp_y;
        };
    }, sleep);
}

function snake_go_right()
{
    timer = setInterval(function()
    {
        i = snake[0].style.gridColumn;
        go_x = snake[0].style.gridColumn;
        go_y = snake[0].style.gridRow;
        snake[0].style.gridColumn = ++i;
        food_ate();
        for(var n = 1; n < snake_length; ++n)
        {
            go_temp_x = snake[n].style.gridColumn;
            go_temp_y = snake[n].style.gridRow;
            snake[n].style.gridArea = go_y + " / " + go_x;
            go_x = go_temp_x;
            go_y = go_temp_y;
        };
    }, sleep);
}