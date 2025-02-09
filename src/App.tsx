import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 Teamitaka - 대학생 팀플을 위한 최고의 협업 플랫폼
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        대학 생활 중 팀 프로젝트를 효과적으로 관리하고, 최고의 팀워크를 경험하세요!
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="text-3xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-700 transition-all"
        whileHover={{ scale: 1.1 }}
      >
        지금 시작하기 🚀
      </motion.button>
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
