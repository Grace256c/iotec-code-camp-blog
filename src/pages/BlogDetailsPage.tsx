import { ArrowLeft, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MOCK_BLOGS } from '@/data/mockBlogs'
import { useLocation, useNavigate } from '../navigation/router-context'
import { PATHS } from '../navigation/paths'

export function BlogDetailsPage() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const blogId = new URLSearchParams(search).get('id')
  const blog = MOCK_BLOGS.find((entry) => entry.id === blogId)
  const articleBody = blog?.body?.sections.length ? blog.body : undefined

  return (
    <div className="flex flex-1 flex-col py-8 sm:py-12">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => navigate(PATHS.LANDING)}
        className="self-start px-3.5 py-1.5 text-xs font-medium shadow-2xs"
      >
        <ArrowLeft aria-hidden="true" className="size-3.5 text-muted-foreground" />
        <span>Back to blogs</span>
      </Button>

      {!blogId?.trim() || !blog ? (
        <div className="my-auto max-w-xl py-16">
          <h1 className="font-serif text-3xl font-normal tracking-tight text-foreground">
            {blogId?.trim() ? 'Blog not found' : 'Blog Details'}
          </h1>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {!blogId?.trim()
              ? 'No blog selected. Choose a blog from the landing page.'
              : 'Blog not found. Please choose another blog from the landing page.'}
          </p>
        </div>
      ) : (
        <article aria-labelledby="blog-title" className="mx-auto mt-10 w-full min-w-0 max-w-4xl sm:mt-14">
          <header className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {blog.category}
              </p>
              <span aria-hidden="true" className="h-px w-10 bg-border" />
            </div>
            <h1 id="blog-title" className="mt-4 font-serif text-3xl leading-tight font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {blog.title}
            </h1>
            {articleBody?.isDemo && (
              <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-7 text-muted-foreground">
                <span className="font-semibold text-primary">Demo article.</span>{' '}
                This original sample is for demonstration, not a previously published article
                by Grace Nakiyemba. The date and reading time below are sample metadata.
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs leading-5 text-muted-foreground sm:text-sm">
              <span>{blog.date}</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock aria-hidden="true" className="size-3.5 shrink-0" />
                {blog.readTime}
              </span>
            </div>
          </header>

          {blog.imageUrl && (
            <div className="mt-8 aspect-16/10 overflow-hidden rounded-xl border border-border bg-muted sm:mt-10">
              <img
                src={blog.imageUrl}
                alt={blog.imageAlt}
                width={900}
                height={563}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <section aria-labelledby="preview-heading" className="mx-auto mt-10 max-w-3xl sm:mt-12">
            <h2 id="preview-heading" className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {articleBody ? 'Overview' : 'Article preview'}
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/85 sm:text-lg sm:leading-9">
              {blog.excerpt}
            </p>
            {articleBody ? (
              <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
                {articleBody.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-serif text-2xl leading-snug font-normal tracking-tight text-foreground sm:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-5 text-base leading-8 text-foreground/85 sm:text-lg sm:leading-9">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <p className="mt-8 border-t border-border pt-5 text-sm leading-7 text-muted-foreground">
                Only an excerpt is available for this post. The full article is not available yet.
              </p>
            )}
          </section>
        </article>
      )}
    </div>
  )
}
