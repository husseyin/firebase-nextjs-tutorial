import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { app } from "../firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        sessionStorage.setItem("Token", response.user.accessToken);
        router.push("/home");
      })
      .catch((err) => {
        alert("Login Failed!");
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      console.log(response.user);
      sessionStorage.setItem("Token", response.user.accessToken);
      router.push("/home");
    });
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider).then((response) => {
      console.log(response.user);
      sessionStorage.setItem("Token", response.user.accessToken);
      router.push("/home");
    });
  };

  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (token) {
      router.push("/home");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs Firebase Webapp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Login Page</h1>

        <input
          type="email"
          placeholder="Email"
          className={styles.inputBox}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.inputBox}
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />

        <button className={styles.button} onClick={signUpWithEmail}>
          Sign In
        </button>
        <button className={styles.button} onClick={signInWithGoogle}>
          Sign In with Google
        </button>
        <button className={styles.button} onClick={signInWithGithub}>
          Sign In with Github
        </button>

        <br />
        <button
          className={styles.button}
          onClick={() => router.push("/register")}
        >
          Register
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
