interface IAboutImages {
  path: string;
  alt: string;
}

export interface IAbout {
  title: string;
  subtitle: string;
  content: string;
  images: Array<IAboutImages>;
}
