export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  thumbnailUrl: string;
  fullImageUrl: string;
  category: 'AI/ML' | 'Software Engineering' | 'Programming' | 'Cloud' | 'Other';
  description?: string;
};

export const certificates: Certificate[] = [
  {
    id: 'infosys-ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    issuer: 'Infosys Springboard',
    date: '2024',
    thumbnailUrl: '/Certificates/AKSHAT CHAUHAN S24CSEU1814 AI ML Infosys Certificate.pdf',
    fullImageUrl: '/Certificates/AKSHAT CHAUHAN S24CSEU1814 AI ML Infosys Certificate.pdf',
    category: 'AI/ML',
    description: 'Comprehensive certification in AI/ML fundamentals, algorithms, and practical applications.'
  },
  {
    id: 'infosys-dsa-cpp',
    title: 'Data Structures & Algorithms in C++',
    issuer: 'Infosys Springboard',
    date: '2024',
    thumbnailUrl: '/Certificates/AKSHAT CHAUHAN S24CSEU1814 DSA CPP certificate.pdf',
    fullImageUrl: '/Certificates/AKSHAT CHAUHAN S24CSEU1814 DSA CPP certificate.pdf',
    category: 'Programming',
    description: 'Advanced certification in data structures, algorithms, and competitive programming in C++.'
  },
  {
    id: 'codedx-python',
    title: 'JavaScript',
    issuer: 'CodeDex',
    date: '2024',
    thumbnailUrl: '/Certificates/CodeDex Certificate.pdf',
    fullImageUrl: '/Certificates/CodeDex Certificate.pdf',
    category: 'Programming',
    description: 'Certification in JavaScript programming, covering fundamentals to advanced concepts'
  },
  {
    id: 'nvidia-fundamentals',
    title: 'Deep Learning Fundamentals',
    issuer: 'NVIDIA Deep Learning Institute',
    date: '2024',
    thumbnailUrl: '/Certificates/My Learning _ NVIDIA.pdf',
    fullImageUrl: '/Certificates/My Learning _ NVIDIA.pdf',
    category: 'AI/ML',
    description: 'NVIDIA DLI certification in deep learning fundamentals and neural network architectures.'
  },
  {
    id: 'nvidia-nlp',
    title: 'Natural Language Processing',
    issuer: 'NVIDIA Deep Learning Institute',
    date: '2024',
    thumbnailUrl: '/Certificates/My Learning _ NVIDIA_NLP.pdf',
    fullImageUrl: '/Certificates/My Learning _ NVIDIA_NLP.pdf',
    category: 'AI/ML',
    description: 'Advanced certification in NLP techniques, transformers, and language model applications.'
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering Principles',
    issuer: 'Professional Development Institute',
    date: '2024',
    thumbnailUrl: '/Certificates/Software Engineering.pdf',
    fullImageUrl: '/Certificates/Software Engineering.pdf',
    category: 'Software Engineering',
    description: 'Comprehensive certification in software engineering practices, design patterns, and methodologies.'
  },
  {
    id: 'cloud-certification-1',
    title: 'Cloud Computing Fundamentals',
    issuer: 'Tech Academy',
    date: '2024',
    thumbnailUrl: '/Certificates/eCertificate.pdf',
    fullImageUrl: '/Certificates/eCertificate.pdf',
    category: 'Cloud',
    description: 'Foundation certification in cloud computing concepts, services, and deployment models.'
  },
  {
    id: 'advanced-certification',
    title: 'Advanced Technology Certificate',
    issuer: 'Innovation Institute',
    date: '2024',
    thumbnailUrl: '/Certificates/eCertificate (1).pdf',
    fullImageUrl: '/Certificates/eCertificate (1).pdf',
    category: 'Other',
    description: 'Advanced certification in emerging technologies and innovative development practices.'
  }
];

export const getCertificatesByCategory = (category: Certificate['category']): Certificate[] => {
  return certificates.filter(cert => cert.category === category);
};

export const getAllCategories = (): Certificate['category'][] => {
  return Array.from(new Set(certificates.map(cert => cert.category)));
};