## SVG feTurbulence filter implements fault button click effect

Use the SVG feTurbulence filter to achieve a glitchy button click effect.

### key point

The SVG `<feTurbulence>` filter enables semi-transparent smokey or wavy images. Usually used to implement some special textures. This effect is applied to the background color through `<feTurbulence>` and combined with animation effects to achieve the glitch button click effect.


HTML：

```
<div class="fe1">Button</div>
<div class="fe1 hover">Button</div>
<div class="fe2">Button</div>
<div class="fe2 hover">Button</div>
<svg>
    <defs>
        <filter id="fe1">
            <feTurbulence id="animation" type="fractalNoise" baseFrequency="0.00001 9.9999999" numOctaves="1" result="warp">
                <animate attributeName="baseFrequency" from="0.00001 9.9999" to="0.00001 0.001" dur="2s" repeatCount="indefinite"/>
            </feTurbulence>
            <feOffset dx="-90" dy="-90" result="warpOffset"></feOffset>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset"></feDisplacementMap>
        </filter>
        <filter id="fe2">
            <feTurbulence id="animation" type="fractalNoise" baseFrequency="9.9999999 0.00001" numOctaves="1" result="warp">
                <animate attributeName="baseFrequency" from="9.9999999 0.00001" to="0.009 0.00001" dur="2s" repeatCount="indefinite"/>
            </feTurbulence>
            <feOffset dx="-90" dy="-90" result="warpOffset"></feOffset>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset"></feDisplacementMap>
        </filter>
    </defs>
</svg>
```

SCSS：
```scss
body, html {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

div {
    width: 200px;
    height: 64px;
    margin: 10px;
    line-height: 64px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    background: #673ab7;
    cursor: pointer;
    transform: translateZ(0);
    outline: 200px solid transparent;
    // filter: url(#filter-turbulence);
}

.fe1:hover {
    filter: url(#fe1);
}

.fe2 {
    border-radius: 64px;
}

.fe2:hover {
    filter: url(#fe2);
}

.fe1.hover {
    filter: url(#fe1);
}
.fe2.hover {
    filter: url(#fe2);
}

svg {
    position: absolute;
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="svg-feturbulence-btn-glitch" src="https://codepen.io/dvha/embed/mdaGEjm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/mdaGEjm">
  svg-feturbulence-btn-glitch</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>