import { NextSeo } from 'next-seo'

export default function Page({ title, description, path, children }) {
    const url = `http://planounimedrio.com.br${path}`
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canoncial={url}
                openGraph={{
                    url,
                    title
                }}
            />

            {children}
        </>
    )
}