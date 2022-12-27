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
