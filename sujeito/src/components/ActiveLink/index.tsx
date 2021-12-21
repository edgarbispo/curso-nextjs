import { ReactElement, cloneElement} from "react";
import {useRouter} from "next/router";
import Link, {LinkProps} from 'next/link'

interface ActiveLinkProps extends LinkProps{
    children: ReactElement,
    activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps){

    const {asPath} = useRouter()    //Se ele estiver na pagina blog /posts

    //Se a rota/pagina que estamos acessando for igual ao link que ele clicou entao ativamos o className
    const className = asPath === rest.href ? activeClassName : '';

    return(
        <Link {...rest}>
            {cloneElement(children, {
                className
            })}
        </Link>
    )
}