interface PostDataProps {
  id: string;
  content: string;
}

export interface ContainerProps {
  boardTit?: string;
  posts?: PostDataProps[];
}
