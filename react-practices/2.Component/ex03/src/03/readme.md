# Synthetic Event(이벤트 합성)

![image](https://user-images.githubusercontent.com/61460836/158499268-aebda839-2d2e-4d09-a4c5-b09bb450f6a8.png)

+ event.preventDefault();
    + submmit 할 때 안 넘어가게
    ```js
    const onAddFormSubmit = function(event) {
    event.preventDefault(); // action으로 넘어가면 안 됨
    console.log(event.target.name, ':', 'Ajax로 등록할 겁니다.');
    }
    ```


+ onChage
    ```js
    <input
        type='text'
        name='message'
        placeholder='메세지를 입력 하세요'
        onChange={onChangeMessageInput}
    />
    ```
    + 검색어 입력할 때마다 출력 됨
        + event.target.value
            ![image](https://user-images.githubusercontent.com/61460836/158499709-3da5ef1d-43e9-48d4-8c7f-cc39e1c8d5e8.png)