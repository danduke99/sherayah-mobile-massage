export type ServiceOption = {
  label: string;
  duration: number;
  price: number;
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  imageKey: string;
  description: string;
  options: ServiceOption[];
};
