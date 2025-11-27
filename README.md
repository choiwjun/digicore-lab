# Digicore-Lab Official Website

Digicore-Lab 공식 웹사이트 - AI × Web/App × Cloud 디지털 솔루션 파트너

## 📋 프로젝트 개요

본 프로젝트는 Digicore-Lab의 공식 웹사이트로, 정적 HTML+CSS+JS 기반의 경량 프론트엔드로 구축되었습니다.

### 주요 특징

- ✅ **벤처기업 인증 강조**: 중소벤처기업부 인증 기반 신뢰도 강화
- 🌏 **다국어 지원**: KR/JPN 양국 대응 (i18n)
- 📱 **완전 반응형**: PC, Tablet, Mobile 모든 디바이스 최적화
- ⚡ **빠른 로딩**: 정적 파일 기반 경량 구조
- 🎨 **통일된 디자인 시스템**: Noto Sans 폰트 기반
- 🔍 **SEO 최적화**: 검색 엔진 최적화 완료

## 🏗️ 프로젝트 구조

```
digicore-lab/
├── index.html                 # HOME 페이지
├── services/                  # 서비스 소개 페이지
│   ├── web-development.html
│   ├── app-development.html
│   ├── ai-solutions.html
│   └── cloud-devops.html
├── works/                     # 포트폴리오
│   └── index.html
├── company/                   # 회사 소개
│   └── index.html
├── insights/                  # 블로그/인사이트
│   └── index.html
├── contact/                   # 문의 페이지
│   └── index.html
├── css/                       # 스타일시트
│   ├── reset.css             # CSS 리셋
│   ├── design-system.css     # 디자인 시스템
│   ├── common.css            # 공통 컴포넌트
│   └── pages/                # 페이지별 CSS
│       ├── home.css
│       ├── services.css
│       ├── works.css
│       ├── company.css
│       ├── insights.css
│       └── contact.css
├── js/                        # JavaScript
│   ├── common.js             # 공통 기능
│   ├── i18n.js               # 다국어 지원
│   ├── filter.js             # 포트폴리오 필터링
│   └── contact.js            # 문의 폼
└── assets/                    # 이미지 및 리소스
    └── images/
```

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary Blue**: #0052FF (CTA, 링크)
- **Secondary Black**: #111111 (타이틀)
- **Accent Mint**: #00D4A6 (포인트)
- **Gray Background**: #F5F6F7 (배경)
- **White**: #FFFFFF (카드)

### 타이포그래피

- **폰트**: Noto Sans (KR/JP 포함)
- **H1**: 64px / Bold (700)
- **H2**: 40px / Semibold (600)
- **H3**: 28px / Semibold (600)
- **Body**: 18px / Regular (400)

## 🚀 주요 기능

### 1. HOME 페이지
- Hero Section (AI × Web/App × Cloud)
- Trust Bar (벤처기업 인증)
- Services Overview (4개 카드)
- Portfolio Highlight
- Why Digicore-Lab (5가지 차별점)
- Tech Stack
- CTA Section

### 2. SERVICES 페이지
- Web Development
- App Development
- AI Solutions
- Cloud & DevOps

각 서비스 페이지 구조:
- Hero
- 문제 정의
- 솔루션
- 주요 기능
- 적용 기술
- 프로젝트 사례
- CTA

### 3. WORKS 페이지
- 카테고리 필터링 (Web/App/AI/Cloud)
- 포트폴리오 그리드
- 성과 지표 중심 표시

### 4. COMPANY 페이지
- 회사 소개
- Vision & Mission
- 벤처기업 인증 상세
- 핵심 가치

### 5. INSIGHTS 페이지
- 기술 블로그/인사이트
- 카테고리별 아티클

### 6. CONTACT 페이지
- 다단계 문의 폼 (4단계)
  - Step 1: 프로젝트 유형 선택
  - Step 2: 예산 선택
  - Step 3: 기본 정보 입력
  - Step 4: 상세 내용 작성
- FAQ 아코디언
- 파일 업로드 지원

## 🌐 다국어 지원

### 지원 언어
- 한국어 (KR) - 기본
- 일본어 (JP)

### 사용 방법
헤더의 언어 전환 버튼(KR/JP)을 클릭하여 즉시 전환 가능합니다.

언어 설정은 localStorage에 저장되어 재방문 시 유지됩니다.

## 📱 반응형 디자인

### 브레이크포인트
- **Desktop**: 1024px 이상
- **Tablet**: 768px - 1023px
- **Mobile**: 767px 이하

### 주요 반응형 기능
- 모바일 햄버거 메뉴
- 그리드 레이아웃 자동 조정
- 타이포그래피 크기 조정
- 터치 친화적 UI

## 🔧 설치 및 실행

### 로컬 개발 환경

정적 웹사이트이므로 별도 빌드 없이 바로 실행 가능합니다.

#### 방법 1: Live Server (VS Code)
```bash
# VS Code에서 Live Server 확장 설치 후
# index.html 우클릭 → "Open with Live Server"
```

#### 방법 2: Python Simple Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# 브라우저에서 http://localhost:8000 접속
```

#### 방법 3: Node.js http-server
```bash
# http-server 설치
npm install -g http-server

# 실행
http-server

# 브라우저에서 http://localhost:8080 접속
```

## 📦 배포

### GitHub Pages
```bash
# gh-pages 브랜치로 푸시
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Netlify
1. GitHub 저장소 연결
2. Build Command: (비워두기)
3. Publish Directory: `/`
4. Deploy

### Vercel
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

## 🎯 SEO 최적화

### 구현된 SEO 기능
- ✅ Semantic HTML5 태그
- ✅ Meta Description
- ✅ Open Graph 태그
- ✅ 반응형 이미지 (lazy loading 준비)
- ✅ 구조화된 URL
- ✅ 빠른 로딩 속도
- ✅ 모바일 친화적 디자인

## 🔒 접근성 (Accessibility)

- WCAG 2.1 AA 준수
- 키보드 네비게이션 지원
- ARIA 레이블 적용
- 충분한 색상 대비
- 명확한 포커스 상태

## 📝 라이센스

Copyright © 2024 Digicore-Lab. All rights reserved.

## 👥 기여

본 프로젝트는 Digicore-Lab의 공식 웹사이트입니다.

문의: contact@digicore-lab.com

---

**Digicore-Lab** - AI × Web/App × Cloud 디지털 솔루션 파트너
중소벤처기업부 인증 벤처기업