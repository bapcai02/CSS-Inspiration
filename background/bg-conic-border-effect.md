## Angular gradient line border effect

Angular gradient achieves line border effect.

### key point

+ Use angular gradient `conic-gradient` and **mask** to achieve line border effect

HTML：

```html
<div></div>
```

SCSS：
```scss
body {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

*, *::before, *::after {
	box-sizing: border-box;
}

@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}

div {
	position: relative;
	z-index: 0;
	width: 400px;
	height: 300px;
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
		background-color: #fff;
		background-repeat: no-repeat;
		background-size: 50% 50%;
		background-position: 0 0;
		background-image: conic-gradient(#399953, #399953);
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
		background: white;
		border-radius: 5px;
		animation: opacityChange 3s infinite alternate;
	}
}

@keyframes opacityChange {
	50% {
		opacity:1;
	}
	100% {
		opacity: .5;
	}
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-conic-border-effect" src="https://codepen.io/dvha/embed/KKbBRmK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/KKbBRmK">
  bg-conic-border-effect</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>