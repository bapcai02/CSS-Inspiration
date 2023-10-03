## SVG text hover line animation

SVG text hover line animation.

### key point

Used `stroke-dasharray` and `stroke-dashoffset` to control line animation.

For details, you can read this article of mine:

[[Web Animation] Introduction to SVG Line Animation](https://www.cnblogs.com/coco1s/p/6225973.html)

HTML：

```html
<svg viewBox="0 0 400 200">
	<text x="0" y="70%"> Lorem </text>
</svg>	
```

SCSS：
```scss

svg {
	width: 600px;
	height: 300px;
	margin: auto;
}

svg text {
	text-transform: uppercase;
	animation: stroke 5s infinite alternate;
	letter-spacing: 10px;
	font-size: 150px;
}
@keyframes stroke {
	0% {
		fill: rgba(72, 138, 20, 0);
		stroke: rgba(54, 95, 160, 1);
		stroke-dashoffset: 25%;
		stroke-dasharray: 0 50%;
		stroke-width: 0.2;
	}
	50% {
		fill: rgba(72, 138, 20, 0);
		stroke: rgba(54, 95, 160, 1);
		stroke-width: 0.5;
	}
	70% {
		fill: rgba(72, 138, 20, 0);
		stroke: rgba(54, 95, 160, 1);
		stroke-width: 1;
	}
	90%,
	100% {
		fill: rgba(72, 138, 204, 1);
		stroke: rgba(54, 95, 160, 0);
		stroke-dashoffset: -25%;
		stroke-dasharray: 50% 0;
		stroke-width: 0;
	}
}
```

The effect is as follows（Hover the button below to see the effect）：

<iframe height="300" style="width: 100%;" scrolling="no" title="svg-line-text" src="https://codepen.io/dvha/embed/YzdOWRN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/YzdOWRN">
  svg-line-text</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>