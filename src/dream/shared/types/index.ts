export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};