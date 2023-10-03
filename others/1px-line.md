## Implementation of 1px line under retina screen

The implementation of 1px line under retina screen is suitable for the case of dpr: 2.

+ Method 1: Use gradient implementation, use two colors to fill 1px wide content
+ Method 2: Use scaling to achieve 0.5x scaling of 1px height lines
+ Method 3: base64 encoding implementation
+ Method 4: Base64 encoding and embedding SVG implementation

HTML:

```html
<head>
     <meta charset="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
     <meta name="msapplication-tap-highlight" content="no" />
     <title>Implementation of 1px line under retina screen</title>
</head>

<body>
     <div class="border_normal">Use the 1px border effect normally (please view this DEMO in the mobile environment)</div>
     <div class="border_gradient">Method 1: Use gradient implementation, use two colors to fill 1px wide content </div>
     <div class="border_scale">Method 2: Use scaling to scale the 1px height line by 0.5 times</div>
     <div class="border_base64">Method three: base64 encoding implementation</div>
     <div class="border_svg">Method 4: Base64 encoding and embedded SVG implementation</div>
</body>
```

SCSS：
```scss
body {
    // overflow: hidden;
}

div {
    width: 100vw;
    height: 80px;
    margin: 30px auto;
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
    padding-top: 20px;
    font-size: 16px;
    box-sizing: border-box;
}

/*border-top:1px*/
.border_normal,
.border_gradient,
.border_scale,
.border_boxshadow,
.border_base64,
.border_svg{
    border-top: 1px solid #999;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .border_gradient {
        background-image: linear-gradient(to top, transparent 50%, #999 50%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: top center;
        border-top: 0 none;
        padding-top: 1px;
    }
    
    .border_scale {
        position: relative;
        padding-top: 1px;
        border-top: 0 none;
    }
    .border_scale:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        border-top: 1px solid #999;
        transform: scale(0.5);
        transform-origin: 0 0;
        box-sizing: border-box;
    }
    .border_base64 {
        padding-top: 1px;
        border-top: 0 none;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAQSURBVBhXY5g5c+Z/BhAAABRcAsvqBShzAAAAAElFTkSuQmCC);
        background-position: 0 0;
        background-repeat: repeat-x;
        background-size: 1px 1px;
    }
    
    .border_svg {
		border-top: 0 none;
		background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='1'><rect fill='#999' x='0' y='0.5' width='100%' height='0.5' /></svg>");	
	 	background-position:0 0;
	 	background-repeat:no-repeat;
    }

}
```

The effect is as follows, the demo effect needs to be viewed in a mobile environment (Click `HTML/SCSS` to edit the code)：

<iframe height="300" style="width: 100%;" scrolling="no" title="1px-line" src="https://codepen.io/dvha/embed/RwEYaXP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/RwEYaXP">
  1px-line</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>