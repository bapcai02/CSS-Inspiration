## Use SVG feTurbulence filter and filter: blur to implement Hongmeng LOGO

Use SVG feTurbulence filter and filter: blur to implement Hongmeng LOGO

### key point

+ filter application
+ Application of SVG feTurbulence filter

### linear gradient
HTML：
```HTML
<div class="g-container">
    <div class="g-top"></div>
    <div class="g-bottom"></div>
    <p>Harmony <span>O</span>S</p>
</div>
<svg>
    <filter id="fractal" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence id="turbulence" type="fractalNoise" baseFrequency="0.02 0.02" numOctaves="5">
            <animate
                 attributeName="baseFrequency"
                 dur="20s" 
                 values="0.02 0.02;0.022 0.15;0.02 0.02"
                 repeatCount="indefinite" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
    </filter>
</svg>
```
CSS：
```CSS
p {
    font-size: 36px;
    color: #fff;
    text-align: center;
    margin-top: 12px;
    
    span {
        display: inline-block;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 18px;
            left: 50%;
            transform: translate(-50%, 4px);
            border-bottom: 4px solid #2d60aa;
        }
    }
}

svg {
    position: absolute;
}

.g-top {
    position: relative;
    width: 220px;
    height: 110px;
    background: #000;
    overflow: hidden;
    
    &::before {
        content: "";
        position: absolute;
        border-radius: 50%;
        top: 10px;
        left: 10px;
        right: 10px;
        width: 200px;
        height: 200px;
        box-sizing: border-box;
        border: 25px solid #fff;
        box-shadow: 
            0 0 4px 1px rgba(255, 255, 255, .8),
            0 0 8px 2px rgba(255, 255, 255, .6);
    }
}
.g-bottom {
    position: relative;
    width: 220px;
    height: 120px;
    background: #000;
    overflow: hidden;
    filter: url(#fractal);
    
    &::before {
        content: "";
        position: absolute;
        border-radius: 50%;
        top: 0;
        left: 10px;
        right: 10px;
        width: 200px;
        height: 200px;
        box-sizing: border-box;
        border: 25px solid #fff;
        z-index: 10;
        box-shadow: 
            0 0 4px 1px rgba(255, 255, 255, .8),
            0 0 8px 2px rgba(255, 255, 255, .6);
        transform: translate(0, -100px);
        filter: blur(4px);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="svg-feTurbulence-harmony-logo" src="https://codepen.io/dvha/embed/mdaGEzw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/mdaGEzw">
  svg-feTurbulence-harmony-logo</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>