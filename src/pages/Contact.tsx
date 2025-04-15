// ✅ src/pages/Contact.tsx
import PageWrapper from '../components/PageWrapper';

const Contact = () => {
  return (
    <section className="py-24">
      <PageWrapper>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">📬 문의하기</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          궁금한 점이 있으신가요? 아래 메일 또는 양식을 통해 언제든지 연락해주세요.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-800">이름</label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-brand focus:border-brand"
              placeholder="홍길동"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-800">이메일</label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-brand focus:border-brand"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-gray-800">메시지</label>
            <textarea
              id="message"
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-brand focus:border-brand"
              placeholder="내용을 입력해주세요..."
            />
          </div>

          <button
            type="submit"
            className="bg-brand hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition"
          >
            보내기
          </button>
        </form>

        <div className="mt-10 text-gray-600 text-sm">
          또는 이메일: <a href="mailto:teamitaka.official@gmail.com" className="text-brand underline">teamitaka.official@gmail.com</a>
        </div>
      </PageWrapper>
    </section>
  );
};

export default Contact;