const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://shumai2112.github.io/',
  title: 'DY.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'DY',
  role: 'Front-End Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://shumai2112.github.io/',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'LG Home Robot',
    description:
      'LG 홈로봇 프로토타입 개발',
    stack: ['Android', 'Firmware', 'Driver', 'UI/UX'],
    livePreview: 'https://youtu.be/bU5RadM6fNI',
  },
  {
    name: 'APEX Platform',
    description:
      '인도어 바이크 컨텐츠 플랫폼',
      stack: ['Serverless', 'Live streaming', 'Graph QL', 'NoSQL', 'Android'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Prototype',
  'Android',
  'Kotlin',
  'Java',
  'Python',
  'AWS Developer'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shumai@naver.com',
}

export { header, about, projects, skills, contact }
