## 6 ways to achieve equal heights in multiple columns

Multiple ways to achieve equal heights for multiple columns

### need

Multiple columns of equal height require the left and right columns to be adaptive and have the same height, and set different background colors respectively.

### accomplish

1. `padding + margin + overflow` achieves the effect of equal heights in multiple columns and has good compatibility
2. The border implements multiple columns of equal height, the width of the left border is 200px, the left column is floating, and the pseudo elements are cleared to float.
3. Use the linear gradient background color of the parent element to achieve multiple columns of equal height (the same applies to various color blindness methods)
4. display: flex realizes multiple columns with equal heights
5. display: grid implements multiple columns with equal heights
6. display:table-cell achieves equal height for multiple columns

 
HTML：

```html
<div class="g-container">
    <div class="g-xxx">
        <div class="g-left">
            content<br/>
        </div>
        <div class="g-right">
            content<br/>
            content<br/>
            content<br/>
            content<br/>
        </div>
    </div>
</div>
```


SCSS：
```scss
h2 {
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    background: #00bcd4;
    color: #fff;
}

.g-container {
    width: 1000px;
    margin: 0 auto;
    line-height: 2;
    color: #fff;
    
    & > div {
        margin-bottom: 50px;
    }
}



.g-padmar {
    position: relative;
    overflow: hidden;

    .g-left {
        float: left;
        width: 200px;
        background: #4caf50;
        padding-bottom:9999px;
	    margin-bottom:-9999px;
    }
    
    .g-right {
        float: left;
        width: 800px;
        background: #99afe0;
        padding-bottom: 9999px;
        margin-bottom: -9999px;
    }
}

.g-border {
    position: relative;
    width: 800px;
    border-left: 200px solid #4caf50;
    background: #99afe0;
    
    &::after {
        content: ".";
        display:block;
        height: 0;
        clear: both;
    }
    
    .g-right {
        width: 800px;
    }
    
    .g-left {
        float: left;
        width: 200px;
        margin-left: -200px;
    }
}

.g-lineargradient {
    background: linear-gradient(90deg, #4caf50 0, #4caf50 20%, #99afe0 20%, #99afe0);
    overflow: hidden;
    
    .g-left {
        float: left;
        width: 200px;
    }
    
    .g-right {
        float: left;
        width: 800px;
    }
}

.g-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    
    .g-left {
        flex: 200px 0 0 ;
        background: #4caf50;
    }
    
    .g-right {
        flex: auto 1 0;
        background: #99afe0;
    } 
}

.g-grid {
    display: grid;
    // align-items: stretch; default value
    grid-template-columns: 200px auto;
    
    .g-left {
        background: #4caf50;
    }
    
    .g-right {
        background: #99afe0;
    } 
}

.g-table {
    overflow:hidden;
	display:table;
    
    .g-left {
        width: 200px;
        display: table-cell;
        background: #4caf50;
    }
    
    .g-right {
        width: 800px;
        display: table-cell;
        background: #99afe0;
    } 
}
```

The effect is as follows (click on `HTML/SCSS` to edit the code):

<iframe height="300" style="width: 100%;" scrolling="no" title="multi-column-contour" src="https://codepen.io/dvha/embed/gOZdrZa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/gOZdrZa">
  multi-column-contour</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>