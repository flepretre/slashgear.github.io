import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { TableOfContents } from "../components/tableOfContents"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        lang={post.frontmatter.lang}
        image={post.frontmatter.hero ? post.frontmatter.hero.childImageSharp.image : null}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>

          {post.frontmatter.hero && (
            <picture>
              <source
                srcSet={post.frontmatter.hero.childImageSharp.fluid.srcSetWebp}
                sizes="30vw"
                type="image/webp"
              />
              <source
                srcSet={post.frontmatter.hero.childImageSharp.fluid.srcSet}
                sizes="30vw"
                type="image/png"
              />
              <img
                className="article-item__picture"
                src={post.frontmatter.hero.childImageSharp.fluid.src}
                alt={post.frontmatter.title}
                width="100%"
              />
            </picture>
          )}
        </header>
        {post.headings.length > 1  &&<TableOfContents tableOfContents={post.tableOfContents} />}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      headings {
        value
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        hero {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
                image: fixed(fit: COVER, width: 1080, jpegProgressive: true, jpegQuality: 60, height: 1080) {
                    src
                    height
                    width
                }
            }
        }
      }
    }
  }
`