import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

const desktopThemeSwitch = `
                    <a href="/" aria-label="切換至亮色新版作品集" title="切換至亮色新版作品集"
                        class="legacy-theme-switch">
                        <i data-lucide="sun" class="h-4 w-4" aria-hidden="true"></i>
                    </a>`;

const legacyThemeStyles = `<style>
    .legacy-theme-switch {
        align-items: center;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 9999px;
        color: #fbbf24;
        display: inline-flex;
        flex: 0 0 auto;
        height: 2.5rem;
        justify-content: center;
        transition: background-color .25s ease, border-color .25s ease, transform .25s ease;
        width: 2.5rem;
    }
    .legacy-theme-switch:hover {
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(251, 191, 36, 0.45);
        transform: scale(1.05);
    }
    .legacy-theme-switch:focus-visible {
        outline: 2px solid #fbbf24;
        outline-offset: 3px;
    }
</style>`;

function prepareLegacyPage(source: string, loadingStyles: string) {
  return source
    .replace(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="color-scheme" content="dark">\n    <meta name="theme-color" content="#0f172a">\n    <meta name="robots" content="noindex, follow">\n    <link rel="canonical" href="https://let.gowork.run/">',
    )
    .replace(
      '<link rel="stylesheet" href="loading/loading.css">',
      `<style>${loadingStyles}</style>`,
    )
    .replaceAll('href="assets/', 'href="/assets/')
    .replaceAll('src="assets/', 'src="/assets/')
    .replace("</head>", `${legacyThemeStyles}\n</head>`)
    .replace(
      '<div class="flex items-center gap-4">',
      `<div class="flex items-center gap-3">${desktopThemeSwitch}`,
    );
}

export async function GET() {
  const workspaceRoot = process.cwd();
  const [source, loadingStyles] = await Promise.all([
    readFile(path.join(workspaceRoot, "index.html"), "utf8"),
    readFile(path.join(workspaceRoot, "loading", "loading.css"), "utf8"),
  ]);

  return new Response(prepareLegacyPage(source, loadingStyles), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
