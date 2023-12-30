const level1 = new Level(
    [
        new Chicken(Math.random() * 500 + 200, 395),
        new Chicken(Math.random() * 500 + 200, 395),
        new Chicken(Math.random() * 500 + 200, 395),
        new endBoss(Math.random() * 500 + 200, 170),
    ],

    [
        new Clouds(Math.random() * 700, Math.random() * 150),
        new Clouds(Math.random() * 700, Math.random() * 150),
        new Clouds2(Math.random() * 700, Math.random() * 150),
        new Clouds2(Math.random() * 700, Math.random() * 150),
        new Clouds(Math.random() * 700+350, Math.random() * 150),
        new Clouds(Math.random() * 700+350, Math.random() * 150),
        new Clouds2(Math.random() * 700+350, Math.random() * 150),
        new Clouds2(Math.random() * 700*+350, Math.random() * 150),
    ],

    [
        new BackgroundBackLayer(0,this.y,500,720,0.625),
        new BackgroundMiddleLayer(0,this.y,380,720,1),
        new BackgroundFrontLayer(0,this.y,320,720,2.5)
    ]
); 