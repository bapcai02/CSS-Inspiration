## Angular gradient to achieve light and shadow border effect

Angular gradient achieves light and shadow border effect.

### key point

+ Use angular gradient `conic-gradient` and **mask** to achieve light and shadow border effects

HTML：

```html
<div class="conic"></div>
<div class="conic conic-demo"></div>
```

SCSS：
```scss
body {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #000;
}

*, *::before, *::after {
	box-sizing: border-box;
}

@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}

.conic {
	position: relative;
	z-index: 0;
	width: 400px;
	height: 300px;
	margin: 20px;
	border-radius: 10px;
	overflow: hidden;
	padding: 2rem;
	
	&::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: #1a232a;
		background-repeat: no-repeat;
		background-position: 0 0;
		background-image: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);
		animation: rotate 4s linear infinite;
	}
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
		background: #000;
		border-radius: 5px;
	}
}

.conic-demo::after {
	animation: opacityChange 5s infinite linear;
}

@keyframes opacityChange {
	50% {
		opacity:.5;
	}
	100% {
		opacity: 1;
	}
}
```

The effect is as follows：

<iframe height="500" style="width: 100%;" scrolling="no" title="bg-conic-border-light-effect" src="https://codepen.io/dvha/embed/oNJMdWo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/oNJMdWo">
  bg-conic-border-light-effect</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>