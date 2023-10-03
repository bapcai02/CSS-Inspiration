## Use:not() pseudo-class to blur pop-up window background elements

Use the :not() pseudo-class to blur the pop-up window background elements.

### Usage

The CSS negation pseudo-class, :not(X), is a simple functional marker function that takes the selector X as a parameter. It matches elements that do not match the description of parameter selector X.

### not Key points of pseudo-class

+ You can use this pseudo-class to write a completely useless selector. For example, :not(*) matches any element that is not an element, so this rule will never be applied.
+ This pseudo-class can be used to increase the priority of rules. For example, #foo:not(#bar) and #foo will match the same element. But the former has higher priority.
+ :not(foo) will match any non-foo element, including html and body.
+ This selector will only be applied to one element, you cannot use it to exclude all parent elements. For example, body :not(table) a will still be applied to `<a>` inside the table, because `<tr>` will be matched by the :not() part of the selector.

-------

HTML:
```html
<div class="container s-blur">
     <div class="g-header">Header</div>
     <div class="g-content">
         <p>Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content.</p>
         <p>Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content.</p>
         <p>Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content.</p>
         <p>Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content.</p>
         <p>Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content.</p>
     </div>
     <div class="g-footer">Footer</div>
     <div class="g-wrap">
         Use the :not() pseudo-class to blur all elements except pop-up windows.
     </div>
</div>
```

SCSS：
```scss
.s-blur > :not(.g-wrap){
    filter: blur(2px);
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.3);
        filter: blur(2px);
        z-index: 2;
    }
}

.g-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50vh;
    background: #000;
    color: #fff;
    text-align: center;
    line-height: 50vh;
    font-size: 30px;
}

.g-container {
    position: relative;
}

.g-header,
.g-content,
.g-footer{
    padding: 20px;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    box-sizing: border-box;
    color: #fff;
    overflow: hidden;
}

.g-header,
.g-footer{
    height: 20vh;
    background: brown;
}

.g-content {
    height: 60vh;
    background: #77ccdd;
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height='350' scrolling='no' title='Use the :not() pseudo-class to blur pop-up window background elements' src='//codepen.io/Chokcoco/embed/RqWBGB/?height=265&theme-id =0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/ pen/RqWBGB/'>Use the :not() pseudo-class to blur the pop-up window background elements</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>