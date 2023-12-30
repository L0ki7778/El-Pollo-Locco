let backGroundArr = [];
let cloudArr = [];

function fill_backgroundObjects(){
    for (let i = 0; i <= 4; i++) {
        backGroundArr.push(new Sky(720 * i, 0));
        backGroundArr.push(new BackgroundThree(720 * i, this.y - 1));
        backGroundArr.push(new BackgroundTwo(720 * i, this.y - 1));
        backGroundArr.push(new BackgroundOne(720 * i, this.y - 1));
    }
};

function fill_clouds(){
    for (let i = 0; i < 6; i++) {
        cloudArr.push(new Clouds(Math.random() * (700) + (i * 720), Math.random() * 100));
        cloudArr.push(new Clouds(Math.random() * (700) + (i * 720), Math.random() * 100));
        cloudArr.push(new Clouds2(Math.random() * (700) + (i * 720), Math.random() * 100));
        cloudArr.push(new Clouds2(Math.random() * (700) + (i * 720), Math.random() * 100));
    }
}

fill_backgroundObjects();
fill_clouds();



const level1 = new Level (
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    backGroundArr,
    cloudArr
)
