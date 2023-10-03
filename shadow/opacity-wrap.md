## Use box-shadow to achieve translucent masking

Use box-shadow to achieve translucent masking, which can play a good role in some special scenes

HTML:

```html
<p>Background textBackground textBackground textBackground text</p>
<div>Hover Me</div>
```
SCSS：
```scss
div {
    position: absolute;
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #666;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all .1s;
}

div:hover {
    box-shadow: 0 0 0 50vmax rgba(0, 0, 0, .5);
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height='350' scrolling='no' title='Use box-shadow to achieve translucent mask' src='//codepen.io/Chokcoco/embed/KGQVLr/?height=265&theme-id=0&default-tab =css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/ KGQVLr/'>Use box-shadow to achieve translucent mask</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https ://codepen.io'>CodePen</a>.
</iframe>