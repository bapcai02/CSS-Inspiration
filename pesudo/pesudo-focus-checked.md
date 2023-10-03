## Use checked pseudo-class to implement pure CSS Tab switching

Use `:checked` to implement tab switching functionality.

The difficulty in implementing Tab switching is how to use CSS to receive user clicks and operate on related nodes. That is:

+ How to receive click events
+ How to operate related DOM

Form elements with the checked attribute, `<input type="radio">` or `<input type="checkbox">` can receive click events.

### key point

+ Use the `:checked` pseudo-class of the radio label and add `<label for>` to achieve pure CSS capture of click events
+ Used the `~` selector to control the style

### related articles

[Pure CSS navigation bar Tab switching solution](https://www.cnblogs.com/coco1s/p/5955631.html)

HTML：

```html
<div class="container">
<input class="nav1" id="li1" type="radio" name="nav">
<input class="nav2" id="li2" type="radio" name="nav">
<ul class='nav'>
<li class='active'><label for="li1">List 1</label></li>
<li><label for="li2">List 2</label></li>
</ul>
<div class="content">
<div class="content1 default">List 1 content:123456</div>
<div class="content2">List 2 content: abcdefgkijkl</div>
</div>
</div>
```

SCSS：
```scss
.container{
	position:relative;
	width:400px;
	margin: 50px auto;
}

input{
	display:none;
}

.nav{
	position:relative;
	overflow:hidden;
}

li{
	width:200px;
	float:left;
	text-align:center;
	background:#ddd;
}

li label{
	display:block;
	width:200px;
	line-height:36px;
	font-size:18px;
	cursor:pointer;
}

.content{
	position:relative;
	overflow:hidden;
	width:400px;
	height:100px;
	border:1px solid #999;
	box-sizing:border-box;
	padding:10px;
}

.content1,
.content2{
	display:none;
	width:100%;
	height:100%;
}

.nav1:checked ~ .nav li {
	background:#ddd;
	color:#000;
	
	&:first-child{
		background:#ff7300;
		color:#fff;
	}
}
.nav2:checked ~ .nav li{
	background:#ddd;
	color:#000;
	
	&:last-child{
		background:#ff7300;
		color:#fff;
	}
}

.nav1:checked ~ .content > div{
	display:none;
	
	&:first-child{
	display:block;
	}
}
.nav2:checked ~ .content > div{
	display:none;
	
	&:last-child{
	display:block;
	}
}

.active {
		background:#ff7300;
		color:#fff;
}

.default{
	display:block;
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="pesudo-focus-checked" src="https://codepen.io/dvha/embed/oNJPzNB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/oNJPzNB">
  pesudo-focus-checked</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>