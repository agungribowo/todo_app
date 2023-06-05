/* eslint-disable react/jsx-no-undef */
import {Box} from '@chakra-ui/react';
import Head from 'next/head';

const Home = () => {
    return (
        <Div>
            <Head>
                <title>TodoApp</title>
                <meta name="description" content="Awesome todoapp from React"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Box>Hello Box todo App</Box>
            </main>
        </Div>
    );
};

export default Home;