# Event Handler 예제들

![image](https://user-images.githubusercontent.com/61460836/158500243-71131070-e25c-42a6-8a99-aca9901d6efe.png)

```js
const onKeyPressInput = e => {
        if(e.key === 'Enter'){
            console.log(e.target.value);
        }
    }
```
+ text입력하고 enter누르면 console창에 뜸
    ![image](https://user-images.githubusercontent.com/61460836/158500325-530d2b1a-d7c5-4a8b-8a08-0e7053a121bd.png)
