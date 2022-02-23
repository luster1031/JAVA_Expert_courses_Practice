### [HTML Element 추가1](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex06.html)
+ 2초후에 DOM 추가
+ ```appendChild```

### [HTML Element 추가2](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex07.html)
+ ex06 다른 버전
+ ```innerHTML += htmls;```

### [HTML Element 속성 조작하기1](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex08.html)
+ 2초후에 이미지 넣기
	+ 크기, 제목 설정

### [HTML Element 속성 조작하기2](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex09.html)
+ 직접 접근하는 방법 말고 api함수 사용하는 방법
+ ```imgElement.setAttribute()```
+ (표준[property] + 비표준[property가 아님])속성(attibute)을 읽기/쓰기 위해서 setAttribute/getAttribute를 사용한다. 

+ attribute : 태그 설정(화면에 그리는 용도)
	+ property 가 attribute보다 큰 느낌 
		+ attribute는 다 property(표준만 가능)
		+ 모든 property가 다 attribute가 아니다.

+ property는 html DOM안에서 동적인 속성
+ attribute는 html 문서 안에서 정적인 속성 그 자체
+ 비표준 속성도 property가 된다.
```html
<script>
$('ul li').click(function(){
	li.data('no');
});
</script>

<ul>
	<li data-no='10'>
	<li>
	<li>
<ul>
```


### [HTML Element 가져오기](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex10.html)
+ id이용
	+ ```document.getElementById("header-01");```
	+ ```<h3 id='header-01'>Header 01</h3>```
+ Tag Name
	+ ```document.getElementsByTagName("h4");```
	+ ```<h4>Header 03</h4>```

+ Class Name
	+ ```document.getElementsByClassName("header");```
	+ ```<h5 class="header">Header 05</h5>```
+ css 선택자
	+ ```<h6 id="header-07" class="header2">Header 07</h6>```
	+ id
		+ ```document.querySelector("#header-07");```
	+ class
		+ ```document.querySelectorAll(".header2");```

### [DOM(Document Object Model)- Event 처리 1](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex11.html)
1. 마우스
2. 키보드
3. form
4. input
5. touch

### [DOM(Document Object Model) - Event 처리 2](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex12.html)
+ attachEvent
	+ on을 추가해줘야한다.
+ addEventListener
+ removeEventListener


### [기본 이벤트 핸들러 동작 막기](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex13.html)
+ preventDefault

### [기본(default) Event Hanlder 동작 막기 - 2. form: DOM Event Model Level0](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex14.html)
+ false, true

### [기본(default) Event Hanlder 동작 막기 - 2. form: DOM Event Model Level2](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex15.html)
+ 메소드 호출로 submit하기

### [Event Propagation(Bubbling)](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/ch06/src/main/webapp/ex16.html)
+ 