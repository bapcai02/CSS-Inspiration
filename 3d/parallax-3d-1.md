## Use translate3d\perspective to achieve 3D parallax effect

Achieve 3D parallax effects with translate3d\perspective.

Parallax Scrolling refers to making multiple layers of background move at different speeds to form a three-dimensional motion effect and bring an excellent visual experience. As a hot trend in web design, more and more websites apply this technology.

### key point

+ We set transform-style: preserve-3d and perspective: xpx to the container, then the child elements in this container will be located in 3D space,

+ Then set different transform: translateZ() for the child elements. At this time, the distance of different elements from the screen (our eyes) in the 3D Z-axis direction is also different.

+ When scrolling the scroll bar, since the child elements are set to different transform: translateZ(), the up and down distance translateY of their scrolling is also different relative to the screen (our eyes), which achieves the effect of scrolling parallax.

For detailed analysis, please see: [Scrolling Parallax? CSS is a piece of cake](https://www.cnblogs.com/coco1s/p/9453938.html)

HTML：

```html
<div class="card">
  <div class="card-content">
    <h1>Just hover around</h1>
    <p>translateZ 3D</p>
    <p class="related">3D Parallax</p>
  </div>
</div>
```

SCSS：
```scss

body{
  background: #edf2f4;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  height: 100vh;
  font-family: "Playfair Display",georgia,serif;
}
.card{
  pointer-events: none;
  transform: translateZ(0);
  padding: 30px;
  background: white;
  border-radius: 5px;
  width: 400px;
  height: 200px;
  margin: auto;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  display: flex;
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  position: relative;
  animation: move 10s infinite alternate;
  
  &:after{
    content:" ";
    position: absolute;
    width: 100%;
    height: 10px;
    border-radius: 50%;
    left:0;
    bottom:-50px;
    box-shadow: 0 30px 20px rgba(0,0,0,.3);
    
  }
  
  .card-content{
    margin: auto;
    text-align:center;
    transform-style: preserve-3d;
    line-height: 40px;
  }
  
  h1{
    transform: translateZ(100px);
  }
  p{
    transform: translateZ(50px);
    display: block;
    
    &.related{
      transform: translateZ(80px);
      font-style: italic;
    }
  }
  a{
    color:#69c6b8;
    pointer-events: auto;
  }
}

@keyframes move {
    0% {
        transform: rotateY(20deg) rotateZ(10deg);
    }
    100% {
        transform: rotateY(-60deg) rotateZ(-10deg);
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="parallax-3d-1" src="https://codepen.io/dvha/embed/rNormZZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/rNormZZ">
  parallax-3d-1</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>