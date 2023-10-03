## SVG feTurbulence filter to achieve cloud effect

Use the SVG feTurbulence filter to achieve the cloud effect.

### key point

The SVG `<feTurbulence>` filter enables semi-transparent smokey or wavy images. Usually used to implement some special textures. This effect uses `<feTurbulence>` to blend the color background and simulate the cloud effect.

HTML：

```
<div id="cloud"></div>

<svg width="0">
  <filter id="filter">
    <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
    <feDisplacementMap in="SourceGraphic" scale="240" />
  </filter>
</svg>
```

SCSS：
```scss
html, body { 
  margin: 0; 
}
body:after {
  content: 'click to update';
  font-size: .8em;
  color: rgba(0, 0, 0, .3);
  position: fixed;
  width: 100%;
  bottom: 1em;
  text-align: center;
}

#cloud {
  overflow: hidden;
  width: 1px; height: 1px;
  transform: translate(-100%, -100%);
  border-radius: 50%;
  filter: url(#filter);
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="svg-feturbulence-clouds" src="https://codepen.io/dvha/embed/KKbxMBG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/KKbxMBG">
  svg-feturbulence-clouds</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>