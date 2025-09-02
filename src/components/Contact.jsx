export default function Contact() {
  return (
    <section className="py-20 px-6 bg-maroon text-white" id="contact">
      <h2 className="text-4xl font-bold mb-10 text-center">Contact</h2>
      <div className="max-w-xl mx-auto text-center">
        <p className="mb-4">Email me at: <a href="mailto:stuti@example.com" className="underline">stuti@example.com</a></p>
        <p className="mb-4">Or reach out on LinkedIn / GitHub.</p>
        <button className="mt-4 px-6 py-2 bg-white text-maroon font-bold rounded-lg hover:bg-gray-200">Send Message</button>
      </div>
    </section>
  );
}
