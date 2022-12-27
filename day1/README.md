# Day 1

# WEB

client (request) => server (response) => client
client는 요청만 할 수 있다
server는 응답만 할 수 있다

# HTML

웹 브라우저 환경의 베이스 <br>
문서의 구조, 정보 위계가 명확하게 보이는 아름다운 HTML 코드를 작성하자 => semantic markup <br>
검색엔진 최적화

# TAG

tag: HTML에서는 웹 문서에 정보를 정의해주는 방식

# Method (get & post)

get => URL에 값이 노출 됨 (일반적으로 사용) <br>
post => URL에 값이 노출되지 않음 (특정한 경우에만 사용)

# EMPHASIS (강조)

em: 특정 문맥 강조 <br>
strong: 중요, 긴급, 심각성을 알릴 때 사용

# ANCHOR (링크)

link => X link는 다른 파일을 연결할 때 쓰는 태그 <br>
a => O 다른 위치로 이동할 때 `<a heref="">`

href => hypertext reference <br>
웹 url / 상대 경로 `<a href="주소"> </a>` <br>
페이지 내 이동 `<a href="#id"> </a>` <br>
메일 쓰기 `<a href="mailto:메일주소"> </a>` <br>
전화 걸기 `<a href="tel:전화번호"> </a>` (주로 모바일 환경에서 사용)

# LIST (리스트)

ol => (ordered list) <br>
ul => (unordered list) <br>
ol, ul 자식 요소는 무조건 li로 와야한다 <br>
다른 태그 삽입시에도 li태그로 감싸야한다

# QUOTATION

`<blockquote> </blockquote>` : 하나의 덩어리

`<q> </q>` : 일부 인용시

# NEWLINE

`<br>` : 한 문단 안에서 줄바꿈 1번 <br>
`<p> </p>` : 문단을 나눔. 줄바꿈 2번 <br>
`<div> </div>` : 페이지 안에서 영역을 나눔 줄바꿈 1번 <br>
`<span> </span>` : 줄바꿈을 하지 않고 범위 지정 줄바꿈 X

# FORM

form: 사용자로부터 input 을 받기 위한 태그 `<form action="" method="">` <br>
action="API주소" (서버쪽 url) <br>
method="GET | POST"

# INPUT

input: 입력창, 인풋필드 <br>
type 값 필수! 사용자로부터 입력받고 싶은 데이터는 여러가지 <br>
text, email, password, number, tel, fill

# LABEL

각 input 값의 설명을 담당하는 Label태그 <br>
for, id 이용

# CHECKBOX

radio => 단일체크 <br>
checkbox => 중복체크

# SELECT&OPTION

여러 개의 항목을 보여주고 고를 수 있도록 함 <br>
복수 선택은 multiple

# BUTTON

type => button, submit, reset <br>

- submit: form태그 값을 전송할 때 사용
- reset: 초기화
- button: 이외의 경우 사용

# TABLE

table(table) > tr(table row) > th(table head), td(table body)

- 세로 차지: rowspan=" "
- 가로 차지: colspan=" "

# HEAD

- title: 제목 (검색 최적화에 매우 중요)
- link: css첨부 (rel => 불러올 요소의 형태, href => 파일 경로)
- style: 내부 css
- script: 내부 js (body 태그 마지막에 위치 => DOM객체 불러온 후 js 실행)

# META

위의 4개 태그에 넣지 못하는 내용을 넣음

- name = "종류"
- content = "내용"
