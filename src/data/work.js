import { mediaUrl } from "../config/media";
/**
 * Work data source.
 * Add new work here — the UI renders everything dynamically.
 *
 * Section types available for `sections[]`:
 *   { type: "text",       label, body }
 *   { type: "image",      src, alt, aspect }   aspect: "wide" | "square" | "portrait"
 *   { type: "video",      src }
 *   { type: "video_grid", videos: [{ src, label? }], columns? }  ← multiple videos in a grid
 *   { type: "grid",       images: [{ src, alt }], columns }
 *   { type: "row",        images: [{ src, alt }] }
 *   { type: "stat",       stats: [{ value, label }] }
 */

const work = [
  {
    slug: "michi",
    title: "$MICHI",
    tagline: "Solana Memecoin · Brand & Content",
    description:
      "$MICHI is a Solana-based memecoin driven by community momentum and internet culture. Over 12 months I built its entire visual identity from scratch.",
    cover: mediaUrl("/images/work/$Michi Work/Michi cover.png"),
    hero: mediaUrl("/images/work/$Michi Work/Michi Banner.png"),
    tags: ["Branding", "Illustration", "Web3", "Motion"],
    year: "2023 – 2024",
    role: "Lead Visual Designer",
    sections: [
      {
        type: "text",
        label: "The Challenge",
        body: "When I joined, $MICHI had no clear visual identity and lacked the high-quality content needed to stand out in an overcrowded memecoin market. The community was growing fast but the brand was inconsistent — random memes, no style guide, no recognisable character.",
      },
      {
        type: "grid",
        images: [
          { src: mediaUrl("/images/work/$Michi Work/Michi 02.png"), alt: "$MICHI brand showcase" },
          { src: mediaUrl("/images/work/$Michi Work/Michi 01.png"), alt: "$MICHI opening visual" },
        ],
        columns: 2,
        aspect: "wide",
      },
      {
        type: "text",
        label: "The Solution",
        body: "Over 12 months I created 600+ illustrations, animations, and meme designs for X (Twitter) and Telegram. I established a consistent character style, colour palette, and tone of voice that made every piece instantly recognisable as $MICHI — whether it was a reaction meme or a major milestone announcement.",
      },
      {
        type: "grid",
        images: [
          { src: mediaUrl("/images/work/$Michi Work/Michi 03.png"), alt: "Michi design 03" },
          { src: mediaUrl("/images/work/$Michi Work/Michi 04.png"), alt: "Michi design 04" },
          { src: mediaUrl("/images/work/$Michi Work/Michi 06.png"), alt: "Michi design 06" },
          { src: mediaUrl("/images/work/$Michi Work/Michi 07.png"), alt: "Michi design 07" },
          { src: mediaUrl("/images/work/$Michi Work/Michi 08.png"), alt: "Michi design 08" },
        ],
        columns: 3,
      },
      {
        type: "video",
        src: mediaUrl("/images/work/$Michi Work/Michi 05.mp4"),
      },
      {
        type: "stat",
        stats: [
          { value: "600+", label: "Illustrations & animations created" },
          { value: "12", label: "Months of continuous work" },
          { value: "100M+", label: "Community milestone reached" },
        ],
      },
      {
        type: "text",
        label: "Results",
        body: "My work helped improve engagement, strengthened the brand's visual identity, and supported $MICHI's growth through critical stages of its development — from early community building to its 100M milestone.",
      },
    ],
  },
  {
    slug: "socrazy",
    title: "$SoCrazy",
    tagline: "Web3 Work · Motion & Content Design",
    description:
      "$SoCrazy is a Web3 brand focused on community engagement and digital culture. I created a motion-driven content system designed to improve communication, branding, and social engagement.",
    cover: mediaUrl("/images/work/$SoCrazy Work/SoCrazy cover.png"),
    hero: mediaUrl("/images/work/$SoCrazy Work/SoCrazy Banner.png"),
    tags: ["Motion Design", "Web3", "Content Design", "Animation"],
    year: "2026",
    role: "Motion Designer & Visual Content Creator",
    sections: [
      {
        type: "text",
        label: "The Challenge",
        body: "The brand needed engaging visual content that could clearly communicate its vision, capture attention on social platforms, and create a stronger connection with its community. The existing content lacked consistency and the dynamic presentation needed to stand out in the competitive Web3 space.",
      },
      {
        type: "video",
        src: mediaUrl("/images/work/$SoCrazy Work/SoCrazy 02.mp4"),
        alt: "$SoCrazy motion design showcase",
        aspect: "wide",
      },
      {
        type: "text",
        label: "The Solution",
        body: "I created an explainer animated video focused on clear storytelling and dynamic pacing, designed animated Telegram stickers to increase community interaction, and developed eye-catching X (Twitter) visuals to strengthen the brand's online presence. Every asset was designed as part of one cohesive visual system to maintain consistency across platforms.",
      },
      {
        type: "video_grid",
        columns: 2,          // optional, defaults to 2
        videos: [
          { src: mediaUrl("/images/work/$SoCrazy Work/SoCrazy 03.mp4"), label: "SoCrazy 03", fit: "contain" },
          { src: mediaUrl("/images/work/$SoCrazy Work/SoCrazy 04.mp4"), label: "SoCrazy 04" },
        ],
      },
      {
          type: "stat",
        stats: [
          { value: "20+", label: "Content Design & animations created" },
          { value: "2", label: "Months of continuous work" },
          { value: "100%", label: "Custom Web3 visuals" },
        ],
      },
      {
        type: "text",
        label: "Results",
        body: "My work helped strengthen the brand's visual identity, improve communication through motion-driven storytelling, and increase engagement potential across Telegram and X (Twitter) through consistent, high-impact content.",
      },
    ],
  },
  {
    slug: "xrpinu",
    title: "$XRPINU",
    tagline: "XRP Memecoin · Motion & Content Design",
    description:
      "$XRPINU is a XRP-inspired memecoin focused on building a strong community through character-driven branding and engaging visual content. Over 4 months I helped shape the brand's visual identity across X (Twitter) and Telegram.",
    cover: mediaUrl("/images/work/$XRPINU Work/XRPINU cover.png"),
    hero: mediaUrl("/images/work/$XRPINU Work/XRPINU Banner.png"),
    tags: ["Branding", "Illustration", "Web3", "Motion"],
    year: "2025",
    role: "Graphic & Motion Designer",
    sections: [
      {
        type: "text",
        label: "The Challenge",
        body: "When I joined, $XRPINU needed a stronger and more consistent visual identity to stand out in the competitive memecoin space. The brand required engaging content that could capture attention quickly, strengthen brand recognition, and increase community interaction across social platforms.",
      },
      {
        type: "image",
        src: mediaUrl("/images/work/$XRPINU Work/XRPINU 02.png"),
        alt: "$XRPINU brand showcase",
        aspect: "wide",
      },
      {
        type: "text",
        label: "The Solution",
        body: "Over 4 months I created 115+ custom illustrations, animated content, and branded assets for X (Twitter) and Telegram. I developed a recognizable character-driven visual style inspired by meme culture and crypto aesthetics, helping make the brand's content more engaging, shareable, and instantly identifiable.",
      },
      {
        type: "grid",
        images: [
          { src: mediaUrl("/images/work/$XRPINU Work/XRPINU 03.png"), alt: "xrpinu design 03" },
          { src: mediaUrl("/images/work/$XRPINU Work/XRPINU 04.png"), alt: "xrpinu design 04" },
          { src: mediaUrl("/images/work/$XRPINU Work/XRPINU 05.png"), alt: "xrpinu design 05" },
        ],
        columns: 3,
      },
      {
        type: "video",
        src: mediaUrl("/images/work/$XRPINU Work/XRPINU 06.mp4"),
        // src: mediaUrl("/images/work/$XRPINU Work/XRPINU 07.mp4"),
      },
      {
        type: "video",
        // src: mediaUrl("/images/work/$XRPINU Work/XRPINU 06.mp4"),
        src: mediaUrl("/images/work/$XRPINU Work/XRPINU 07.mp4"),
      },
      {
        type: "stat",
        stats: [
          { value: "115+", label: "Illustrations & animations created" },
          { value: "5", label: "Months of work" },
          { value: "Daily", label: "Content delivery" },
        ],
      },
      {
        type: "text",
        label: "Results",
        body: "My work helped strengthen $XRPINU's visual identity, improve content consistency, and support community engagement through high-quality illustrations, animations, and branded visuals tailored for the Web3 audience.",
      },
    ],
  },
  {
    slug: "mbapepe",
    title: "$Mbapepe",
    tagline: "Memecoin · Brand & Content",
    description:
      "$Mbapepe is a meme-driven crypto brand inspired by internet and football culture. I helped shape its visual identity through engaging content and community-focused design.",
    cover: mediaUrl("/images/work/$Mbapepe Work/Mbapepe cover.png"),
    hero: mediaUrl("/images/work/$Mbapepe Work/Mbapepe Banner.png"),
    tags: ["Branding", "Illustration", "Web3", "Motion"],
    year: "2023",
    role: "Graphic Designer",
    sections: [
      {
        type: "text",
        label: "The Challenge",
        body: "When I joined, $Mbapepe needed stronger branding and more consistent content to stand out in the fast-moving memecoin space. The brand had community potential but lacked a clear and recognisable visual style.",
      },
      {
        type: "image",
        src: mediaUrl("/images/work/$Mbapepe Work/Mbapepe 05.png"),
        alt: "$MICHI brand showcase",
        aspect: "wide",
      },
      {
        type: "text",
        label: "The Solution",
        body: "I created banners, Telegram stickers, animations, illustration posts for X (Twitter), and profile visuals designed to make the brand more engaging and instantly recognisable. The content was built around meme culture and community interaction to support growth across social platforms.",
      },
      {
        type: "grid",
        images: [
         { src: mediaUrl("/images/work/$Mbapepe Work/Mbapepe 01.png"), alt: "Mbapepe design 01" },
         { src: mediaUrl("/images/work/$Mbapepe Work/Mbapepe 02.png"), alt: "Mbapepe design 02" },
         { src: mediaUrl("/images/work/$Mbapepe Work/Mbapepe 03.png"), alt: "Mbapepe design 03" },
         { src: mediaUrl("/images/work/$Mbapepe Work/Mbapepe 04.png"), alt: "Mbapepe design 04" },
        ],
        columns: 3,
      },
      {
        type: "video",
        src: mediaUrl("/images/work/$Mbapepe Work/Mbapepe 07.mp4"),
      },
      {
        type: "stat",
        stats: [
          { value: "15+", label: "Custom visual assets created" },
          { value: "2", label: "Months of continuous work" },
          { value: "100%", label: "Custom Web3 visuals" },
        ],
      },
      {
        type: "text",
        label: "Results",
        body: "My work helped improve engagement, strengthen the brand's online identity, and support $Mbapepe’s visibility and growth through consistent, high-quality visual content.",
      },
    ],
  },

  // ─── Placeholder work — fill in your real data when ready ───────────────
  {
    slug: "work-3",
    title: "Coming Soon",
    tagline: "Next work",
    description: "Details coming soon.",
    cover: null,
    tags: ["Motion"],
    year: "2024",
    role: "Designer",
    sections: [],
    comingSoon: true,
  },
  {
    slug: "work-4",
    title: "Coming Soon",
    tagline: "Next work",
    description: "Details coming soon.",
    cover: null,
    tags: ["Illustration"],
    year: "2024",
    role: "Designer",
    sections: [],
    comingSoon: true,
  },
];

export default work;


