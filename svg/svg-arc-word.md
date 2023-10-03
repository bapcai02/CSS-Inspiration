## SVG draws arc text

SVG draws arc text.

HTML：

```html
<div class="circle-word">
    <svg width="400px" height="300px" viewBox="0 0 400 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<defs>
            <path id="textCircle" d="M 20 100 A 80 80 0 0 0 180 100 A 80 80 0 0 0 20 100" fill="none" stroke="#333"></path>
        </defs>
        <text class="textCircle" fill="yellowgreen">
            <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#textCircle">This is a piece of text drawn along with the path</textPath>
        </text>
    </svg>
</div>
```

SCSS：
```scss
.circle-word {
    position: absolute;
    width: 400px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.textCircle {
    font-size: 20px;
    letter-spacing: 4px;
}
.textCircle2 {
    font-size: 12px;
    letter-spacing: 1px;
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="svg-arc-word" src="https://codepen.io/dvha/embed/MWZqeGZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/MWZqeGZ">
  svg-arc-word</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>