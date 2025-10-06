(function () {
  async function loadProjects() {
    try {
      const res = await fetch('/projects.json');
      if (!res.ok) throw new Error('Failed to load projects.json');
      return await res.json();
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  function createImageElement(src, alt) {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.className = 'img-medium img-rounded img-shadow';
    figure.appendChild(img);
    return figure;
  }

  /**
   * Normalize links into objects: { url, text }
   * Accepts either an array of strings or an array of objects { url, text }.
   */
  function normalizeLinks(links) {
    if (!links || links.length === 0) return [];
    return links.map((l) => {
      if (typeof l === 'string') return { url: l, text: null };
      // already an object, prefer 'url' or 'href'
      return { url: l.url || l.href || '', text: l.text || l.label || null };
    }).filter(l => l.url);
  }

  async function render() {
    const projects = await loadProjects();
    const id = getQueryParam('id');
    const project = projects.find((p) => p.id === id);

    const titleEl = document.getElementById('project-title');
    const summaryEl = document.getElementById('project-summary');
    const mediaEl = document.getElementById('project-media');
    const linksEl = document.getElementById('project-links');

    if (!project) {
      titleEl.textContent = 'Project not found';
      summaryEl.textContent = id ? `No project found with id "${id}".` : 'No project id provided.';
      return;
    }

    titleEl.textContent = project.title;
    summaryEl.textContent = project.summary || '';

    // contentPath: fetch an HTML fragment and inject it into the page
    const contentEl = document.getElementById('project-content');
    contentEl.innerHTML = '';
    if (project.contentPath) {
      try {
        const resp = await fetch(project.contentPath);
        if (resp.ok) {
          const html = await resp.text();
          contentEl.innerHTML = html;
        } else {
          contentEl.textContent = 'Failed to load project content.';
        }
      } catch (e) {
        console.error(e);
        contentEl.textContent = 'Failed to load project content.';
      }
    }

    // images (render after content so they appear below the content)
    mediaEl.innerHTML = '';
    const imgs = project.images || [];
    if (imgs.length > 0) {
      const imgHeading = document.createElement('h3');
      imgHeading.textContent = 'Images';
      // Insert heading as a sibling *before* the mediaEl so it's outside the gallery container
      if (mediaEl && mediaEl.parentNode) {
        mediaEl.parentNode.insertBefore(imgHeading, mediaEl);
      }
      imgs.forEach((img) => {
        const fig = createImageElement(img, project.title + ' image');
        mediaEl.appendChild(fig);
      });
    }

    // links as buttons at the bottom
    linksEl.innerHTML = '';
    const normLinks = normalizeLinks(project.links);
    if (normLinks.length > 0) {
      const heading = document.createElement('h3');
      heading.textContent = 'Downloads / Links';
      linksEl.appendChild(heading);
      const buttons = document.createElement('div');
      buttons.className = 'project-downloads';
      normLinks.forEach((lnk) => {
        const btn = document.createElement('a');
        btn.href = lnk.url;
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
        btn.className = 'download-button';
        btn.textContent = lnk.text || 'Download';
        buttons.appendChild(btn);
      });
      linksEl.appendChild(buttons);
    }
  }

  // Kick off
  document.addEventListener('DOMContentLoaded', render);
})();
