import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { NextPage } from 'next';

const Hello: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <div>
            Hello Middleware
            <br />
            <button
              onClick={async () => {
                await fetch('/pokemon/ditto', {
                  method: 'get',
                });
              }}
            >
              Get Pokemon
            </button>
            <button
              style={{ marginLeft: 10 }}
              onClick={async () => {
                await fetch('/foo?id=foo', {
                  method: 'get',
                });
              }}
            >
              Get Foo
            </button>
            <button
              style={{ marginLeft: 10 }}
              onClick={async () => {
                await fetch('/foo/create', {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name: 'Foo Bar',
                  }),
                });
              }}
            >
              Create Foo
            </button>
          </div>

          <br />

          <div>
            Hello Serverless
            <br />
            <button
              onClick={async () => {
                await fetch('/api/hello?id=999', {
                  method: 'get',
                });
              }}
            >
              Get Jane999
            </button>
            <button
              style={{ marginLeft: 10 }}
              onClick={async () => {
                await fetch('/api/hello/create', {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name: 'John Doe',
                  }),
                });
              }}
            >
              Create John doe
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hello;
