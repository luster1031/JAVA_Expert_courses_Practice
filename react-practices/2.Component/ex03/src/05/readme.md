# Event Handler에서 'ref'사용하기 : Functional Component
```js
const result = Array.from({length:100},function(e, i){
        return i+1;
    });
```
```js
const result = Array.from({length:100},(_, i) => i + 1);
```

<br>

+ 접근하려면 .current적어줘야함
    ```js
    onScroll={e =>  console.log(outterRef.current.clientHeight,' : ', outterRef.current.scrollTop,' : ', innerRef.current.clientHeight)
            }
    ```

    <Br>
    
    ![image](https://user-images.githubusercontent.com/61460836/158713956-505cafc4-7ccb-4e0e-8c75-0b1904d64e47.png)
