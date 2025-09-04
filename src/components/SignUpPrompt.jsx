import { SignUpButton, SignInButton } from '@clerk/clerk-react'

function SignUpPrompt () {

    return (
        <main>
            <h3>Sign up!</h3>
            <p>Did you enjoy our free trial? Click the button below to sign up and get access to all our katas. If you already have an account, sign in!</p>
            <SignUpButton>
                <button>Sign up!</button>
            </SignUpButton>
            <SignInButton>
                <button>Sign in!</button>
            </SignInButton>
        </main>
    )
}

export default SignUpPrompt;