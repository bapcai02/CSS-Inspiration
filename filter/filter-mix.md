## Filters and blending modes to mix and match special effects

Mix and match effects using filters and blending modes.

Used in this example:

+ filter: contrast()
+ filter: brightness() 
+ filter: blur()
+ background-blend-mode: multiply
+ mix-blend-mode: saturation

-------

HTML：
```html
<div class="halftone">
    <img src="https://avatars3.githubusercontent.com/u/8554143?s=460&v=4">
</div>
```

SCSS：
```scss
.halftone {
  position: absolute;
  width: 20vw;
  height: 20vw;
  background: white;
  top: 50%;
  left: 50%;
  filter: contrast(100000%);
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.halftone > img {
  width: 100%;
  height: 100%;
  filter: brightness(0.5) blur(4px);
  animation: 3s animation-filter infinite alternate;
}

.halftone::after {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  background-blend-mode: multiply;
  background: radial-gradient(8px 8px, cyan, white),
        radial-gradient(8px 8px, magenta, white),
        radial-gradient(8px 8px, yellow, white);
  background-size: 8px 8px;
  background-position: 0 -3px, -2px 0, 2px 0;
  mix-blend-mode: saturation;
  pointer-events: none;
  transform: rotate(11.25deg);
  transition: 1s ease-in-out transform;
  z-index: 1;
  animation: 3s animation-overlay infinite alternate;
}

@keyframes animation-overlay {
  0% {
    transform: rotate(450deg) scale(15);
  }

  100% {
    transform: rotate(-90deg);
  }
}

@keyframes animation-filter {
  0% {
    filter: brightness(0.5) blur(40px);
  }

  100% {
    filter: brightness(0.5) blur(4px);
  }
}

```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="filter-mix" src="https://codepen.io/dvha/embed/vYvazer?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/vYvazer">
  filter-mix</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>