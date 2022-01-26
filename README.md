<!-- Heading -->

# 삼성전자 웹 스토어 클론 코딩

## **- 제작동기**

왜 대한민국 10대 20대 30대들의 스마트폰이 대부분 아이폰을..
<br>아니 애플 전자기기만 고집하는가.
<br>물론 스펙적인 부분이나 다른 운영체제에 대한 부분도 있지만 **'감성'** 때문이라고 생각한다.
<br>이 감성은 삼성전자와 애플 스토어에서도 차이가 나는데 **'삼성이 애플같은 감성이 있다면?'** 이라는 생각을 가지고 제작을 해봤다.

<hr/>

## **- 구성**

구성은

<!-- Boolet list -->

- Main
- Phone
- Watch
- Tablet
- Buds

총 4개의 웹페이지를 제작 예정

<!-- Link -->

애플의 디자인적인 감성과 삼성전자 온라인 스토어에서 사용하는 세련된 동작을 함께 넣어보려한다.

[애플 에어팟](https://www.apple.com/kr/airpods-3rd-generation/)

[삼성전자 버즈 프로](https://www.samsung.com/sec/buds/galaxy-buds-pro-r190/SM-R190NZWAKOO/)

### Main

- nav-bar

  <br>각 카테고리 별 링크를 넣을 예정이며, Phone, Watch, Buds, Tablet만 제작 후 남은 Book,Accessory는 실제 삼성 링크를 넣음.
  <br>SAMSUNG로고는 기존 삼성전자 페이지에서 소스를 그대로 가져다 활용
  <br>~~flexbox를 사용한 layout~~
  <br>flexbox 에서 grid로 변경
  <br>nav-bar 상단 고정

- unit

  <br>베스트셀러 4가지를 main으로 함.
  <br>Main img들은 삼성전자 페이지에서 그대로 가져다 활용
  <br>icon은 Font Awesome에서 활용
  <br>grid를 활용한 layout
  <br> `<a></a>` tag를 활용한 링크 접속 활용

---

22.01.21
Main 4가지 베스트셀러 [The FreeStyle]에서 [Galaxy S7 FE]로 변경
<br>최소 width : 920 부터 반응하도록 만듬
<br>~~font 반응형을 알아보고 추후 모바일에서도 접근가능하도록 할 예정~~
<br>모바일, 태블릿, PC에서의 각각 다른 화면비율값을 입력하여, 반응하도록 만들 예정 (미디어쿼리 사용할 생각)

22.01.23
<br>nav-bar 상단 fixed 업데이트
<br>한국적인 font 업데이트
<br>다음 Phone 웹 업데이트 예정 ( jQuery를 사용하지 않은 slider 제작 생각중 )

22.01.24
<br>Phone html 생성.
<br>JavaScript를 활용한 slider 제작

22.01.25
<br>slider 보완 및 마무리
<br>구매 창 html 생성
<br>Handler를 활용한 Phone img 변경 제작시작

22.01.26
<br>삼성 홈페이지에서 컬러별 이미지가 달라 Handler를 이용하기 까다로움
<br>삼성에선 원하는 컬러를 선택하면, 그 컬러에 맞는 html로 바뀌도록 만들었음

<br>Black 색상의 주소
<br>![블랙색상 주소](img/readme_img/Fold3_black.PNG)

<br>Green 색상의 주소
<br>![그린색상 주소](img/readme_img/Fold3_Green.PNG)

phone.html을 3가지 컬러별로 만들어 원하는 색깔을 선택 시 그에 맞는 html로 이동하게 만듬
<br>위와 같이 html을 다르게 하면 각 컬러별로 사진뿐만 아니라 재고현황까지 편하게 관리가 가능함
