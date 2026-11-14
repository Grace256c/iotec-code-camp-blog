export type BlogCategory = 'Architecture' | 'Technology'

export interface ArticleBody {
  isDemo: boolean
  sections: readonly {
    heading: string
    paragraphs: readonly string[]
  }[]
}

export interface BlogPostPreview {
  id: string
  title: string
  excerpt: string
  category: BlogCategory
  date: string
  readTime: string
  isPaid: boolean
  priceLabel: string
  imageUrl: string
  imageAlt: string
  body?: ArticleBody
}

export const MOCK_BLOGS: readonly BlogPostPreview[] = [
  {
    id: 'quiet-computing-cognitive-silence',
    title: 'Quiet Computing & The Architecture of Cognitive Silence',
    excerpt:
      'An inquiry into computational environments that honor human attention spans, examining spatial interfaces and deliberate software restraint.',
    category: 'Architecture',
    date: 'Oct 24, 2026',
    readTime: '8 min read',
    isPaid: true,
    priceLabel: 'Paid · UGX 10,000',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Minimalist concrete and timber pavilion beside calm water in morning mist',
  },
  {
    id: 'tactile-typography-modern-os',
    title: 'Tactile Typography in Modern Operating Systems',
    excerpt:
      'Exploring physical typesetting traditions to revitalize the clinical sterility of contemporary desktop typography and high-density displays.',
    category: 'Technology',
    date: 'Nov 02, 2026',
    readTime: '5 min read',
    isPaid: false,
    priceLabel: 'Free',
    imageUrl:
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Traditional movable metal letterpress type blocks arranged on a wooden workbench',
  },
  {
    id: 'distributed-topology-outlast-frenzy',
    title: 'Distributed Topology: Engineering Built to Outlast Frenzy',
    excerpt:
      'Lessons drawn from resilient decentralized infrastructure operating across bandwidth-constrained networks in East Africa.',
    category: 'Architecture',
    date: 'Nov 14, 2026',
    readTime: '12 min read',
    isPaid: true,
    priceLabel: 'Paid · UGX 5,000',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Illuminated server rack cabling inside a dark data center',
  },
  {
    id: 'anatomy-of-resilient-distributed-systems',
    title: 'The Anatomy of Resilient Distributed Systems',
    excerpt:
      'Why modern hyper-scaled topologies frequently collapse under synchronous cascading locks, and how adopting asynchronous partition boundaries creates calm.',
    category: 'Architecture',
    date: 'Nov 21, 2026',
    readTime: '10 min read',
    isPaid: false,
    priceLabel: 'Free',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sunlit brutalist concrete interior with timber ceiling beams and staircase',
    body: {
      isDemo: true,
      sections: [
        {
          heading: 'Start with a request that can fail',
          paragraphs: [
            'Imagine a small publishing application that accepts an article, prepares a search index, and sends a subscriber notification. This is a hypothetical example, not a report from a production system. Its purpose is to make the trade-offs of distributed software easier to reason about.',
            'A straightforward implementation performs every operation before replying to the author. That is easy to follow, but it ties the author’s experience to every dependency. If the notification service is unavailable, an otherwise valid article submission may appear to have failed. The first design question is therefore which work must finish before the application can honestly say that it accepted the article.',
          ],
        },
        {
          heading: 'Keep the critical transaction small',
          paragraphs: [
            'For this example, acceptance means recording the article and its publication intent. Keep those related changes in one database transaction. Avoid holding that transaction open while waiting for a remote notification service: a slow dependency can otherwise prolong the time that database resources remain occupied.',
            'When background work must reliably follow a committed change, an outbox is one option. Store a pending event alongside the article in the same transaction, then let a worker deliver it later. This avoids the gap between committing the article and attempting to publish an event separately. It still needs operational care: delivery can fail, workers can stop, and pending events need monitoring.',
          ],
        },
        {
          heading: 'Make repeated work safe',
          paragraphs: [
            'A worker may send a notification successfully and lose its connection before recording that success. Retrying is then reasonable, but the recipient could receive the same notification twice. Treat possible repetition as a design input rather than assuming that every delivery happens exactly once.',
            'Give each event a stable identifier and decide how the receiving operation handles that identifier. A consumer might record completed event IDs with a uniqueness constraint, while an external provider may offer an idempotency key. The protection must cover the side effect itself; checking a flag before an unrelated network call does not make those two operations atomic. Where duplicates cannot be fully prevented, make their impact understandable and manageable.',
          ],
        },
        {
          heading: 'Bound the backlog and explain progress',
          paragraphs: [
            'Moving work into a queue changes when failure is visible; it does not remove failure. If new events arrive faster than workers can process them, the backlog grows. Choose retry limits, delays, and a way to inspect work that repeatedly fails. Unrestricted retries can consume resources without making progress.',
            'The interface should distinguish accepted work from completed work. An author can be told that an article was saved while notification delivery remains pending. That message is more useful than an indefinite spinner or a success label that implies every downstream operation has finished. A status should describe what the system actually knows.',
          ],
        },
        {
          heading: 'Test the boundaries, not just the happy path',
          paragraphs: [
            'For the publishing example, test a notification timeout, a worker restart after delivery, a repeated event, and a database transaction that rolls back. Verify both stored state and visible outcomes. A test that only checks whether an event was queued cannot establish whether a subscriber was notified correctly.',
            'Observe the age of pending work as well as the number of failures. A quiet error log can coexist with a stalled worker that never attempts another delivery. Useful signals connect technical events to user expectations: how long accepted articles wait for indexing, which notifications need attention, and whether recovery is making progress.',
          ],
        },
        {
          heading: 'Choose boundaries deliberately',
          paragraphs: [
            'A queue is not automatically better than a direct call. For a small operation with simple failure handling, synchronous execution may be the clearest choice. Add asynchronous boundaries when the work can finish later and when the application can represent that delay honestly.',
            'Resilience grows from explicit decisions about acceptance, repetition, failure, and recovery. Start with one user action, identify the smallest promise the system can safely make, and test what happens when each dependency breaks. The result is a design whose behavior is easier to explain, operate, and improve.',
          ],
        },
      ],
    },
  },
  {
    id: 'memory-allocations-bare-metal',
    title: 'Memory Allocations in Bare-Metal Embedded Runtimes',
    excerpt:
      'Deterministic arena allocators, zero-copy ring buffers, and the craft of writing predictable systems software that runs for decades without rebooting.',
    category: 'Technology',
    date: 'Nov 29, 2026',
    readTime: '9 min read',
    isPaid: true,
    priceLabel: 'Paid · UGX 8,000',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Macro photograph of precision circuit board traces and microcontrollers',
  },
  {
    id: 'nordic-architectural-restraint-ui',
    title: 'Nordic Architectural Restraint in Spatial Interfaces',
    excerpt:
      'How structural honesty, natural material hierarchies, and negative space from 20th-century civic architecture inform calmer digital workspaces.',
    category: 'Architecture',
    date: 'Dec 05, 2026',
    readTime: '7 min read',
    isPaid: false,
    priceLabel: 'Free',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Clean geometric facade of a modern architectural structure',
  },
] as const
