import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import StepForm from '@/components/StepForm/StepForm';
import { GetServerSideProps, NextPage } from 'next';
import { v4 } from 'uuid';
import {
  FormContextProvider,
  IFormData,
  initialFormData,
} from '@/components/StepForm/context';

const Home: NextPage<{ formDefaultValues: IFormData }> = ({
  formDefaultValues,
}) => {
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
          {formDefaultValues.id}
          <FormContextProvider defaultValues={formDefaultValues}>
            <StepForm />
          </FormContextProvider>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const formToken = req.cookies.formToken;

  if (!formToken) {
    return {
      props: {
        formDefaultValues: {
          id: v4(),
        },
      },
    };
  }

  const resp = await fetch('http://localhost:3000/api/form/get', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ formToken }),
  });

  const formData = await resp.json();

  return {
    props: {
      formDefaultValues: {
        id: formToken,
        ...formData,
      },
    },
  };
};

export default Home;
