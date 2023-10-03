## Use filter:blur to generate colored shadows

Generally speaking, most of the ways we generate shadows are box-shadow, filter: drop-shadow(), and text-shadow. However, the shadows generated using them can usually only be solid or tone-on-tone.

But by cleverly using the filter: blur filter, we can pretend to generate a gradient or richly colored shadow effect.

### key point

The principle is to use pseudo elements to generate a new image of the same size as the original image and superimpose it under the original image, and then use the filter: blur() to create an illusory image with other brightness/contrast, transparency and other filters. Shadow, disguised as the shadow effect of the original image.

Well, the most important thing is this sentence `filter: blur(10px) brightness(80%) opacity(.8)`.

HTML:

```html
<div class="container">
    <div class="avator"></div>
    <p>bulr shadow</p>
</div>
```

SCSS：
```scss
$img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505822443&di=941986df9c6514d5d43eaba4aa938347&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqtouxiang8.net%2Fuploads%2Fallimg%2Fc150313%2F142623130563050-922006.jpg';

@import url(https://fonts.googleapis.com/css?family=Righteous);
    
.container {
    width: 200px;
    margin: 20px auto;
}

.avator {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: url($img) no-repeat center center;
    background-size: 100% 100%;
    
    &::after {
        content: "";
        position: absolute;
        top: 10%;
        left: 0%;
        width: 100%;
        height: 100%;
        background: inherit;
        background-size: 100% 100%;
        border-radius: 50%;
        transform: scale(.95);
        filter: blur(10px) brightness(80%) opacity(.8);
        z-index: -1;
    }
}

p {
    margin-top: 30px;
    text-align: center;
    font-size: 28px;
    font-family: Righteous;
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="filter-shadow" src="https://codepen.io/dvha/embed/abPjaEW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/abPjaEW">
  filter-shadow</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>