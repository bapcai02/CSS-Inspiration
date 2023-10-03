## CSS-Doodle background + mask to achieve kaleidoscope effect

CSS-Doodle background + mask achieves kaleidoscope effect

### CSS-doodle

[css-doodle](https://github.com/css-doodle/css-doodle) is a library based on Web-Component. Allows us to quickly create pages based on CSS Grid layout to achieve various CSS effects (perhaps called CSS art).

HTML：

```HTML
<!-- https://css-doodle.com -->

<css-doodle>
  :doodle {
    @grid: 2 x 5;

  }
  
  width: 40vmin;
  height: 40vmin;
  
  --colorMain: rgb(@r(255), @r(255), @r(255));
  --colorSub: rgb(@r(255), @r(255), @r(255));

  position: relative;
  box-sizing: border-box;
  margin: 1vmin;
  border-radius: 50%;
  border:2px solid #666;
  box-shadow: 1px 1px 4px 2px #222;
  // background: conic-gradient(from @r(360)deg, var(--colorMain), transparent, var(--colorSub), transparent, var(--colorMain));
  background: var(--colorMain);
  overflow: hidden;
    
  :after {
    --angle: calc(360deg / @index);
    --start: @r(8, 30)px;
    --end: @r(24, 80)px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(@r(360)deg, var(--colorMain), var(--colorSub), var(--colorMain));
    mask: @m(@index, (
      repeating-linear-gradient(calc(var(--angle) * @n), #fff 0, #fff var(--start), transparent var(--start), transparent var(--end))
    ));
    -webkit-mask-composite: xor;
  }

</css-doodle>
```

SCSS：
```scss
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #333;
}
```

The effect is as follows(Click the image below to refresh the effect)：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-mask-composite" src="https://codepen.io/dvha/embed/VwqBBMK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/VwqBBMK">
  bg-mask-composite</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>