# 반응형 웹 디자인 responsive web design
반응형 웹 디자인은 스마트폰, 태블릿 등의 기기 화면 크기에 맞추어서 웹 사이트 요소의 크기를 조정하고 재배치하는 디자인을 말합니다.

## 뷰 포트 view port
 뷰 포트<sup><a href="#footnote1">1</a></sup> 는 기기의 화면 정도로 이해해도 무방할 것 같습니다. 뷰 포트는 PC 화면을 위해 디자인된 웹 페이지를 모바일 기기의 화면 크기에 맞게 크기를 조절하기 위해 도입되었습니다.


### 적용 예시
뷰 포트 속성은 content 속성의 값 자리에 지정합니다. 다음은 가장 많이 사용하는 뷰 포트 속성입니다.

```html
<!-- <head>와 </head> 태그 사이에 작성 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### 뷰 포트 속성 값
content 속성의 값 자리에서 사용되는 뷰 포트 속성 값<sup><a href="#footnote2">2</a></sup> 은 다음과 같습니다.

| | width | height | user-scalabe | initial-scale |
| -- | -- | -- | -- | -- |
| <small>**설명**</small> | - | - | <small>확대/축소 가능 여부</small> | <small>초기 확대/축소 배율</small> |
| <small>**기본 값**</small> | <small>브라우저 기본 값<small> | <small>브라우저 기본 값<small> | `yes` | `1` |
| <small>**사용 가능한 값**</small> | <small>`device-width` or 크기 지정</small> | <small>`device-width` or 크기 지정</small> | <small>`yes` or `no`</small> | <small>`1` ~ `10`</small> |
| <small>**비고**</small> | <small><li>`device-width`는 뷰 포트 너비의 100% (100vw)<li>크기 지정은 `1` ~ `10000` 가능, 음수 값은 무시됨</li><small> | <small>width와 동일</small> | - | - |

### 뷰 포트 단위
뷰 포트 개념이 등장하기 전까지는 CSS에서 크기를 지정할 때 주로 `px`와 `%` 단위를 사용했습니다. 그러나 뷰 포트 개념이 등장하고 나서는 뷰 포트의 너비 또는 높이를 기준으로 하는 단위를 사용할 수 있게 되었습니다.

- `vw` (viewport width)
    -  1vw =  뷰 포트 너비의 1%
- `vh` (viewport height)
    - 1vh = 뷰 포트 높이의 1%
- `vmin` (viewport minimum)
    - 뷰 포트 <u>너비</u>와 <u>높이</u> 중에서 더 작은 값의 1%
- `vmax` (viewport maximum)
    - 뷰 포트 <u>너비</u>와 <u>높이</u> 중에서 더 큰 값의 1% 


## 미디어 쿼리 media query

CSS 모듈인 미디어 쿼리는 사용자가 어떤 기기로 사이트에 접속했는지에 따라 특정한 CSS 스타일을 적용하는 방법입니다.

### 적용 예시
미디어 쿼리는 @media 속성을 사용하여 어떤 미디어 유형, 어떤 조건에서 어떤 CSS를 적용할 것인지 지정하는 방식으로 작성합니다. 다음은 미디어 쿼리의 기본형입니다.

```CSS
@media screen and (min-width: 768px) and (max-width: 1439px) {
    /* 적용하고 싶은 CSS */
}
```

- **only와 not**
    - only: 미디어 쿼리를 지원하지 않는 웹 브라우저에서는 미디어 쿼리를 무시하고 실행하지 않습니다.
        ```CSS
        @media only screen and (min-width: 768px) {
        /* 적용하고 싶은 CSS */
        }
        ```
    - not: 다음에 지정하는 미디어 유형을 제외합니다. <예시> not tv
        ```CSS
        @media not tv and (min-width: 768px) {
        /* 적용하고 싶은 CSS */
        }
        ```
- **쉼표**
    - and 조건이 동일한 미디어 유형이 있다면 쉼표(,)를 이용하여 작성할 수 있습니다.


#### 속성 1. 미디어의 유형
미디어 쿼리에서 @media 속성 다음에 미디어 유형을 적으면 해당 미디어 유형에 특정 CSS를 적용할 수 있습니다.
- **all**) 모든 미디어 유형
- **print**) 인쇄 장치
- **screen**) 컴퓨터, 스마트폰
- **tv**) 음성 영상 동시 출려괴는 티비
- **aural**) 음성 합성 장치
- **braile**) 점자 표시 장치
- **handheld**) 패드
- **projection**) 프로젝터
- **tty**) 디스플레이 기능이 제한된 장치. px 단위 사용 불가
- **embossed**) 점자 프린터

#### 속성 2-1. 웹 문서 가로 세로 높이
미디어 쿼리의 조건으로 뷰 포트의 너비와 높이를 사용할 수 있습니다.  
screen이 아닌 미디어에서는 스크롤을 포함한 전체 문서를 height로 지정해야 합니다.
print에서는 한 페이지 높이를 기준으로 합니다.

- width, height
- min-width, min-height
- max-width, max-height

#### 속성 2-2. 단말기의 가로 너비와 세로 높이
단말기의 너비와 높이는 단말기 브라우저 창의 너비와 높이를 말합니다.
- device-width, device-height
- min-device-width, min-device-height
- max-device-width, max-device-height


#### 속성 3. 화면 회전
orientation 속성을 사용하면 기기의 방향에 따라 웹 사이트의 레이아웃을 바꿀 수 있습니다.
- portrait: 세로 모드
- landscape: 가로 모드

이 외에도 화면 비율이나 단말기 화면 비율, 색상당 비트 수 같은 여러 가지 미디어 쿼리 조건이 있습니다. 참고: [w3.org](https://www.w3.org/TR/mediaqueries-3/)

#### breakpoint 중단점
미디어 쿼리를 사용하면 화면 크기에 따라 서로 다른 CSS를 적용하게 되는데 이때 서로 다른 CSS를 적용하게 되는 화면 크기의 분기점을 중단점이라고 합니다. 보통 모바일과 태블릿, 데스크톱의 화면 크기를 중단점으로 삼습니다.  
처리 속도나 화면 크기 등에서 다른 기기보다 모바일의 제약 조건이 더 많으므로 모바일의 레이아웃을 기본으로 하여 CSS를 만든다. 모바일용 CSS는 태블릿과 데스크톱에도 기본으로 적용된다.   
그러고 나서 사양이 좀 더 좋고 화면이 큰 태블릿과 데스크톱에 맞춰 더 많은 기능과 스타일을 추가한다. 
이렇게 모바일을 먼저 고려하여 미디어 쿼리를 작성하는 것을 모바일 퍼스트 기법이라고 한다. 

- 스마트폰: 모바일 페이지는 미디어 쿼리를 사용하지 않고 기본 css로 작성, 만일 스마트폰의 방향까지 고려해서 제작한다면 min-width의 세로와 가로를 각각 portrait 320px, landscape 480px로 지정
- 태블릿: 세로 크기가 768px 이상이면 태블릿으로 지정. 가로 크기는 데스크톱과 똑같이 1024px 이상으로 지정
- 데스크톱: 화면 크기가 1024px 이상이면 데스크톱으로 설정

참고 [디바이스별 화면 크기](yesviz.com/devices.php)

### 미디어 쿼리 적용하는 방법

1. 외부 CSS 파일 연결하기
```
<link rel="stylesheet" media="미디어 쿼리 조건" href="css 파일 경로">
```

```
import url("css/tablet.css") only screen and (min-width: 321px) and (max-width:768px);
```

두 방법은 속도나 처리 면에서 큰 차이가 없다. 
그런데 인터넷 익스플로러의 경우 @import문과 자바스크립트가 함께 있을 경우 자바스크립트를 먼저 내려받은 후에 @import문에 있는 CSS를 다운로드합니다. 
그래서 자바스크립트에서 스타일과 관련된 정보를 처리해야 할 경우 오류가 날 수 있습니다. 
CSS 파일이 많고 규모가 큰 사이트를 갭라한다면 @import문보다 \<link\> 태그를 주로 사용합니다. 

2. 웹 문서에서 미디어 쿼리 직접 지정
```
<style media="screen and (max-width: 320px)">
    body {
        background-color: orange;
    }
</style>
``` 
```CSS
<style>
    @media screen and (max-width: 320px) {
        body {
            background-color: orange;
        }
    }
</style>
``` 

---
#### 각주

<p id="footnote1"><small>1</small> 뷰 포트 개념</p>

- 뷰 포트에 관한 더 자세한 설명은 w3schools의 아티클 [RWD Viewport](https://www.w3schools.com/css/css_rwd_viewport.asp)를 참조해주십시오.

<p id="footnote2"><small>2</small> 뷰 포트 속성</p>

- 뷰 포트 content 속성 값에 관한 더 자세한 설명은 mdn의 아티클 [Viewport meta tag](https://developer.mozilla.org/ko/docs/Web/HTML/Viewport_meta_tag)를 참조해 주십시오.
