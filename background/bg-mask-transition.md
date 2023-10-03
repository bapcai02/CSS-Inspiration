## mask-image implements image transition transformation

mask-image implements image transition transformation.

HTML：

```html
<div></div>
```

SCSS：
```scss
html, body {
    width: 100%;
    height: 100%;
    display: flex;
}

div {
    margin: auto;
    position: relative;
    width: 30vw;
    height: 70vh;
    background: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2128480768,3645204276&fm=26&gp=0.jpg) no-repeat;
    background-size: cover;
    
    &::before {
        position: absolute;
        content: "";
        top: 0;left: 0; right: 0;bottom: 0;
        background: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1877625006,2341162086&fm=26&gp=0.jpg) no-repeat;
        background-size: cover;
        z-index: 1;
        animation: maskRotate 4s ease-in-out infinite;
    }
}

@keyframes maskRotate {
    @for $i from 0 through 50 { 
        #{$i}% {
            mask: linear-gradient(45deg, #000 #{$i * 2 + '%'}, transparent #{$i * 2.5 + '%'}, transparent #{$i * 2.5 + '%'});
        }
    }
    100% {
        mask: linear-gradient(45deg, #000， #000 100%);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-mask-transition" src="https://codepen.io/dvha/embed/MWZBXWp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/MWZBXWp">
  bg-mask-transition</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>