## Linear gradient and shadow to achieve striped three-dimensional shadow striped characters

Linear gradients and shadows are used to achieve striped three-dimensional shadow striped characters.

### key point

+ Two pseudo-elements that borrow elements
+ Pseudo elements can read element attributes through `attr`
+ Achieve striped effects by generating multiple linear gradients of ***white->transparent*** superimposed on black

HTML:

```html
<div data-name="Solid Shadow Word">Solid Shadow Word</div>
```

SCSS:
```scss


div {
    font-family: Times New Roman, 'serif';
    position: relative;
    font-size: 30vmin;
    line-height: 40vmin;
    margin: 30vmin auto;
    text-align: center;
    text-shadow: 4px 4px 1px #333;
    
    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(-45deg, #fff 0%, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent 100%);
        background-size: 6px 6px;
        z-index: 1;
    }
    
    &::after {
        position: absolute;
        content: attr(data-name);
        top: -4px;
        left: -2px;
        right: 6px;
        bottom: 6px;
        color: #333;
        z-index: 2;
        text-shadow: 3px 3px #fff;
    }
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height='350' scrolling='no' title='Linear gradient and shadow to achieve striped three-dimensional shadow striped characters' src='//codepen.io/Chokcoco/embed/XxQJEB/?height=265&theme-id=0&default- tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen /XxQJEB/'>Linear gradient and shadow to achieve striped three-dimensional shadow striped characters</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href= 'https://codepen.io'>CodePen</a>.
</iframe>