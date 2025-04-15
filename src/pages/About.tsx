import PageWrapper from '../components/PageWrapper';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 text-center bg-gradient-to-b from-white via-brand-bg to-white">
      <PageWrapper>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-gray-900 mb-6">
            👥 우리 팀을 소개합니다
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <span className="text-brand font-semibold">TEAMITAKA</span>는 다양한 배경을 가진 열정적인 구성원들이 모여,
            <br className="hidden sm:block" />
            기술을 통해 삶을 더 낫게 만드는 데 집중하는 팀입니다.
          </p>
          <ul className="list-none space-y-3 text-gray-800 text-left sm:text-center">
            <li>🌱 <span className="text-brand">사용자 중심 사고</span>를 기반으로 제품을 설계합니다</li>
            <li>🔍 문제의 본질을 깊이 있게 파고드는 분석력을 지녔습니다</li>
            <li>💡 ‘정말 필요한 것’을 구현하는 데 집중합니다</li>
          </ul>
        </div>
      </PageWrapper>
    </section>
  );
};

export default About;