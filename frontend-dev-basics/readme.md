# HTML & CSS 기초 
### html 기초
+ ```<img>``` -> 표준
+ ```<a href="">``` -> 앵커태크
+ ```<em>``` -> 강조

+ 문법을 안 지키면 quirks mode로 읽혀짐
    + 표준 모드 : HTML과 CSS 명세에 따라 렌더링 됨

<br>

+ 절대 경로 : 기준이 되는 아이가 없음. 
    + /부터 시작
+ 상대 경로 : 기준을 알아야한다.


### 엘리먼트
1. Block level
    + 기본
    + 무조건 떨어짐
    + 자기 영역이 있음. 
    + margin값이 있음
    + 백그라운드 깔 수 있음
    + p, h1~h2, table, form ...

2. inline level
    + 아무리 떨어트려도 밑으로 
        ```html
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>inline</title>
        </head>
        <body>
            <em>강조1</em>
            
            
            
            
            
            <em>강조2</em>
        </body>
        </html>
        ```
    + 바로 밑으로 보여짐
    + 스페이스를 아무리 눌려도 스페이스 하나로 보여짐
        + css를 줘서 margin 줘야함
        ```html
        <p style="margin-top:50px"/>
        ```
        + ```&nbsp;&nbsp;&nbsp;```

### 기본 마크업
+ address
+ div
    + 그롭으로 묶어서 css 스타일을 적용하고 싶을 때
    + 블록라벨 엘리먼트들을 그룹으로 묶을 때
        ```html
        <div style="width:200px;background-color: #cecece">
            <h1>제목</h1>
            <p>문장</p>	
        </div>
        ```
    + 레이아웃
+ span
    + 인라인레벨 엘리먼트를 그룹으로 묶을 때
    ```html
    <p>
        <span style="background-color:#00f; color:#ffff">
            문장인데, <em>강조할 키워드</em>도 있을 거고<br/>
            더 <strong>강조해야할 키워드</strong> 있을 겁니다.
        </span>
    </p>
    ```


### CSS
+ 인라인방식
+ 임베디드 방식
    + ```<head>```와 ```</head>```사이에 스타일 지정
    + margin



### js
```html
<form>
    <input onfocus="i = 2+2;console.log(i)" type="text" placeholder="아이디"/>
    <br/><br/>
    <input type="password" placeholder="비밀번호"/>
</form>
```
+ 아이디에 포커스 잡히면 console에 4가 출력됨

1. 함수
    + 정의
        ```html
        function f(){
            i = 2+2;
            console.log(i);
        }
        ```
    + 호출
    ```

2. this
    + console.log(this)
        ```html
        <script>
        function f(){
            console.log(this)
        }

        </script>
        ```
        + 결과 값 :  
            ``` Window {window: Window, self: Window, document: document, name: '', location: Location, …}```

    + onfocus="console.log(this);"
        ```html
        <form>
            <input onfocus="console.log(this);" type="text" placeholder="아이디"/>
            <br/><br/>
            <input type="password" placeholder="비밀번호"/>
        </form>
        ```
        + 결과 값 : ```<input onfocus="console.log(this)" type="text" placeholder="아이디">```

    + el
        ```html
        <script>
        function f(el){
            el.style.backgroundColor="#e1e6f6";
        }

        </script>
        </head>
        <body>
        <form>
            <input 
                onfocus="f(this)" 
                type="text" 
                id = "user-id"
                placeholder="아이디"/>
            <br/><br/>
            <input type="password" placeholder="비밀번호"/>
        </form>

        </body>
        </html>
        ```
        + 아이디 클릭하면 색 바뀜
    
    + onblur
        ```html
        <script>
        function onFocus(el){
            el.style.backgroundColor="#e1e6f6";
        }
        function onBlur(el){
            el.style.backgroundColor="#ffff";
        }
        </script>
        </head>
        <body>
        <form>
            <input 
            onfocus="onFocus(this)"
            onblur="onBlur(this)"
            type="text" 
            id = "user-id"
            placeholder="아이디"/>
            <br/><br/>
            <input type="password" placeholder="비밀번호"/>
        </form>
        ```
        + 다른 곳 클릭하면 색 바뀐게 하얀색으로 다시 바뀜
    
### 종속 선택자
```html
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>태그 선택자</title>
<style type="text/css">
input{
    background-color:#fff;
    padding: 5px;
    border: 2px solid #03cf5d;
    outline: none;
}
input.focused{
    background-color:#e1e6f6
}
</style>
<script>
function onFocus(el){
    //el.style.backgroundColor="#e1e6f6";
    el.className="focused"
}
function onBlur(el){
    //el.style.backgroundColor="#ffff";
    el.className=""
}
</script>
</head>
<body>
<form>
    <input 
    onfocus="onFocus(this)"
    onblur="onBlur(this)"
    type="text" 
    id = "user-id"
    placeholder="아이디"/>
    <br/><br/>
    <input type="password" placeholder="비밀번호"/>
</form>

</body>
</html>

```
+ 디자이너가 해 놓으면, 개발자가 쓴다.
```html
<script>
function changeBackground(el, className){
    el.className = className;
}

</script>
</head>
<body>
<form>
    <input 
    onfocus='changeBackground(this, "focused")'
    onblur='changeBackground(this, "")'
    type="text" 
    id = "user-id"
    placeholder="아이디"/>
    <br/><br/>
    <input type="password" placeholder="비밀번호"/>
</form>
```
+ line-heigth : 글자 높이 커짐

### 하위 선택자
### 수도 선택자
### 전체 선택자



------
+ js : 보통 비동기 
    + 파일 읽는 것도 비동기
    + 함수가 객체
        ```html
        <script>
        function f(){
            console.log("time out");
        }
        console.log("1");
        setTimeout(f, 2000);
        console.log("2");
        </script>
        ```
        + 함수 자체를 넘긴 것
        + 결과 : 1,2 출력되고, "time out" 출력 됨
            + js 기다리지 않는다. 
        + 함수 표현
            ```js
            f= function(){
                console.log("time out");
            }
            ```
        + ```f``` 대신에 ```function``` 넣을 수 있다. 
            + 들어간 함수의 이름이 없다. 
                ```js
                setTimeout(function(){
                    console.log("time out");
                }, 2000);
                ```
+ interval함수
```js
var i = 0;
var intervalId = setInterval(function(){
	i++;
	if(i==30){
		clearInterval(intervalId);
		return;
	}
	console.log("count" + i);
}, 1000);
```
    + 일정 간격을 두고 함수 실행
+ DOM
    ```js
    var elDiv = document.getElementById("box");
    console.log(elDiv);
    ```
    + 실행되는 시점에 DOM 이 완성이 안 돼서 null이 나옴
    + window 전역 객체 사용
        ```js
        window.onload=function(){
            console.log("dom loaded");
            var elDiv = document.getElementById("box");
            console.log(elDiv);
        }

        ```
+ 이벤트 걸기
    ```js
    window.onload=function(){
        var elDiv = document.getElementById("box");
        elDiv.onclick=function(){
            console.log("clicked");
        }
    }
    ```
    + div 클릭하면 함수 실행됨

# CSS - 박스모델
### 1.마진과 패딩
+ width, height 지정
+ overflow
    ```js
    overflow-y:scroll;
	overflow-y:auto;
	overflow-y:hidden;
    ```
    + 스크롤 나오거나 숨김
### 2. border
> ch03/ex04.html
```js
.box8 {
	border: 4px solid;
	/*	12가지 속성, 방향, 컬러 스타일을 할 수 있다(예제 그 중에 3가지)	*/
	border-left-width: 1px;
	border-left-style: solid;
	border-left-color: green;
	
	/*	12가지 속성별 단축형 	*/
	border-width: 1px 2px 3px 4px;	/*	T, R, L, B 	*/
	border-width: 1px 2px 3px;		/*	T (R, L) B 	*/
	border-width: 1px 2px;			/*	(T, R), (L, B) 	*/
	border-width: 1px;				/*	(T, R, L, B)	*/
	
	border-style: dash dotted solid double;
	border-color: red green blue black;
	
	/*	보통은 다음과 같은 방식을 사용한다. (4방향이 모두 width, color, style이 동일하다면,,, )	*/
	border : 1px solid #111;
	
}
```

### 3. 백그라운드 이미지

### 4. float를 이용한 박스모델 정렬
+ 박스 모델 위치
    + 겹쳤다는 이야기는 절대 좌표에 있어야한다. 
        + ```position: absolute;```을 줘야 ```left```, ```top```을 줄 수가 있다. 
    + 순서
        ```z-index: 15;```처럼 z-index로 주면 된다. 
+ float
    ```js
    float:left;
    float:right;
    ```
    + 위치는 부모 밖으로 안 나감
    + 

# 글꼴 및 텍스트
+ 16px-> 1em
+ 들여 쓰기 : ```text-indent```
+ vertical-align : 수직 정렬하고자 할 때
    + inline, table 일 때
