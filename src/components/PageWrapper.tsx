// ✅ src/components/PageWrapper.tsx
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    );
  };
  
  export default PageWrapper;