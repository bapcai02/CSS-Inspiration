## Multiple solutions to achieve single-column equal width, and other multi-column adaptive uniform layout

Multiple solutions to achieve single-column equal-width, and other multi-column adaptive uniform layout

### need

There are 4 columns in total, the width of the first column is fixed at 200px, the remaining width is equally divided among the remaining 3 columns, and the spacing between each column is 10px.

### accomplish

+ `display: grid` implementation
+ `display: flex` implementation
+ `position: aboslute + float` implementation
+ `position: aboslute + float + non-calc implementation`

### Difficulty

For those who do not use flex, grid, and css3 features calc, the only way to achieve multi-column adaptive uniform distribution is percentage.

The average spacing after the percentage is equalized, here refers to the implementation of bootstrap.
HTML：

```pug
// pug

div.g-grid
    - for(var i=0; i<4; i++)   
        div.g-item #{i}
        
div.g-flex
    - for(var i=0; i<4; i++)   
        div.g-item #{i}
        
div.g-position
    - for(var i=0; i<4; i++)   
        div.g-item #{i}

div.g-justify  
    div.g-left 0
    div.g-col
        div.g-row
            - for(var i=1; i<4; i++) 
                div.g-item-box
                    div.g-item #{i}
```

SCSS：
```scss
h2 {
    font-size: 28px;
    text-align: center;
    color: #fff;
    background: #009688;
    line-height: 2;
}

.g-left,
.g-item {
    background: #3f51b5;
    line-height: 200px;
    color: #fff;
    text-align: center;
    font-size: 24px;
}

.g-grid {
    height: 200px;
    background: #ff9800;
    display: grid;
    grid-template-columns: 200px repeat(3, 1fr);
    grid-column-gap: 10px;
    margin-bottom: 20px;
}

.g-flex {
    height: 200px;
    background: #ff9800;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 20px;

    .g-item {
        flex: 0 1 calc((100% - 200px - 30px) / 3);
    }
    
    .g-item:first-child {
        flex: 0 1 200px;
    }
}

.g-position {
    position: relative;
    height: 200px;
    background: #ff9800;
    margin-bottom: 20px;

    .g-item {
        float: left;
        width: calc((100% - 200px - 30px) / 3);
        margin-left: 10px;
    }
    
    .g-item:nth-child(2) {
        float: left;
        width: calc((100% - 200px - 30px) / 3);
        margin-left: 210px;
    }
    
    .g-item:first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        float: unset;
        margin-left: unset;
    }
}

.g-justify {
    position: relative;
    height: 200px;
    background: #ff9800;
    margin-bottom: 20px;

    .g-col,
    .g-row,
    .g-item-box {
        box-sizing: border-box;
    }
    
    .g-left {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
    }
    
    .g-row {
        margin-right: -5px;
        margin-left: -5px;
    }
    
    .g-col {
        position: absolute;
        top: 0;
        left: 210px;
        right: 0;
        height: 200px;
        overflow: hidden;
        
        &:before,
        &:after {
          display: table;
          content: " ";
        }
        
        &:after {
          clear: both;
        }
        
        .g-item-box {
            position: relative;
            float: left;
            width: 33.33%;
            padding-left: 5px;
            padding-right: 5px;
        }
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="single-column-isometric" src="https://codepen.io/dvha/embed/eYbLZaK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/eYbLZaK">
  single-column-isometric</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>