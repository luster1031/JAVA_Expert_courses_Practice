# 비제어 컴포넌트

![image](https://user-images.githubusercontent.com/61460836/158925789-30977f83-efe2-4389-ac5c-d53b17919d5d.png)

```js
const onSubmit = function (e) {
    e.preventDefault();

    //  validation이 딱히 필요가 없으면...
    console.log(e.target.email.value, ':', e.target.passwd.value);

    //  ajax 통신
}
```