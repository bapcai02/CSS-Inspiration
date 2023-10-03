## Use filter:blur | filter:constrast to generate flame effect 2

Use filter:blur | filter:constrast to generate fire effects.

### key point 

For detailed information about this Demo, you can read:

----

HTML：

```pug
// pug
div.g-candle
    div.g-body
    div.g-fire-box
        div.g-fire
            -for(var i=0; i<200; i++)
                div.g-ball   
```

SCSS：
```scss
$count: 200;

html, body{
    height: 100%;
    background: #000;
    overflow: hidden;
    // filter: blur(1px) contrast(5);
}

.g-candle {
    position: aboslute;
    width: 400px;
    margin: 0 auto;
    height: 400px;
}

.g-body {
    position: relative;
    width: 100px;
    height: 300px;
    margin: 280px auto;
    // border: 1px solid #fff;
    background: linear-gradient(230deg, #ca9800, #573903, black 70%);
    z-index: 1;
    
    &::before {
        position: absolute;
        content: "";
        width: 100px;
        height: 40px;
        border-radius: 50%;
        // border: 1px solid #fff;
        box-sizing: border-box;
        top: -20px;
        background: radial-gradient(#a46800, #5c3104 45%, #905602 100%);
    }
    
    &::after {
        position: absolute;
        content: "";
        width: 4px;
        height: 48px;
        background: #fff;
        left: 50%;
        top: -22px;
        transform: translate(-50%, -50%);
        border-radius: 50% 50% 0 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, .8) 60%, #fff);
        opacity: .7;
        filter: blur(1px);
    }
}

.g-fire-box {
    position: absolute;
    top: 97px;
    left: 50%;
    width: 80px;
    height: 200px;
    transform: translate(-50%, -50%);
    filter: blur(2px) contrast(20);
}

.g-fire {
    position: absolute;
    top: 30px;
    left: 50%;
    border-radius: 45%;
    box-sizing: border-box;
    border: 120px solid #000;
    border-bottom: 120px solid transparent;
    transform: translate(-50%, 0) scaleX(.45);
    background-color: #761b00;
    // filter: blur(20px) contrast(30);

}

.g-ball {
    position: absolute;
    top: 60px;
    transform: translate(0, 0);
    background: #fa8763;
    border-radius: 50%;
    z-index: -1;
    mix-blend-mode: screen;
}

@for $i from 0 to $count {
    .g-ball:nth-child(#{$i}) {
        $width: #{random(50)}px;
        
        width: $width;
        height: $width;
        left: calc(#{(random(70))}px - 55px);
    }
    
    .g-ball:nth-child(#{$i}) {
        animation: movetop 1s linear -#{random(3000)/1000}s infinite;
    }
}

@keyframes movetop {
    0% {
        transform: translate(0, 0);
    }
    20% {
        transform: translate(0, 0);
    }
    87.7% {
        transform: translate(0, -170px);
        opacity: 0;
    }
    100% {
        transform: translate(0, -170px);
        opacity: 0;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="filter-fire-2" src="https://codepen.io/dvha/embed/VwqBGWQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/VwqBGWQ">
  filter-fire-2</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>