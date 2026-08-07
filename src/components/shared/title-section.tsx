interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TitleSection = ({ children, className }: Props) => {
  return (
    <h2 className={`font-semibold text-2xl dark:text-white ${className}`}>
      {children}
    </h2>
  );
};
