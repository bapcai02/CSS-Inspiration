## CSS-Doodle background + mask to achieve striped art background

CSS-Doodle background + mask realizes striped art background

### CSS-doodle

[css-doodle](https://github.com/css-doodle/css-doodle) is a library based on Web-Component. Allows us to quickly create pages based on CSS Grid layout to achieve various CSS effects (perhaps called CSS art).

HTML：

```HTML
<!-- https://css-doodle.com -->

<css-doodle>
	:doodle {
		@grid: 3 x 1;
	}

	width: 40vmin;
	height: 80vmin;

	--colorMain: rgb(@r(255), @r(255), @r(255));
	--colorSub: rgb(@r(255), @r(255), @r(255));
	--colorThird: rgb(@r(255), @r(255), @r(255));

	position: relative;
	box-sizing: border-box;
	margin: 1vmin;
	border-radius: 5vmin;
	border:2px solid #666;
	box-shadow: 1px 1px 4px 2px #222;
	background: conic-gradient(from @r(360)deg, var(--colorMain), transparent, var(--colorSub), transparent, var(--colorMain));
	overflow: hidden;

	@nth(2) {
		background: linear-gradient(var(--colorMain), var(--colorSub));
	}
	
	@nth(3) {
		background: unset;
	}

	:before {
		--size: @r(2, 15)px;
		--maskSize: @r(10, 75)px;
		--percentage: @r(10, 30)%;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(@r(360)deg, var(--colorMain), var(--colorSub));
		mask: 
			linear-gradient(135deg, #fff var(--size), transparent 0),
			linear-gradient(-135deg, #fff var(--size), transparent 0),
			linear-gradient(45deg, #fff var(--size), transparent 0),
			linear-gradient(-45deg, #fff var(--size), transparent 0),
			linear-gradient(135deg, #fff calc(var(--percentage) + var(--size)), transparent 0),
			linear-gradient(-135deg, #fff calc(var(--percentage) + var(--size)), transparent 0),
			linear-gradient(45deg, #fff calc(var(--percentage) + var(--size)), transparent 0),
			linear-gradient(-45deg, #fff calc(var(--percentage) + var(--size)), transparent 0),
			linear-gradient(135deg, #fff calc(var(--percentage) + var(--percentage) + var(--size)), transparent 0),
			linear-gradient(-135deg, #fff calc(var(--percentage) + var(--percentage) + var(--size)), transparent 0),
			linear-gradient(45deg, #fff calc(var(--percentage) + var(--percentage) + var(--size)), transparent 0),
			linear-gradient(-45deg, #fff calc(var(--percentage) + var(--percentage) + var(--size)), transparent 0);
		mask-size: var(--maskSize) var(--maskSize);
		mask-position: 50% 50%;
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

The effect is as follows（Click the image below to refresh the effect）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-mask-mix" src="https://codepen.io/dvha/embed/WNLKKZy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/WNLKKZy">
  bg-mask-mix</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>