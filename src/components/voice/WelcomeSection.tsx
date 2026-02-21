function WelcomeSection() {
  return (
    <div className="z-10 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20 mb-12 overflow-hidden">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border backdrop-blur-sm">
          <svg
            id="Layer_1_badge"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-primary fill-current"
          >
            <path
              d="m186.208 69.792v225.131a69.792 69.792 0 0 0 139.584 0v-225.131a69.792 69.792 0 1 0 -139.584 0zm192.853 225a17.067 17.067 0 1 1 34.133 0c0 80.906-61.45 147.722-140.125 156.256v43.882a17.068 17.068 0 0 1 -34.136 0v-43.882c-78.673-8.531-140.127-75.348-140.127-156.248a17.067 17.067 0 1 1 34.133 0 123.061 123.061 0 1 0 246.122 0z"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium text-secondary-foreground">
            Voice Assistant Ready
          </span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">AI Voice Assistant</h1>
          <p className="text-muted-foreground">
            Talk to your AI dental assistant using natural voice commands. Get
            instant advice and professional guidance.
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
          <svg
            id="Layer_1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-primary fill-current"
          >
            <path
              d="m186.208 69.792v225.131a69.792 69.792 0 0 0 139.584 0v-225.131a69.792 69.792 0 1 0 -139.584 0zm192.853 225a17.067 17.067 0 1 1 34.133 0c0 80.906-61.45 147.722-140.125 156.256v43.882a17.068 17.068 0 0 1 -34.136 0v-43.882c-78.673-8.531-140.127-75.348-140.127-156.248a17.067 17.067 0 1 1 34.133 0 123.061 123.061 0 1 0 246.122 0z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default WelcomeSection;
