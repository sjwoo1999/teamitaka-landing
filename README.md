# 🏆 Teamitaka Landing

> **Teamitaka**는 대학생 팀 프로젝트를 보다 효율적으로 관리할 수 있도록 돕는 플랫폼입니다.  
> 이 저장소는 Teamitaka의 랜딩 페이지로, 서비스의 주요 기능과 특징을 소개하고, 팀 협업 스타일 테스트 등의 기능을 제공합니다.

---

## 📌 프로젝트 개요

- **프로젝트명**: Teamitaka Landing
- **주요 기능**:
  - 서비스 소개 및 특징 설명
  - 팀 협업 스타일 테스트 제공
  - PWA 지원으로 설치형 웹앱 제공

---

## 🚀 사용된 기술 스택

### 1️⃣ 프론트엔드

- **React**: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리
- **TypeScript**: 정적 타입을 지원하는 JavaScript의 상위 집합
- **Vite**: 빠른 개발 환경을 제공하는 프론트엔드 빌드 도구
- **Tailwind CSS**: 유틸리티 기반의 CSS 프레임워크로 빠른 UI 스타일링 지원
- **ESLint**: 코드 품질 유지 및 일관성을 위한 린터 도구
- **PostCSS**: CSS 트랜스파일링 및 플러그인 활용을 위한 도구

### 2️⃣ PWA 지원

- **Vite Plugin PWA**: Vite 환경에서 PWA 기능을 추가하기 위한 플러그인
- **Service Worker**: 오프라인 캐싱 및 백그라운드 기능을 제공
- **Web App Manifest**: PWA 설치 및 동작을 위한 메타데이터 관리

### 3️⃣ 개발 및 빌드 도구

- **pnpm**: 빠른 패키지 설치 및 의존성 관리 도구
- **Git & GitHub**: 버전 관리 및 협업을 위한 도구

---

## 🛠️ 설치 및 실행 방법

### 1️⃣ 프로젝트 클론

```bash
git clone https://github.com/sjwoo1999/teamitaka-landing.git
cd teamitaka-landing
```

### 2️⃣ 의존성 설치

```bash
pnpm install
```

### 3️⃣ 개발 서버 실행

```bash
pnpm dev
```

기본적으로 http://localhost:5173에서 실행됩니다.

### 4️⃣ 프로덕션 빌드

```bash
pnpm build
```

dist/ 폴더에 빌드 결과물이 생성됩니다.

### 5️⃣ 로컬 프리뷰 실행

```bash
pnpm preview
```

http://localhost:4173에서 빌드된 파일을 미리보기 가능합니다.

---

### 📂 폴더 구조

```bash
teamitaka-landing/
├── public/                 # 정적 파일 (favicon, manifest.json 등)
│   ├── icons/              # PWA 앱 아이콘 이미지
│   ├── screenshots/        # PWA 설치 화면 스크린샷
│   ├── manifest.json       # 웹 앱 메타데이터
│   └── robots.txt          # SEO 및 검색엔진 크롤링 설정
├── src/                    # 프론트엔드 소스 코드
│   ├── assets/             # 이미지, 아이콘 등 정적 리소스
│   ├── components/         # UI 컴포넌트 모음
│   ├── pages/              # 개별 페이지 컴포넌트
│   ├── App.tsx             # 최상위 React 컴포넌트
│   ├── main.tsx            # ReactDOM 및 서비스 워커 등록
│   ├── service-worker.ts   # PWA 서비스 워커 설정
│   └── index.css           # Tailwind 기반 스타일 파일
├── .eslintrc.json          # ESLint 설정
├── package.json            # 프로젝트 의존성 및 스크립트 정의
├── tsconfig.json           # TypeScript 설정 파일
├── vite.config.ts          # Vite 빌드 및 PWA 설정 파일
└── README.md               # 프로젝트 소개 및 문서화
```

---

### ⚡ PWA 지원 여부 및 설정

이 프로젝트는 PWA 기능을 지원하여 네이티브 앱처럼 설치하여 사용할 수 있습니다.

주요 설정
서비스 워커 (Service Worker): 오프라인 캐싱 및 백그라운드 기능 제공
웹 앱 매니페스트 (Web App Manifest): 앱의 이름, 아이콘, 시작 URL 등 메타데이터 설정
자동 업데이트: 새로운 콘텐츠가 배포되면 자동으로 업데이트됨
### 🐞 자주 발생하는 오류 및 해결 방법
❌ Service Worker registration failed: TypeError

```bash
Service Worker registration failed: TypeError: Failed to register a ServiceWorker
```

### 🔍 해결 방법:
vite.config.ts 파일에서 filename: "sw.js"로 설정되어 있는지 확인
main.tsx 파일에서 서비스 워커 등록 경로가 /sw.js로 설정되어 있는지 확인
브라우저의 캐시를 지우고 페이지를 새로고침

---

### 📢 기여 방법

### 1️⃣ 프로젝트 기여 절차

이 저장소를 Fork합니다.
새로운 기능을 추가하거나 버그를 수정합니다.
**Pull Request(PR)**를 생성하여 변경 사항을 설명합니다.

### 2️⃣ 브랜치 규칙

main: 배포용 브랜치
develop: 개발 브랜치
feature/이슈번호-기능명: 새로운 기능 추가 시 사용 (예: feature/12-login-ui)
bugfix/이슈번호-버그명: 버그 수정 시 사용 (예: bugfix/34-fix-navbar)

### 📜 라이선스

이 프로젝트는 MIT 라이선스에 따라 배포됩니다.
자세한 사항은 LICENSE 파일을 참고하세요.