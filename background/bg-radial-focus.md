## Radial gradient achieves stage lighting focusing effect

Use gradients to achieve a stage lighting focus effect.

### key point

+ Use a radial gradient to generate a screen-wide gradient from transparent to black mask
+ In order for the center focus to be movable, the entire gradient container needs to be larger than the screen


HTML：

```html
<div class="radial-circle"></div>
```

SCSS：
```scss
$img: 'https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=';

html,
body {
    width: 100%;
    height: 100%;
    background-image: url($img);
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}

.radial-circle {
    position: absolute;
    top: -100%;
    left: -100%;
    right: -100%;
    bottom: -100%;
    background: radial-gradient(circle at 50% 50%, transparent 0%, transparent 3%, rgba(0, 0, 0, .7) 3.5%, rgba(0, 0, 0, .8) 100%);
    animation: move 10s infinite alternate;
}

@keyframes move {
    0% {
        transform: translateX(-10%);
    }
    100% {
        transform: translateX(10%);
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-radial-focus" src="https://codepen.io/dvha/embed/XWoBYbz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/XWoBYbz">
  bg-radial-focus</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>