## 3D text appearance animation

Use CSS 3D to achieve text exit effects

### key point

1. Set parent element and child element to `transform-style: preserve-3d`
2. Use two pseudo-elements of the `span` element to copy two identical words, and use `translateZ()` to separate them by a certain distance on the Z axis.
3. Add simple rotation, transparency, and font color changes

You can get such a title 3D animation that is similar to the opening of a movie. It actually only has 3 layers of elements, but due to the appropriate angles and perfect visual connection, it looks very 3D.

HTML：
```
<div>
  <span class='C'>C</span>
  <span class='S'>S</span>
  <span class='S'>S</span>
  <span></span>
  <span class='3'>3</span>
  <span class='D'>D</span>
</div>
```

SCSS：
```scss
@import url(https://fonts.googleapis.com/css?family=Crimson+Text);
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
$bright : #AFA695;
$gold : #867862;
$dark : #746853;

$duration : 8s;

body, html {
	width: 100%;
	height: 100%;
	display: flex;
	background: #000;
	overflow: hidden;
}

div {
	margin: auto;
	perspective: 2000px;
	transform-style: preserve-3d;
	font: 10vw Righteous;
	animation: fade $duration infinite;
}

span {
	position: relative;
	display: inline-block;
	min-width: .5em;
	text-align: center;
	transform-style: preserve-3d;
	transform:  rotateY(25deg);
	animation: rotate $duration infinite ease-in;
	color: black;
	
	&:after, &:before {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		content: attr(class);
		color: $gold;
		z-index: -1;
		animation: shadow $duration infinite;
	}
	
	&:before {
		transform: translateZ(-14px);
	}
	&:after {
		transform: translateZ(-7px);
	}
}

@keyframes fade {
	from {
		opacity: 0;
		transform: scale(1.2);
	}
	25% { opacity: 1; }
	100% {
		transform: scale(1);
	}
}

@keyframes rotate {
	from {
		transform: rotateY(65deg);
	}
	50%, 100% {
		color: $dark;
		transform: rotateY(5deg);
	}
	100% {
		color: $gold;
	}
}

@keyframes shadow {
	from {
		color: shade($gold, 50%);
	}
	25% { 
		color: $bright;
	}
	50%, 100% {
		color: tint($gold, 100%);
	}
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="3d-text-debut" src="https://codepen.io/dvha/embed/yLGqbxv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/yLGqbxv">
  3d-text-debut</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>