export default function FloatButton() {
  return (
    <div className="fixed z-50 bottom-0 right-0 mb-4 mr-4">
      <div>
        <a
          title="Follow me on twitter"
          href="https://www.twitter.com/asad_codes"
          className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            alt="Twwiter"
            className="object-cover object-center w-full h-full rounded-full"
            src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
          />
        </a>
      </div>
    </div>
  );
}
