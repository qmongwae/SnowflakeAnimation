// 创建一个雪花对象
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 设置不同的动画持续时间
    snowflake.style.opacity = Math.random(); // 设置不同的透明度
    snowflake.innerText = '❅'; // 使用 ❄ 或其他雪花图标
    document.body.appendChild(snowflake);
    
    // 在动画结束后移除雪花元素
    snowflake.addEventListener('animationend', function() {
        snowflake.remove();
    });
}

// 控制雪花的数量
function createSnowflakes() {
    setInterval(createSnowflake, 500); // 每隔0.5秒生成一个雪花
}

createSnowflakes();
