import Image from 'next/image';

function WhatToAsk() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border backdrop-blur-sm mb-6">
            <svg
              version="1.1"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-primary"
              fill="currentColor"
            >
              <g>
                <path d="M352,0H64C28.704,0,0,28.704,0,64v192c0,35.296,28.704,64,64,64v80c0,6.24,3.648,11.936,9.312,14.528C75.456,415.52,77.728,416,80,416c3.744,0,7.456-1.312,10.4-3.84L197.92,320H352c35.296,0,64-28.704,64-64V64C416,28.704,387.296,0,352,0z" />
              </g>
              <g>
                <path d="M448,96v160c0,52.928-43.072,96-96,96H209.76l-70.368,60.288C145.92,414.528,152.768,416,160,416h154.08l107.488,92.16c2.976,2.528,6.688,3.84,10.432,3.84c2.272,0,4.576-0.48,6.688-1.472C444.384,507.936,448,502.24,448,496v-80c35.296,0,64-28.704,64-64V160C512,124.704,483.296,96,448,96z" />
              </g>
            </svg>

            <span className="text-sm font-medium text-secondary-foreground">
              AI-Powered Conversations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-serif font-light italic">
              anything dental
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From simple questions to complex concerns, our AI delivers
            expert-level guidance trained on thousands of real dental cases
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Interactive Chat Examples */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">
                Common questions our AI answers:
              </h3>

              {/* Chat Bubble 1 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 64 64"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-secondary"
                      >
                        <path
                          clipRule="evenodd"
                          d="m2 16c0-7.73199 6.26801-14 14-14h32c7.732 0 14 6.26801 14 14v44c0 .7523-.4221 1.4409-1.0924 1.7822-.6704.3414-1.4756.2777-2.0839-.1647l-10.4741-7.6175h-32.3496c-7.73199 0-14-6.268-14-14zm15 2c-1.1046 0-2 .8954-2 2s.8954 2 2 2h30c1.1046 0 2-.8954 2-2s-.8954-2-2-2zm0 12c-1.1046 0-2 .8954-2 2s.8954 2 2 2h12c1.1046 0 2-.8954 2-2s-.8954-2-2-2z"
                          fill="currentColor"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="font-semibold">
                          "My tooth hurts when I bite down"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Get immediate advice on pain management, possible
                          causes, and when to see a dentist urgently
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Instant Response
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Pain Relief
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble 2 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 64 64"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-secondary"
                      >
                        <path
                          clipRule="evenodd"
                          d="m2 16c0-7.73199 6.26801-14 14-14h32c7.732 0 14 6.26801 14 14v44c0 .7523-.4221 1.4409-1.0924 1.7822-.6704.3414-1.4756.2777-2.0839-.1647l-10.4741-7.6175h-32.3496c-7.73199 0-14-6.268-14-14zm15 2c-1.1046 0-2 .8954-2 2s.8954 2 2 2h30c1.1046 0 2-.8954 2-2s-.8954-2-2-2zm0 12c-1.1046 0-2 .8954-2 2s.8954 2 2 2h12c1.1046 0 2-.8954 2-2s-.8954-2-2-2z"
                          fill="currentColor"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="font-semibold">
                          "How much does teeth whitening cost?"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Compare treatment options, pricing ranges, and find
                          the best whitening solution for your budget
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Cost Analysis
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Treatment Options
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble 3 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 64 64"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-secondary"
                      >
                        <path
                          clipRule="evenodd"
                          d="m2 16c0-7.73199 6.26801-14 14-14h32c7.732 0 14 6.26801 14 14v44c0 .7523-.4221 1.4409-1.0924 1.7822-.6704.3414-1.4756.2777-2.0839-.1647l-10.4741-7.6175h-32.3496c-7.73199 0-14-6.268-14-14zm15 2c-1.1046 0-2 .8954-2 2s.8954 2 2 2h30c1.1046 0 2-.8954 2-2s-.8954-2-2-2zm0 12c-1.1046 0-2 .8954-2 2s.8954 2 2 2h12c1.1046 0 2-.8954 2-2s-.8954-2-2-2z"
                          fill="currentColor"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="font-semibold">
                          "When should I replace my filling?"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Learn about filling lifespan, warning signs of wear,
                          and replacement timing guidance
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Preventive Care
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Maintenance
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - AI Illustration */}
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl pt-16 px-8 border border-border/50 hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center justify-center h-full">
              <Image
                src="/confused.png"
                alt="AI Assistant"
                width={500}
                height={500}
                className="w-full h-auto max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhatToAsk;
