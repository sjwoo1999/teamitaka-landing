import { motion } from "framer-motion";
import "./App.css"; // 스타일 적용을 위해 추가

export default function App() {
  return (
    <div className="h-auto min-h-screen flex flex-col items-center bg-gray-50 px-4 sm:px-6 md:px-12 pt-20 sm:pt-32">
      {/* 제목과 설명 */}
      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🚀 Teamitaka - 대학생 팀플을 위한 최고의 협업 플랫폼
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          대학 생활 중 팀 프로젝트를 효과적으로 관리하고, 최고의 팀워크를 경험하세요!
        </motion.p>
      </div>

      {/* 기능 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg sm:max-w-3xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="text-3xl sm:text-4xl">{feature.icon}</span>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 버튼 */}
      <div className="flex justify-center w-full mt-12 mb-10">
        <motion.button
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all w-full sm:w-auto"
          whileHover={{ scale: 1.1 }}
        >
          지금 시작하기 🚀
        </motion.button>
      </div>
    </div>
  );
}

const features = [
  {
    icon: "🔸",
    title: "나의 팀플 타입 테스트",
    description: "나의 협업 스타일과 강한 능력을 테스트로 알아보기!",
  },
  {
    icon: "🔹",
    title: "업무 분담과 진행 상황 공유",
    description: "프로젝트를 체계적으로 관리하여 효율성을 높이세요.",
  },
  {
    icon: "🔺",
    title: "상호 평가 폼",
    description: "프로젝트 완료 후 협업 능력을 점검하고 피드백 받기!",
  },
  {
    icon: "⚡",
    title: "인재 매칭 서비스",
    description: "새로운 프로젝트에서 필요한 팀원을 쉽게 찾을 수 있어요!",
  },
];
