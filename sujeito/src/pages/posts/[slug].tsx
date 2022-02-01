import styles from './post.module.scss';
import {GetServerSideProps} from "next";

import {getPrismicClient} from '../../services/prismic'
import {RichText} from "prismic-reactjs";
import {redirect} from "next/dist/server/api-utils";

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

    console.log(post)

    return(
        <div>
            <h1>Detalhe do Post</h1>
        </div>
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