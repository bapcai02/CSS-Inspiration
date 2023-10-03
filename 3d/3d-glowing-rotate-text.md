## 3D light and shadow transformation text effect

Use CSS 3D to achieve light and shadow transformation text effects.

### key point

+ Set `transform-style: preserve-3d` to the parent element `div`, and set different `translateZ()` to each `<h1>` to achieve the 3D effect of the text
+ Assist some rotations and color changes to add color to the effect

HTML：
```
<div>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>  
</div>
```

SCSS：
```scss
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');

html,
body {
    width: 100%;
    height: 100%;
    background: #000;
    overflow: hidden;
    text-align: center;
    font-family: 'Rajdhani', sans-serif;
}

div {
    animation: wobble 5s ease-in-out infinite;
    transform-origin: center center;
    transform-style: preserve-3d;
/*     perspective: 500px; */
}

@keyframes wobble {
    0%,
    100% {
        transform: rotate3d(1, 1, 0, 40deg);
    }
    25% {
        transform: rotate3d(-1, 1, 0, 40deg);
    }
    50% {
        transform: rotate3d(-1, -1, 0, 40deg);
    }
    75% {
        transform: rotate3d(1, -1, 0, 40deg);
    }
}

h1 {
    position: absolute;
    display: block;
    width: 100%;
    top: 120px;
    font-size: 100px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(255, 100, 100, 1);
    text-shadow: 
        0 0 5px rgba(255, 0, 0, 1), 
        0 0 20px rgba(255, 0, 0, .8), 
        0 0 50px rgba(255, 0, 0, .6);
    animation: glow 10s ease-in-out infinite;
}

@keyframes glow {
    from {
        filter: hue-rotate(0);
    }
    to {
        filter: hue-rotate(360deg);
    }
}

h1:nth-child(2) {
    transform: translateZ(5px);
}
h1:nth-child(3) {
    transform: translateZ(10px);
}
h1:nth-child(4) {
    transform: translateZ(15px);
}
h1:nth-child(5) {
    transform: translateZ(20px);
}
h1:nth-child(6) {
    transform: translateZ(25px);
}
h1:nth-child(7) {
    transform: translateZ(30px);
}
h1:nth-child(8) {
    transform: translateZ(35px);
}
h1:nth-child(9) {
    transform: translateZ(40px);
}
h1:nth-child(10) {
    transform: translateZ(45px);
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="3d-glowing-rotate-text" src="https://codepen.io/dvha/embed/RwEBVJP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/RwEBVJP">
  3d-glowing-rotate-text</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>