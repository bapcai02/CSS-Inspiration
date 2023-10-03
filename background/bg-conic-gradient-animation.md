## Use angular gradients and blending modes to achieve cool light and shadow effects

Use angular gradients with blending modes to achieve cool light and shadow effects.

Angular gradient, also called angular gradient, is a standard on the way. For details, you can read this article of mine:

[Magical conic-gradient angular gradient](https://www.cnblogs.com/coco1s/p/7079529.html)

HTML：

```html
<div></div>
```

SCSS：
```scss
@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

@function randomConicGradient() {
	$n: 16 + random(16);
	$list: ();
	
	@for $i from 0 to $n {
		$list: $list, rgba(hsl(100, randomNum(250, 5, 10%), randomNum(1, 1, 1%)), randomNum(100, 0, .01));
	}
		
	@return conic-gradient($list, nth($list, 1));
}

div {
    width: 100vw;
    height: 100vh;
	margin: 0;
	background: 
		radial-gradient(hsl(9, randomNum(100, 75, 1%), randomNum(100, 75%, 1%)), black);
	
	&:before, &:after {
		position: absolute;
		top: 50%; left: 50%;
		margin: -100vmax; 
		width: 200vmax; 
        height: 200vmax;
		opacity: .5;
		mix-blend-mode: overlay;
		animation: rotate randomNum(100, 25, .1s) ease-in-out infinite;
		content: '';
	}
	
	&:before { background: randomConicGradient(); }
	&:after {
		background: randomConicGradient();
		animation-duration: randomNum(100, 25, .1s);
		animation-direction: reverse;
	}
}

@keyframes rotate { 
    to { 
        transform: rotate(1turn); 
    } 
}
```

The above effect uses the angular gradient polyfill JS library:

+ https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js
+ https://leaverou.github.io/conic-gradient/conic-gradient.js

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-conic-gradient-animation" src="https://codepen.io/dvha/embed/jOXpxaO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/jOXpxaO">
  bg-conic-gradient-animation</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>