## Use box-reflect to implement light and shadow buttons

[`-webkit-box-reflect`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect) is a very interesting property that allows CSS to Like a mirror, reflecting what our element was originally drawn to.

### Core Points

`-webkit-box-reflect` is used to achieve the reflection effect of the button, which is very technological.

For detailed information, please see this article of mine:

HTML：

```HTML
<div class="btn">Neon</div>
<div class="btn btn1">Neon</div>
<div class="btn btn2">Neon</div>
<div class="btn btn3">Neon</div>
```

SCSS：
```scss
:root {
	--color: #0ebeff;
}

@keyframes rotate {
	100% {
		transform: translate(-50%, -50%) rotate(1turn);
	}
}

.btn {
	position: relative;
	z-index: 0;
	width: 160px;
	height: 80px;
	line-height: 80px;
	color: var(--color);
	font-size: 24px;
	border-radius: 10px;
	text-align: center;
	margin: auto;
	overflow: hidden;
	cursor: pointer;
	transition: .3s;
	-webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, .4));

	&:hover {
		color: #fff;
		box-shadow: 0 0 5px var(--color),
			0 0 25px var(--color);
		
		&::after,
		&::before {
			transition: .3s;
			background: var(--color);
		}
	}
	
	&::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 150%;
		height: 300%;
		background-color: #000;
		background-repeat: no-repeat;
		background-size: 50% 50%;
		background-position: 0 0;
		background-image: conic-gradient(var(--color), var(--color));
		animation: rotate 2s linear infinite;
	}
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 2px;
		top: 2px;
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		background: #000;
		border-radius: 10px;
	}
}

.btn1 {
	filter: hue-rotate(180deg);
}

.btn2 {
	filter: hue-rotate(270deg);
}

.btn3 {
	filter: hue-rotate(90deg);
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="reflect-btn-effect" src="https://codepen.io/dvha/embed/VwqGjWe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/VwqGjWe">
  reflect-btn-effect</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>