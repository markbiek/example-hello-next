import Link from 'next/link';
import Layout from '../components/Layout';

const posts = [
    {
        title: 'Article 1'
    },
    {
        title: 'Article 2'
    },
    {
        title: 'Article 3'
    },
];

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default () => (
    <Layout>
        <h1>Hello</h1>

        <h2>Articles</h2>
        <ul>
        {
            posts.map(post => {
                return (
                    <PostLink title={post.title} />
                )
            })
        }
        </ul>
    </Layout>
);
