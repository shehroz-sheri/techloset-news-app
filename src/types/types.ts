export type NewsArticle = {
  imageUrl?: string;
  title: string;
  url: string;
  fullDescription: string;
  publishedAt: string;
  author: string;
};

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  article: NewsArticle;
};

// used in redux

export type Article = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  fullDescription: string;
  author: string;
  publishedAt: string;
  likes: number;
  shares: number;
};

export type NYTMultimedia = {
  url: string;
};

export type NYTByline = {
  original: string;
};

export type NYTArticle = {
  headline: {
    main: string;
  };
  snippet: string;
  lead_paragraph: string;
  web_url: string;
  multimedia: NYTMultimedia[];
  byline: NYTByline;
  pub_date: string;
};

export type NewsState = {
  articles: Article[];
  loading: boolean;
  error: string | null;
  page: number;
};
