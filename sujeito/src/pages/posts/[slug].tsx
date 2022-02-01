import styles from './post.module.scss';
import {GetServerSideProps} from "next";

import {getPrismicClient} from '../../services/prismic'
import {RichText} from "prismic-reactjs";
import {redirect} from "next/dist/server/api-utils";

import Head from 'next/head'
import Image from 'next/image'

interface PostProps{
    post: {
        slug: string;
        title: string;
        description: string;
        cover: string;
        updateAt: string;
    }
}

export default function Post({post}: PostProps) {

    return(
        <>
            <Head>
                <title>{post.title}</title>
            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <Image
                        quality={100}
                        src={post.cover}
                        width={720}
                        height={410}
                        alt={post.title}
                        placeholder={"blur"}
                        blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAffcSJAAAADUlEQVR42mNkuPn/IgAFZAKrxUlgaAAAABJRU5ErkJggg=="}
                    />
                    <h1>{post.title}</h1>
                    <time>{post.updateAt}</time>
                    <div className={styles.postContent} dangerouslySetInnerHTML={{__html: post.description}}/> //Injetar o HTML que está sendo recebido
                </article>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {

    const {slug} = params;
    const prismic = getPrismicClient(req);  //Apenas pelo lado do servidor

    const response = await prismic.getByUID('post', String(slug), {})   //Documentação do Prismic

    if(!response) {
        return {
            redirect: {
                destination: '/posts',
                permanent: false
            }
        }
    }

    const post ={
        slug: slug,
        title: RichText.asText(response.data.title),
        description: RichText.asText(response.data.description),    //Correto é RichText.asHtml
        cover: response.data.cover.url,
        updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return {
        props: {
            post
        }
    }
}