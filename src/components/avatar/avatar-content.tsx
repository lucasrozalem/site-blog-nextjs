type AvatarContainerProps = {
  children: React.ReactNode;
};

export const AvatarContent = ({ children }: AvatarContainerProps) => {
  return <div className="flex flex-col">{children}</div>;
};
