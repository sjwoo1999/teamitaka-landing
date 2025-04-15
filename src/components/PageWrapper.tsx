// ✅ src/components/PageWrapper.tsx
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-full max-w-screen-lg mx-auto px-6 sm:px-8 lg:px-10">
        {children}
      </div>
    );
  };
  
  export default PageWrapper;