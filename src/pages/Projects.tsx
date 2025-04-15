// ✅ src/pages/Projects.tsx
import PageWrapper from '../components/PageWrapper';

const Projects = () => {
  return (
    <section className="py-24">
      <PageWrapper>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">🚀 주요 프로젝트</h2>

        <div className="space-y-8">
          <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-brand mb-2">Navelle – 이민 정보 내비게이터</h3>
            <p className="text-gray-700">
              전 세계 이민 절차를 단일 플랫폼에서 비교 및 추천해주는 AI 기반 가이드 서비스.
            </p>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-brand mb-2">SP,OOON – 투자 리포트 요약 툴</h3>
            <p className="text-gray-700">
              투자 초보자도 쉽게 접근 가능한 개인화된 요약 리포트 생성기. 요약/추천/자동 리마인드 기능 제공.
            </p>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-brand mb-2">TEAM SYNERGY – 팀 온도계 시스템</h3>
            <p className="text-gray-700">
              팀 프로젝트 감정 피드백 기반 협업 리포트 자동 생성. 온보딩 → 피드백 → 상호 평가 루프까지 통합.
            </p>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
};

export default Projects;