// ✅ src/pages/Home.tsx
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 text-center bg-gradient-to-b from-white via-brand-bg to-white">
      <PageWrapper>
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-gray-900 mb-4">
          👋 환영합니다! <span className="text-brand">TEAMITAKA</span>입니다.
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          우리는 <span className="text-brand font-semibold">문제 해결</span>을 사랑하는 창의적인 혁신 팀입니다.<br />
          세상에 긍정적인 영향을 주는 솔루션을 만듭니다.
        </p>
        <a
          href="/about"
          className="inline-block bg-brand hover:bg-brand-dark text-white hover:text-white font-medium py-3 px-6 rounded-lg shadow-md transition no-underline"
        >
          TEAMITAKA를 소개합니다 →
        </a>
      </PageWrapper>
    </section>
  );
};

export default Home;