## Use background-attachment to achieve frosted glass effect

Use background-attachment, filter: blur() to achieve a frosted glass effect.

The key point of the frosted glass effect is that the part of the base image that needs to be blurred will change with the page resize.

`background-attachment:fixed` can perfectly meet this requirement.

### key point

`background-attachment` is a relatively uncommon attribute. Basically, this attribute is not used when writing business styles. But it's interesting in its own right.

`background-attachment`: If `background-image` is specified, then `background-attachment` determines whether the background is fixed in the viewport or scrolls with the block containing it.

### background-attachment: fixed

**fixed** This keyword indicates that the background is fixed relative to the viewport. Even if an element has a scrolling mechanism, the background will not scroll with the element's content.

HTML:

```html
<div>
     <p>Use <br />background-attachment: fixed <br />filter: bulr() <br />to achieve the frosted glass effect</p>
</div>
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
    background-attachment: fixed;
    background-size: cover;
    background-position: top;
    overflow: hidden;
}

div {
    position: relative;
    width: 30vw;
    height: 40vh;
    background: inherit;
    margin: 50px auto;
    padding: 5vmin;
    border-radius: 5px;
    border: 2px solid rgba(255, 255, 255, .5);
    // transform: translate(-50%, -50%);
    // left: 50%;
    // top: 50%;
    
    p {
        position: relative;
        color: #000;
        z-index: 10;
        font-size: 24px;
        line-height: 1.5;
        
    }
    
    &::after {
        position: absolute;
        content: "";
        background: inherit; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        filter: blur(10px);
        z-index: 0;
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-attachment-frosted-glass" src="https://codepen.io/dvha/embed/ZEVjoLb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/ZEVjoLb">
  bg-attachment-frosted-glass</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>