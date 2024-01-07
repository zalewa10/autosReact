interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="py-6 lg:py-8">{children}</div>;
};

export default Container;
