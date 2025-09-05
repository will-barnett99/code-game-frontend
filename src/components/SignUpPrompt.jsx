import { SignUpButton, SignInButton } from "@clerk/clerk-react";

function SignUpPrompt() {
  return (
    <main className="w-[1024px] h-[560px] flex flex-col justify-items items-center mx-auto mt-24 p-8 border-8 border-orange-500 bg-yellow-400 text-orange-700 [box-shadow:8px_8px_0_#000000]">
      <section className="w-full max-w-2xl h-[480px] p-6 grid  gap-4 justify-items-center text-center">
        <h3 className="text-4xl font-bold">You've cracked the code!</h3>
        <p className="text-xl font-bold mb-2">
          Well done on completing your first Kata! Click the button below to
          sign up and get access to all our katas. If you already have an
          account, sign in!
        </p>
        <div className="flex flex-row gap-4">
          <SignUpButton forceRedirectUrl="/2">
            <button className="w-40 bg-orange-500 text-white text-xl hover:bg-orange-600 hover:[box-shadow:4px_4px_0_#000000] cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:-translate-x-0.5">
              Sign up!
            </button>
          </SignUpButton>
          <SignInButton forceRedirectUrl="/2">
            <button className="w-40 bg-orange-500 text-white text-xl hover:bg-orange-600 hover:[box-shadow:4px_4px_0_#000000] cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:-translate-x-0.5">
              Sign in!
            </button>
          </SignInButton>
        </div>
      </section>
    </main>
  );
}

export default SignUpPrompt;
