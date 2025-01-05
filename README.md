# fe-node-todo

# 미션 PR

- https://github.com/softeer5th/fe-node-todo/pull/2

# 추가 공부 내용

## `Map` 객체

```javascript
todoMap.forEach((value, key, map) => {
  // do something ...
});
```

- 기존 코드: 투두맵을 순회하며 각 `todo` 인스턴스의 메서드를 호출하기 위해 `Map`을 배열로 변환 후 순회.
- 수정한 코드: `forEach`를 `Map`에서 곧바로 사용할 수 있다!
- 출처: [MDN 공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)

## 템플릿 리터럴

- 기존에는 템플릿 리터럴의 `백틱`과 `${}`만을 활용했었는데, 여러 줄의 메뉴 출력에서 템플릿 리터럴을 활용해 보라는 크롱의 리뷰로, 모르는 부분들을 다시 공부해보기로 했다!
- 출처: [MDN 공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

### 1. 줄바꿈

```js
console.log(`string text line 1
string text line 2`);
```

- 기존 코드: `console.log()` 메뉴 개수만큼 반복
- 수정한 코드: 템플릿 리터럴을 활용하여 개행. 그런데 템플릿 리터럴의 경우 코드 들여쓰기까지 출력에 반영되어 따로 처리해주어야 하는 불편함이 있었다. ㅠ ㅠ.
- 재수정한 코드: 메뉴를 상수로 관리하여 `output`에서는 개행으로 `join`하여 출력하도록 했다.

### 2. Tagged templates

```js
function myTag(strings, personExp, ageExp) {
  // do something...
}

myTag`that ${person} is a ${age}`;
```

- 표현식이 인수로 들어간다!! Wow

### 3. Raw strings

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```

- 문자열 고대 ~~ 로 쓰고 싶을 때 사용
