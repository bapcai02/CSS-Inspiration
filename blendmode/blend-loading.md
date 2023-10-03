## mix-blend-mode implements loading effect

mix-blend-mode implements loading effect.

CSS3 has added a very interesting attribute - `mix-blend-mode`. The Chinese free translations of mix and blend are both mixed, so the literal translation of this attribute is mixed blend mode. Of course, we usually call it Blend mode.

Blending modes are most commonly found in photoshop and are one of the most powerful features in PS. Of course, everyone can use blending modes indiscriminately. Use blending modes to mix multiple layers to get a new effect. You just need to use it just right. In other words, using blending modes in CSS to create some effects requires a deep understanding of blending modes. understanding and continuous attempts.

### key point

The `mix-blend-mode: screen` filter mode is used here, which is a blending mode that brightens the image. The English word for filter color is screen, which is a composite color in which two colors are projected onto a screen at the same time. The specific method is to invert the two colors, multiply them, and then invert them again. Simply remember it as "making white whiter and black unchanged". (Not necessarily accurate, please correct me if there are any errors)

We rotate several divs slightly according to different animation-delays to achieve a very conspicuous and magical effect, suitable for loading pictures.

HTML：

```html
<strong class="loading">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</strong>
```

SCSS：
```scss
body {
	background:#291f34;
	overflow:hidden;
}

.loading {
	position:absolute;
	left:50%;
	top:30vh;
	margin-left:-20vh;
	display:block;
	width:40vh;
	height:40vh;
	text-align:center;
	filter:contrast(1.2);
	
	span {
  	    mix-blend-mode:screen;
		display:block;
		position:absolute;
		border-radius:50%;
		animation:wave 3s infinite linear;
	}
	
	span:nth-child(0) {
		left:-11%;
		right:-2%;
		top:-12%;
		bottom:-5%;
		transform-origin:46% 53%;
		animation-delay:0;
		background-color:hsl(0, 50%, 50%);
	}
	
	span:nth-child(1) {
		left:-4%;
		right:-4%;
		top:-9%;
		bottom:-2%;
		transform-origin:47% 50%;
		animation-delay:-1s;
		background-color:hsl(50, 60%, 50%);
	}
	
	span:nth-child(2) {
		left:-11%;
		right:-4%;
		top:-10%;
		bottom:-11%;
		transform-origin:49% 53%;
		animation-delay:-1.5s;
		background-color:hsl(100, 70%, 50%);
	}
	
	span:nth-child(3) {
		left:-7%;
		right:-9%;
		top:-11%;
		bottom:-4%;
		transform-origin:47% 52%;
		animation-delay:-2s;
		background-color:hsl(150, 80%, 50%);
	}
	
	span:nth-child(4) {
		left:-8%;
		right:-3%;
		top:-5%;
		bottom:-11%;
		transform-origin:47% 52%;
		animation-delay:-2.5s;
		background-color:hsl(200, 90%, 50%);
	}
	
	span:nth-child(5) {
		left:-10%;
		right:-8%;
		top:-4%;
		bottom:-9%;
		transform-origin:48% 51%;
		animation-delay:-3s;
		background-color:hsl(250, 100%, 50%);
	}
	
	span:nth-child(6) {
		left:-9%;
		right:-11%;
		top:-5%;
		bottom:-8%;
		transform-origin:47% 50%;
		animation-delay:-3.5s;
		background-color:hsl(300, 100%, 50%);
	}
}

@keyframes wave {
	from {
		transform:rotateZ(0deg);
	}
	to {
		transform:rotateZ(360deg);
	}
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="blend-loading" src="https://codepen.io/dvha/embed/poqZKeP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/poqZKeP">
  blend-loading</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>