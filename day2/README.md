## Day2

# CSS (Cascading Style Sheet)

Document(TagName, Class, Id) + Style(property:value)

사용방법 3가지

```
1. <link rel="stylesheet" href="./style.css">
2. <style> p{font-size: 20px;} </style>
3. <p style="font-size: large;">이 방법은 절대 쓰지 않기</p>
```

box model <br>
Margin > Border > Padding > Content <br>
margin: Top, Right, Bottom, Left; <= 순서로 입력가능

# Block

- 길을 막는 요소
- Block속성의 요소 옆에는 무언가가 올 수 없다
- width, height를 지정하지 않으면 부모요소의 100%를 가져온다
- 따로 width를 선언한 경우, 남은 공간은 margin으로 자동으로 채움
- height를 선언하지 않은 경우, 자식요소의 height합 => 부모의 height
- maring: 0 auto; => 위아래: 0px, 좌우: auto
- width, height, padding, border, margin => 모두 적용 가능!

# Inline

- 흐르는 요소
- 흐름을 깨는 요소 사용 불가 ex) width, height, padding-top, margin-top, border-top...

# Block vs Inline

- Block = 면
- Inline = 선

- 면(영역) vs 선(흐름)

# Inline-block

- block && Inline 각각의 좋은 점을 모두 갖고 있는 오쇼
- inline처럼 가로로 흐르는 동시에 block처럼 영역을 잡을 수도 있다

# Float

- Float, 왜 배워요? => 가로 배치!
- float가 레이아웃에 큰 영향을 미친다
- 부모가 갖고 있던 자식이 float하게 되면, 집나간 자식이 되어, 해당 공간이 씹힘
- float 공간이 비었다고 부모가 알게되어 나머지 자식요소를 당겨옴 부모 요소의 크기 또한 줄어듬
- float를 적용하게 되면, 해당 요소의 신분이 상승! => Inline / Inline-block / Block
- 다만 float로 block 신분 상승한 요소는 길막을 못함, block가 갖고 있던 모든 성질을 가져오지 못함

# Float, how to fix - 달달방법

- overflow : hidden;

# Float, how to fix - 정석방법

Clearfix (clear : 취소하다) <br>
float로 망가진 레이아웃을 고치기 위해 나온 속성

clear : left | right | both => 임의의 div를 만들어서 해당 속성을 넣어줌 <br>
display: bolck인 요소에만 사용가능!

- clear : left -> float : left에게 영향을 받지 않겠다!
- clear : right -> float : right에게 영향 받지 않겠다!
- clear : both -> float : left, right에게 영향 받지 않겠다!

`임의의 div 생성 X => before, after 사용`

```
.Element::before||after{
    content: '';
    display: block;
    clear: left;
}

```

# Position

- 요소를 원하는 위치에 자유롭게 이동할 수 있도록 사용!
- static, relative, absolute, fixed, sticky

1. 내가 어떤 종류의 position을 사용하고 있는지
2. 내가 사용하는 position은 어떤 기준을 가지고 요소를 배치 하는지

## Position - static

- 모든 요소의 기본 요소는 static
- 편안하게 사용하면된다
- 개발자도구로 확인가능

## Position - relative

- relative: 자기가 있던 요소를 기준으로 이동
- float과 달리, 현재 위치를 잘 알고 있으면서 붕 뜬 상태임

## Position - absolute

- 붕 떠서 찾을 길 없는 자식 요소
- 블록으로 신분 상승
- 길막은 안되는 블록
- 분명 떠있는데 보임
- float에서 발생했던 문제가 다시 발생함
- 자신이 원하는 요소를 기준으로 position변경 가능
- position static이 아닌 가장 가까운 요소를 기준으로 삼음

## Position - fixed

- absolute와 동일한 현상이 발생함
- fixed vs absolute 차이점!
- fixed 기준점 => viewport
- viewport란? => 사용자가 보고 있는 모니터 사이즈

## Position 움직이기!

- top, bottom, right, left 값을 이용하여 이동
- top || bottom, right || left 하나씩만 이용해서 이동

# Z-index

- 요소가 붕 떠있을 때, 해당 요소의 수직 레벨이 생성됩니다.
- 붕 뜬 요소들을 곂치고 싶을 때, z-index값을 사용합니다.

# Flexbox

- 정렬의 끝판왕! float, position 대신 flexbox 사용 <br>

### 사용방법

1. flexbox 쓰겠다고 선언 => display: flex;
2. 가로 정렬 / 세로 정렬 선택 => flex-direction: row | column;
3. 무조건 한 줄 안에 다 정렬할지 / 여러 줄을 사용할지 => flex-wrap: wrap | no-wrap;
4. 1~3번 과정을 이용해서 flexbox 파티

# Media Query

- 반응형 웹을 만들기 위해 필수적인 요소!
- 접속한 브라우저에 딱 맞게 알아서 보이도록 합니다.
- 필수요소
  `viewport meta (HTML)`

```
<meta name="viewport" content="width=device-width,
initial-scale=1.0">
```

`media query (CSS)`

```
@media screen and (min-width: 768px){

}
```
