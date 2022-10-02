import Head from 'next/head'
import RouterLink from 'next/link'
import { Container } from '../components/Container'
import Layout from '../components/Layout'
import { Link } from '../components/Link'
import Spacer from '../components/Spacer'
import { H1, Text } from '../components/Text'

export default function NotFoundPage() {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <Container>
        <H1>404 - Not found</H1>
        <Text>
          You just found a page that doesn&#39;t exist...{' '}
          <span role="img" aria-label="sad">
            😢
          </span>
        </Text>
        <Spacer h={5} />
        <RouterLink href="/" passHref>
          <Link>
            ⟵ <span>Back to start</span>
          </Link>
        </RouterLink>
      </Container>
    </Layout>
  )
}
