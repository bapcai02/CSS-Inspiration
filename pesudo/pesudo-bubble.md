## Pseudo element + border to implement bubble dialog box

Pseudo element + border implements bubble dialog box.

### key point

+ Use border to generate triangle shapes.
+ Use `filter: drop-shadow` to generate overall shadow.

HTML:

```html
<div class="box">
     <div class="box1"></div>
     <div class="box2"></div>
     <div class="box3"></div>
     <div class="box4"></div>
</div>
<div class="pop">
     <p>Pseudo element border implements bubble dialog triangle</p>
</div>
<div class="pop-with-border">
   <p>filter:drop-shadow achieves overall shadow</p>
</div>
```

SCSS：
```scss
$color: #e91e63;
.box{
    
    overflow: hidden;
    
    & > div {
        float: left;
        margin: 20px;
    }
}
.box1 {
    width: 30px;
    height: 30px;
    border: 15px solid deeppink;
    left: 140px;
    bottom: 150px;
}
.box2 {
    width: 30px;
    height: 30px;
    border: 15px solid;
    border-color: #FFA500 #F00 #008000 #808080;
}
.box3 {
    width: 0;
    height: 0;
    border: 15px solid;
    border-color: #FFA500 #F00 #008000 #808080;
}
.box4 {
    width: 0;
    height: 0;
    border: 15px solid;
    border-color: transparent #F00 transparent transparent;
}

.pop {
    margin: 30px;
    width: 200px;
    height: 100px;
    padding: 10px;
    background: #e91e63;
    border-radius: 8px;
    position: relative;
}
.pop::after {
    content:"";
    width: 0;
    height: 0;
    border: 12px solid;
    border-color: transparent #e91e63 transparent transparent;
    position: absolute;
    top: 45px;
    left: -24px;
}
.pop p {
    color: #fff;
    padding: 10px 20px;
}

.pop-with-border {
    margin: 30px;
    width: 200px;
    height: 100px;
    padding: 10px;
    background: #fff;
    border-radius: 8px;
    position: relative; 
    border: 1px solid #ddd;
    filter: drop-shadow(0 0 5px #eee);
}
.pop-with-border:before,
.pop-with-border:after {
  top: -8px;
  border: 8px solid transparent;
  border-top: 0;
  border-bottom-color: #fff;
  content: "";
  display: block;
  width: 0;
  height: 0;
  left: 16px;
  overflow: hidden;
  position: absolute;
  z-index: 101;
}
.pop-with-border:before {
  top: -9px;
  border-bottom-color: #ddd;
  z-index: 99;
}
.pop-with-border p {
    padding: 10px 20px;
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height="300" style="width: 100%;" scrolling="no" title="pesudo-bubble" src="https://codepen.io/dvha/embed/PoXdGYR?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/PoXdGYR">
  pesudo-bubble</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>