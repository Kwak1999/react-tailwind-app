# Tailwind CSS 핵심 정리 (복습용)

## Tailwind CSS란 무엇인가요?
- HTML 안에서 CSS 스타일을 만들 수 있게 해주는 CSS 프레임워크입니다.

## CSS 프레임워크란 무엇인가요?
- 정의: 레이아웃 및 여러 컴포넌트 구성, 브라우저 호환성을 보장하는 데 소요되는 시간을 최소화하기 위해 여러 웹 개발/디자인 프로젝트에 적용할 수 있는 CSS 파일 모음입니다.

- 목적: 더 빠르게 애플리케이션을 스타일링하는 데 도움을 줍니다.

## CSS 프레임워크 종류 (for React JS)
- Material UI

- React Bootstrap

- Semantic UI

- Ant Design

- Materialize

## Tailwind CSS의 장점 (복습용)
- Tailwind CSS는 부트스트랩과 유사하게 m-1, flex 와 같이 미리 세팅된 Utility Class를 활용하여 HTML에서 직접 스타일링을 할 수 있습니다.

- 주요 장점

    - 빠른 스타일링 작업 속도:
      - 미리 정의된 유틸리티 클래스를 사용하기 때문에 스타일을 신속하게 적용할 수 있습니다.

    - 클래스/ID 작명의 고민 해소:
      - 새로운 class나 id 이름을 따로 작성하거나 관리할 필요가 없습니다. (유틸리티 클래스를 조합하여 사용)

    - 쉬운 적응:
      - 처음에는 유틸리티 클래스 사용법에 익숙해지는 시간이 필요할 수 있지만, IntelliSense 플러그인이 제공되어 사용자가 클래스를 빠르게 찾고 쉽게 익숙해질 수 있도록 돕습니다.

# 설치
```
npx create-react-app ./
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm install react-icons
npm install react-scroll
```

# 환경설정

```tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# React + Tailwind CSS 컴포넌트 요약

| 컴포넌트 | 주요 역할 | Tailwind 핵심 클래스                                                    |
|-----------|-----------|--------------------------------------------------------------------|
| **Navbar.js** | 상단 네비게이션 바 | `fixed`, `flex`, `bg-zinc-200`, `drop-shadow-lg`                   |
| **Home.js** | 홈 섹션(히어로 영역) | `h-screen`, `bg-zinc-200`, `grid md:grid-cols-2`, `text-5xl font-bold` |
| **About.js** | 회사 소개 섹션 | `max-w-screen-lg`, `text-5xl font-bold`, `text-gray-500`           |
| **Support.js** | 서비스 지원(카드형 레이아웃) | `bg-slate-900/90`, `grid lg:grid-cols-3`, `shadow-2xl`             |
| **Feature.js** | 기능 목록 섹션 | `grid sm:grid-cols-2 lg:grid-cols-4`, `text-blue-600` (아이콘)        |
| **Feedback.js** | 후기(Testimonials) 섹션 | `bg-slate-700`, `rounded-lg`, `md:flex-row`                        |
| **Contact.js** | 연락 폼 섹션 | `bg-gradient-to-b`, `border-2`, `rounded-md`, `flex flex-col`      |
| **Footer.js** | 하단 정보(푸터) 섹션 | `grid md:grid-cols-6`, `text-gray-300`, `border-b-2`               |
| **App.js** | 컴포넌트 전체 렌더링 | `Navbar`, `Home`, `About` 등 전부 호출                                  |
| **index.js** | 엔트리 파일 / `index.css`로 Tailwind 불러오기 | `ReactDOM.createRoot`로 App 마운트                                     |

---

이 표로 각 컴포넌트가 **어떤 역할을 하고 Tailwind CSS를 어떻게 적용했는지** 한눈에 볼 수 있습니다.
