import Link from 'next/link'
import Image from 'next/image'

export default function Post({post, featuredMedia})
{
    return (
        <div className='card mb-3'>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <Link href={`/posts/${post.slug}`}>
                        <a>
                            <Image src={featuredMedia['media_details'].sizes.medium['source_url']} />
                        </a>
                    </Link>
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{post.title.rendered}</h5>
                        <div className='card-text' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}>
                        </div>
                        <Link href={`/posts/${post.slug}`}>See more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}