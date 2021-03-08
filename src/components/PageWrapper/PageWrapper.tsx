import './PageWrapper.css';

export const PageWrapper: React.FC<React.ReactNode> = ({ children }) => (
  <div className="page-wrapper">{children}</div>
);
