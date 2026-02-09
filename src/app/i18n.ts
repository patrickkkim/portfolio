export type Locale = 'en' | 'kr';

export interface SiteCopy {
  navbar: {
    projects: string;
    capabilities: string;
    about: string;
    faq: string;
    contact: string;
  };
  hero: {
    line1: string;
    line2: string;
    craft: string;
    prompt: string;
    headline: string;
    highlightPhrase?: string;
    subtext: string;
    scrollTop: string;
    scrollBottom: string;
  };
  manifesto: {
    highlight: string;
    statement: string;
    changeTitle: string;
    changeBody: string;
    codeExpression: string;
  };
  introduction: {
    sectionTitle: string;
    headline: string;
    body: string;
    detail: string;
  };
  projects: {
    sectionTitle: string;
    sectionHeadline: string;
    items: Array<{
      title: string;
      category: string;
    }>;
  };
  capabilities: {
    sectionTitle: string;
    sectionHeadline: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  faq: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contactSection: {
    sectionTitle: string;
    headline: string;
    description: string;
    primaryCta: string;
  };
  personalInfo: {
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  };
  footer: {
    instagram: string;
    github: string;
    linkedin: string;
    email: string;
    copyright: string;
  };
}

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    navbar: {
      projects: 'Projects',
      capabilities: 'Capabilities',
      about: 'About',
      faq: 'FAQ',
      contact: "Let's Talk"
    },
    hero: {
      line1: 'The Era',
      line2: 'of Digital',
      craft: 'Craft',
      prompt: 'Why is creative engineering important?',
      headline:
        "Valuable software should not only be functional but memorable. It's time for a shift towards experiences that leave a lasting impression.",
      highlightPhrase: 'lasting impression',
      subtext: 'I help brands and individuals build decentralized, performant, and beautiful web applications.',
      scrollTop: 'Scroll',
      scrollBottom: 'Down'
    },
    manifesto: {
      highlight: 'Code',
      statement: 'is just the tool. The real craft lies in solving complex problems with simple, elegant solutions that users love to use.',
      changeTitle: "It's time for a change.",
      changeBody:
        'Most web experiences are forgettable. I strive to create digital products that stand out through bold typography, fluid animations, and rock-solid performance.',
      codeExpression: 'transformation'
    },
    introduction: {
      sectionTitle: 'My Introduction',
      headline: 'I build product experiences from zero to launch, then run them reliably in production.',
      body:
        'I am a creative engineer focused on web, mobile, and data platforms. From architecture and implementation to deployment, observability, and iteration, I work end-to-end with speed and accountability.',
      detail:
        'I graduated in Computer Science in Korea, received multiple awards including the Excellence Award at the LikeLion 8th Cohort Hackathon and the Grand Prize at the university capstone competition, worked at Tridge, and now work as a solo freelancer and entrepreneur while serving as CTO of the rapidly growing community-driven mental journaling app "Once a Day" and the Korea-centered musical/classical concert auto-curation app "New Overture".'
    },
    projects: {
      sectionTitle: 'Selected Works',
      sectionHeadline: 'Navigating the intersection of design and code.',
      items: [
        { title: 'Mobile App - Once a Day', category: 'Google Play · com.onequestion.fox' },
        { title: '아름다운 랜딩 페이지', category: 'onceaday.app' },
        { title: 'Data Engineering', category: 'Tridge · Data Platform & Market Intelligence' },
        { title: 'New Overture', category: 'Currently in Development' }
      ]
    },
    capabilities: {
      sectionTitle: 'Capabilities',
      sectionHeadline: 'From product engineering to data pipelines, I build and run systems end-to-end.',
      cards: [
        {
          title: 'Web Development',
          description:
            'Build modern, scalable web products with React, Django/Django REST, TypeScript, Tailwind, and Vite across frontend and backend.'
        },
        {
          title: 'Hosting & DevOps',
          description:
            'Set up and operate production hosting, CI/CD, infrastructure, and observability across Cloudflare, AWS, containers, and Kubernetes.'
        },
        {
          title: 'Mobile App Development',
          description:
            'Develop and ship mobile apps for both Android and iOS, from architecture and API integration to release and post-launch maintenance.'
        },
        {
          title: 'Data Engineering',
          description:
            'Design and build data pipelines, manage and monitor workflows, fix broken jobs, refactor legacy pipelines, and continuously optimize reliability and cost.'
        },
        {
          title: 'Cloud & Platform',
          description:
            'Production infrastructure across Cloudflare and AWS, including deployment, scaling, storage, observability, and Kubernetes operations.'
        },
        {
          title: 'End-to-End Delivery',
          description:
            'Regular updates, staging environments on request, post-launch bug/request handling, and complete delivery through customer-facing release.'
        }
      ]
    },
    faq: {
      eyebrow: 'You ask, I answer',
      titleLine1: 'Most Common',
      titleLine2: 'Questions',
      items: [
        {
          question: 'What is your main tech stack?',
          answer:
            'My main stack includes React, Django, Django REST, TypeScript, Tailwind, and Vite. I also work extensively with Supabase and Postgres, plus Cloudflare services (Workers, Pages, Storage, Postgres and more), AWS (EKS, ECS, EC2, S3 and more), data platforms such as Snowflake and DuckDB, orchestration with Airflow, and Kubernetes-based infrastructure.'
        },
        {
          question: 'Do you work with design files?',
          answer:
            'Absolutely. I can translate Figma designs into pixel-perfect code, and I can also start from nothing but a PRD or requirements doc to create the full design system and UI from scratch, then implement it end-to-end.'
        },
        {
          question: 'How do you handle project delivery?',
          answer:
            'I handle delivery end-to-end with transparent communication. I provide regular updates, host staging environments for review when requested, manage post-project bug fixes and follow-up requests, and drive projects all the way to customer-facing launch.'
        },
        {
          question: 'Can you also handle domain and hosting setup?',
          answer:
            'Yes. I can handle domain purchase and configuration, server/app hosting setup, deployment pipelines, SSL, DNS, and other related infrastructure tasks needed to run your product in production.'
        }
      ]
    },
    contactSection: {
      sectionTitle: 'Contact Me',
      headline: "Let's discuss your next product.",
      description: 'Share your goals, timeline, and constraints. I can help from product strategy to production delivery.',
      primaryCta: 'Send Email'
    },
    personalInfo: {
      title: 'Personal Info',
      items: [
        { label: 'Name', value: 'Patrick' },
        { label: 'Role', value: 'Creative Engineer' },
        { label: 'Location', value: 'Seoul, KR · Remote-friendly' },
        { label: 'Email', value: 'hello@onceaday.app' }
      ]
    },
    footer: {
      instagram: 'Instagram',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      copyright: '© 2026. Seung Hoon Kim / Patrick. All rights reserved.'
    }
  },
  kr: {
    navbar: {
      projects: '프로젝트',
      capabilities: '역량',
      about: '소개',
      faq: 'FAQ',
      contact: '문의하기'
    },
    hero: {
      line1: '디지털',
      line2: '크래프트의',
      craft: '시대',
      prompt: '왜 크리에이티브 엔지니어링이 중요할까요?',
      headline: '가치 있는 소프트웨어는 기능적이기만 해서는 안 됩니다. 오래 기억되는 경험으로 전환할 때입니다.',
      highlightPhrase: '오래 기억되는 경험',
      subtext: '브랜드와 개인을 위해 탈중앙화, 고성능, 그리고 아름다운 웹 애플리케이션을 만듭니다.',
      scrollTop: '아래로',
      scrollBottom: '스크롤'
    },
    manifesto: {
      highlight: '코드',
      statement: '는 도구일 뿐입니다. 진짜 크래프트는 복잡한 문제를 단순하고 우아한 해법으로 풀어 사용자가 사랑하는 경험을 만드는데 있습니다.',
      changeTitle: '이제는 바꿔야 할 때입니다.',
      changeBody: '대부분의 웹 경험은 쉽게 잊힙니다. 저는 대담한 타이포그래피, 유연한 애니메이션, 그리고 탄탄한 성능으로 돋보이는 디지털 제품을 만듭니다.',
      codeExpression: '변화'
    },
    introduction: {
      sectionTitle: '내 소개',
      headline: '날카로운 디자인과 안정적인 운영·배포를 최우선으로 합니다.',
      body:
        '저는 웹, 모바일, 데이터 플랫폼을 중심으로 일하는 크리에이티브 엔지니어입니다. 아키텍처 설계, 구현, 배포, 관측성, 개선 반복까지 빠르고 책임감 있게 수행합니다.',
      detail:
        '한국에서 컴퓨터공학을 전공했고, 멋쟁이사자처럼 8기 Hackathon 우수상과 교내 캡스톤 경진대회 최우수상을 포함해 다수의 수상을 했습니다. Tridge에서 근무한 뒤 현재는 1인 프리랜서/창업가로 활동하고 있으며, 빠르게 성장 중인 커뮤니티 기반 멘탈 저널링 앱 "Once a Day"와 한국 중심 뮤지컬/클래식 공연 자동 큐레이션 앱 "New Overture"의 CTO를 맡고 있습니다.'
    },
    projects: {
      sectionTitle: '주요 작업',
      sectionHeadline: '디자인과 코드의 교차점을 탐색합니다.',
      items: [
        { title: '모바일 앱 - 하루 한 번', category: 'Google Play · com.onequestion.fox' },
        { title: '아름다운 랜딩 페이지', category: 'onceaday.app' },
        { title: '데이터 엔지니어링', category: 'Tridge · 데이터 플랫폼 및 마켓 인텔리전스' },
        { title: 'New Overture', category: '현재 개발 진행 중' }
      ]
    },
    capabilities: {
      sectionTitle: '핵심 역량',
      sectionHeadline: '프로덕트 엔지니어링부터 데이터 파이프라인까지, 설계부터 운영까지 엔드투엔드로 수행합니다.',
      cards: [
        {
          title: '웹 개발',
          description:
            'React, Django/Django REST, TypeScript, Tailwind, Vite 기반으로 프론트엔드와 백엔드를 아우르는 확장 가능한 웹 서비스를 개발합니다.'
        },
        {
          title: '호스팅 & 데브옵스',
          description:
            'Cloudflare, AWS, 컨테이너, Kubernetes 환경에서 프로덕션 호스팅, CI/CD, 인프라 운영, 모니터링 체계를 구축하고 관리합니다.'
        },
        {
          title: '모바일 앱 개발',
          description:
            'Android와 iOS 모두를 대상으로 아키텍처 설계, API 연동, 배포, 출시 후 유지보수까지 모바일 앱을 엔드투엔드로 제공합니다.'
        },
        {
          title: '데이터 엔지니어링',
          description:
            '데이터 파이프라인 설계/구축, 워크플로 운영 및 모니터링, 장애 수정, 레거시 파이프라인 리팩터링, 신뢰성과 비용 최적화를 담당합니다.'
        },
        {
          title: '클라우드 & 플랫폼',
          description:
            'Cloudflare와 AWS 전반에서 배포, 확장, 스토리지, 관측성, Kubernetes 운영까지 프로덕션 인프라를 구축하고 관리합니다.'
        },
        {
          title: '엔드투엔드 딜리버리',
          description:
            '정기 진행 공유, 요청 시 스테이징 제공, 출시 후 버그/추가 요청 대응, 고객에게 전달되는 릴리즈까지 책임집니다.'
        }
      ]
    },
    faq: {
      eyebrow: '물어보세요, 답해드릴게요',
      titleLine1: '가장 많이 받은',
      titleLine2: '질문',
      items: [
        {
          question: '주로 사용하는 기술 스택은 무엇인가요?',
          answer:
            '주요 스택은 React, Django, Django REST, TypeScript, Tailwind, Vite입니다. 또한 Supabase와 Postgres를 폭넓게 다루며, Cloudflare(Workers, Pages, Storage, Postgres 등), AWS(EKS, ECS, EC2, S3 등), Snowflake, DuckDB, Airflow, Kubernetes 기반 인프라까지 실무에서 운영합니다.'
        },
        {
          question: '디자인 파일 기반 작업도 가능한가요?',
          answer:
            '네, 가능합니다. Figma 디자인을 픽셀 단위로 정확하게 구현할 수 있고, PRD나 요구사항 문서만 있는 상태에서도 0부터 디자인 시스템과 UI를 설계한 뒤 실제 제품으로 엔드투엔드 구현할 수 있습니다.'
        },
        {
          question: '프로젝트 전달 방식은 어떻게 되나요?',
          answer:
            '투명한 소통을 바탕으로 엔드투엔드로 프로젝트를 책임집니다. 정기적으로 진행 상황을 공유하고, 요청 시 리뷰용 스테이징 환경을 제공하며, 프로젝트 이후 버그 수정과 추가 요청까지 관리하고, 최종적으로 고객에게 전달되는 출시 단계까지 완료합니다.'
        },
        {
          question: '도메인 구매나 호스팅 설정도 가능한가요?',
          answer:
            '네, 가능합니다. 도메인 구매 및 설정, 서버/앱 호스팅 구성, 배포 파이프라인, SSL, DNS 등 프로덕션 운영에 필요한 인프라 작업 전반을 처리할 수 있습니다.'
        }
      ]
    },
    contactSection: {
      sectionTitle: '문의하기',
      headline: '다음 제품을 함께 이야기해볼까요?',
      description: '목표, 일정, 제약 조건을 공유해 주세요. 제품 전략부터 프로덕션 출시까지 함께할 수 있습니다.',
      primaryCta: '이메일 보내기'
    },
    personalInfo: {
      title: '개인 정보',
      items: [
        { label: '이름', value: 'Patrick' },
        { label: '역할', value: '크리에이티브 엔지니어' },
        { label: '지역', value: '서울 · 원격 협업 가능' },
        { label: '이메일', value: 'hello@onceaday.app' }
      ]
    },
    footer: {
      instagram: '인스타그램',
      github: '깃허브',
      linkedin: '링크드인',
      email: '이메일',
      copyright: '© 2026. 김승훈 / Patrick. 모든 권리 보유.'
    }
  }
};
