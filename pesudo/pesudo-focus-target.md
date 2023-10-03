## Use target pseudo-class to implement pure CSS Tab switching

Use `:target` to implement tab switching function.

The difficulty in implementing Tab switching is how to use CSS to receive user clicks and operate on related nodes. That is:

+ How to receive click events
+ How to operate related DOM

### key point

+ To use the `:target` pseudo-element, you need an HTML anchor and the HTML fragment corresponding to the anchor.
+ The core is to use the `:target` pseudo-class to receive click events
+ Control styles through sibling selector `~`

### related articles

[Pure CSS navigation bar Tab switching solution](https://www.cnblogs.com/coco1s/p/5955631.html)

HTML:

```html
<div class="container">
<div id="content1" class="active">List 1 content:123456</div>
<div id="content2">List 2 content: abcdefgkijkl</div>

<ul class='nav'>
<li class="active"><a href="#content1">List 1</a></li>
<li><a href="#content2">List 2</a></li>
</ul>

<div class="wrap"></div>
</div>
```

SCSS：
```scss
.container {
	position: relative;
	width: 400px;
	margin: 50px auto;
}

.nav {
	position: relative;
	overflow: hidden;
}

li {
	width: 200px;
	float: left;
	text-align: center;
	background: #ddd;
}

li a {
	display: block;
	width: 200px;
	line-height: 36px;
	font-size: 18px;
	cursor: pointer;
	text-decoration: none;
	color: #000;
}

#content1,
#content2 {
	position: absolute;
	overflow: hidden;
	top: 36px;
	width: 400px;
	height: 100px;
	border: 1px solid #999;
	box-sizing: border-box;
	padding: 10px;
}

#content1,
#content2 {
	display: none;
	width: 100%;
	background: #fff;
}

#content1:target,
#content2:target {
	display: block;
}

#content1.active {
	display: block;
}

.active ~ .nav li {
	&:first-child {
		background: #ff7300;
		color: #fff;
	}
}

#content1:target ~ .nav li {
	background: #ddd;
	color: #000;
	&:first-child {
		background: #ff7300;
		color: #fff;
	}
}

#content2:target ~ .nav li {
	background: #ddd;
	color: #000;
	&:last-child {
		background: #ff7300;
		color: #fff;
	}
}

.wrap {
	position: absolute;
	overflow: hidden;
	top: 36px;
	width: 400px;
	height: 100px;
	border: 1px solid #999;
	box-sizing: border-box;
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height="300" style="width: 100%;" scrolling="no" title="pesudo-focus-target" src="https://codepen.io/dvha/embed/QWzVKWz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/QWzVKWz">
  pesudo-focus-target</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>