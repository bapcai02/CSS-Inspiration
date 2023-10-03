## Use filter:blur | filter:constrast to generate flame effects

Use filter:blur | filter:constrast to generate fire effects.

### key point 

In this example, two separate filters are taken out, and their functions are:

+ filter: blur(): Set a Gaussian blur effect to the image.
+ filter: contrast(): Adjust the contrast of the image.

However, when they "fit" together, a wonderful fusion phenomenon occurred. The contrast filter was used to remove the blurred edges of the Gaussian blur, and the Gaussian blur was used to achieve the fusion effect.

----

Let’s first take a look at the core code of Flame:

```css
.fire {
     width: 0;
     height: 0;
     border-radius: 45%;
     box-sizing: border-box;
     border: 100px solid #000;
     border-bottom: 100pxsolid transparent;
     background-color: #b5932f;
     transform: scaleX(.4);
     filter: blur(20px) contrast(30);
}
```

Let’s break down the process:

![](https://user-images.githubusercontent.com/8554143/30368522-f746afba-98a3-11e7-93b8-92e2e2c1c622.png)

Next, we only need to use a large number of black circles inside the flame .fire div to pass through the flame irregularly from bottom to top. The flame effect is created due to the blending effect of the filter.

In order to facilitate understanding here, I switched the background color to white. The principle of flame animation is easy to understand at a glance:

![](https://user-images.githubusercontent.com/8554143/30369622-bc2b3e6a-98a7-11e7-9422-170d6151c46c.gif)

-----

HTML:

```pug
// pug template
.g-container
    .g-fire
        - for (var j = 1; j <=40; j++)
            .g-dot
```

SCSS：
```scss
$douCount: 40;
$animationTime: 2;
$delayTime: 3;

@function randomNum($max, $min: 0) {
	@return ($min + random($max));
}

body {
    background: #000;
    overflow: hidden;
}

:root {
    --fireWidth: 115px;
    --fireHeight: 200px;
    --dotSize: 24px;
    --fireColor: #b5932f;
    // --fireColor: #008eff;
    // --fireColor: #ff9900;
    
}

.g-container {
    position: relative;
    width: 384px;
    height: 300px;
    margin: 0 auto;
    background-color: #000;
}

.g-fire {
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100px;
    left: 50%;
    border-radius: 45%;
    box-sizing: border-box;
    border: 200px solid #000;
    border-bottom: 200px solid transparent;
    transform: translate(-50%, 0) scaleX(.4);
    background-color: var(--fireColor);
    filter: blur(20px) contrast(30);
}

.g-dot {
    position: absolute;
    bottom: -210px;
    left: 0;
    width: var(--dotSize);
    height: var(--dotSize);
    background: #000;
    border-radius: 50%;
}

@for $i from 1 to $douCount + 1 {
    .g-dot:nth-child(#{$i}) {
        bottom: -#{randomNum(120, 240)}px;
        left: #{randomNum(300, -160)}px;
        animation: move #{randomNum($animationTime * 13, 7) / 10}s infinite #{randomNum($delayTime * 20) / 10}s linear;
    }
}

@keyframes move {
    100% {
        transform: translate3d(0, -350px, 0);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="filter-fire" src="https://codepen.io/dvha/embed/NWeBLgV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/NWeBLgV">
  filter-fire</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>