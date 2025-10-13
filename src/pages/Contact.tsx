export default function Contact() {
  const formEndPoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <form
        action={formEndPoint}  // Replace with your actual Formspree endpoint
        method="POST"
        className="bg-[#FDF6FF] text-[#2D1E2F] p-6 rounded-xl shadow-md w-full max-w-xl space-y-4 ">
        <h2 className="text-2xl font-bold mb-2">Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 border border-gray-300 rounded-md h-32"
        />

        <button
          type="submit"
          className="bg-[#2D1E2F] text-[#FDF6FF] px-4 py-2 rounded-md hover:bg-[#C08497] transition">
          Send Inquiry
        </button>
      </form>
    </div>
  )
}
