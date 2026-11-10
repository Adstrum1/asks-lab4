/**
 * Second Brain / PKM Study Notes Application
 * 100% Офлайн, чистий JavaScript (ES6+) без зовнішніх бібліотек
 */

// =============================================================================
// 1. Початкові демонстраційні дані (Seeds)
// =============================================================================

const DEFAULT_SAMPLE_NOTES = [
  {
    id: "note_demo_inbox_1",
    title: "Ідея організації навчальних знань за методологією PARA",
    created: "2026-11-08T09:15:00+02:00",
    updated: "2026-11-10T11:20:00+02:00",
    tags: ["продуктивність", "методологія", "навчання"],
    status: "В процесі",
    type: "Конспект",
    category: "Inbox",
    content: `## Концепція
Методологія **PARA** розділяє всю навчальну інформацію на 4 ключові рівні дійсності:
1. **Projects (Проєкти)** — задачі з чітким дедлайном і результатом (наприклад, [[Веброзробка Second Brain]]).
2. **Areas (Сфери відповідальності)** — довгострокові навчальні предмети та напрямки знань (наприклад, [[Вступ до алгоритмів і структур даних]]).
3. **Resources (Ресурси)** — довідники, документація, інструменти (наприклад, [[Посібник із синтаксису Markdown]]).
4. **Archives (Архів)** — завершені курси та неактивні матеріали (наприклад, [[Архівні конспекти з основ програмування]]).

## Наступні кроки
- [x] Ознайомитися з основами PARA
- [ ] Організувати поточні навчальні конспекти
- [ ] Налагодити двосторонні зв'язки між темами за допомогою синтаксису \`[[...]]\``
  },
  {
    id: "note_demo_projects_1",
    title: "Веброзробка Second Brain",
    created: "2026-11-09T14:00:00+02:00",
    updated: "2026-11-10T12:45:00+02:00",
    tags: ["веб", "проєкт", "javascript"],
    status: "В процесі",
    type: "Завдання",
    category: "Projects",
    content: `## Мета проєкту
Створити легку, повністю офлайнову навчальну сторінку для нотаток із підтримкою синтаксису Markdown, структури PARA та двосторонніх посилань \`[[Wiki-link]]\`.

## План виконання
- [x] Погодити архітектуру та структуру репозиторію
- [x] Створити шаблон \`note-template.md\` з YAML frontmatter
- [ ] Реалізувати автономний рендерер Markdown
- [ ] Додати обробку вихідних посилань та зворотних зв'язків (Backlinks)
- [ ] Перевірити сумісність із нотатками:
  - [[Ідея організації навчальних знань за методологією PARA]]
  - [[Посібник із синтаксису Markdown]]

## Технологічні обмеження
- Тільки ванільний JavaScript, CSS3 та HTML5.
- Жодних сторонніх CDN або мережевих залежностей.
- Локальне збереження у \`localStorage\`.`
  },
  {
    id: "note_demo_areas_1",
    title: "Вступ до алгоритмів і структур даних",
    created: "2026-11-05T10:30:00+02:00",
    updated: "2026-11-10T09:00:00+02:00",
    tags: ["алгоритми", "компютерні-науки", "структури-даних"],
    status: "В процесі",
    type: "Конспект",
    category: "Areas",
    content: `## Основні структури даних
1. **Масив (Array)**: неперервна область пам'яті, миттєвий доступ за індексом $O(1)$.
2. **Зв'язний список (Linked List)**: вузли зі вказівниками на наступний елемент.
3. **Стек та Черга (Stack / Queue)**: LIFO та FIFO відповідно.
4. **Хеш-таблиця (Hash Map)**: ключ-значення із середнім часом доступу $O(1)$.

## Аналіз ефективності
Для оцінки часової та просторової складності алгоритмів використовується [[Оцінка складності алгоритмів O-нотація]].

\`\`\`python
# Пошук елемента у списку: O(n)
def linear_search(arr, target):
    for idx, val in enumerate(arr):
        if val == target:
            return idx
    return -1
\`\`\`

## Пов'язані матеріали
- [[Оцінка складності алгоритмів O-нотація]]
- [[Архівні конспекти з основ програмування]]`
  },
  {
    id: "note_demo_areas_2",
    title: "Оцінка складності алгоритмів O-нотація",
    created: "2026-11-06T11:00:00+02:00",
    updated: "2026-11-09T18:30:00+02:00",
    tags: ["алгоритми", "теорія", "математика"],
    status: "Завершено",
    type: "Поняття",
    category: "Areas",
    content: `## Що таке Big-O?
**O-нотація** описує верхню межу швидкості зростання часу виконання або споживання пам'яті алгоритму в залежності від розміру вхідних даних n.

| Нотація | Назва | Приклад алгоритму |
|---|---|---|
| O(1) | Константна | Доступ до елемента масиву за індексом |
| O(log n) | Логарифмічна | Бінарний пошук у відсортованому масиві |
| O(n) | Лінійна | Прохід по несортованому списку |
| O(n log n) | Лінійно-логарифмічна | Швидке сортування (QuickSort), MergeSort |
| O(n^2) | Квадратична | Сортування бульбашкою (Bubble Sort) |

## Застосування
При розробці завжди прагнуть знизити складність з O(n^2) до O(n log n) або O(n).
Детальніше про використання у структурах даних див. у [[Вступ до алгоритмів і структур даних]].`
  },
  {
    id: "note_demo_resources_1",
    title: "Посібник із синтаксису Markdown",
    created: "2026-11-07T08:00:00+02:00",
    updated: "2026-11-10T10:15:00+02:00",
    tags: ["markdown", "шпаргалка", "інструменти"],
    status: "Завершено",
    type: "Література",
    category: "Resources",
    content: `## Базове форматування
- **Жирний шрифт**: \`**жирний**\` або \`__жирний__\`
- *Курсив*: \`*курсив*\` або \`_курсив_\`
- ~~Закреслений~~: \`~~текст~~\`
- \`Вбудований код\`: \`\` \`print("hello")\` \`\`

## Списки та завдання
- [x] Виконаний пункт завдання
- [ ] Невиконаний пункт завдання

## Блоки коду
\`\`\`javascript
function greet(name) {
    console.log(\`Привіт, \${name}!\`);
}
\`\`\`

## Вікі-посилання (Wiki-links)
Для створення внутрішнього гіперпосилання на іншу навчальну нотатку використовується подвійний парний квадратний дужковий синтаксис:
- [[Веброзробка Second Brain]]
- [[Ідея організації навчальних знань за методологією PARA]]`
  },
  {
    id: "note_demo_archives_1",
    title: "Архівні конспекти з основ програмування",
    created: "2026-09-01T12:00:00+02:00",
    updated: "2026-10-15T16:40:00+02:00",
    tags: ["архів", "основи", "програмування"],
    status: "В архіві",
    type: "Резюме",
    category: "Archives",
    content: `## Огляд
Цей документ містить заархівовані конспекти підготовчого курсу:
- Змінні, типи даних та оператори.
- Розгалуження та цикли.
- Функції та область видимості.

## Зв'язок із поточними курсами
Матеріали цього модуля стали фундаментом для наступного курсу:
- [[Вступ до алгоритмів і структур даних]]
- [[Оцінка складності алгоритмів O-нотація]]`
  }
];

// =============================================================================
// 2. Менеджер сховища та парсер YAML Frontmatter
// =============================================================================

class StorageManager {
  static STORAGE_KEY = "second_brain_study_notes_v1";

  static getNotes() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) {
        this.saveNotes(DEFAULT_SAMPLE_NOTES);
        return DEFAULT_SAMPLE_NOTES;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error("Помилка читання з localStorage:", e);
      return DEFAULT_SAMPLE_NOTES;
    }
  }

  static saveNotes(notes) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notes));
    } catch (e) {
      console.error("Помилка збереження в localStorage:", e);
    }
  }

  static resetToDemo() {
    this.saveNotes(DEFAULT_SAMPLE_NOTES);
    return DEFAULT_SAMPLE_NOTES;
  }
}

class YamlFrontmatter {
  /**
   * Розбирає текст Markdown із YAML frontmatter на об'єкт метаданих та тіло
   */
  static parse(rawText) {
    const trimmed = rawText.trim();
    if (!trimmed.startsWith("---")) {
      return { metadata: {}, content: rawText };
    }

    const match = rawText.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) {
      return { metadata: {}, content: rawText };
    }

    const yamlBlock = match[1];
    const content = match[2];
    const metadata = {};

    const lines = yamlBlock.split(/\r?\n/);
    let currentKey = null;
    let isArray = false;

    for (let line of lines) {
      const stripped = line.trim();
      if (!stripped || stripped.startsWith("#")) continue;

      // Перевірка елемента списку YAML: "- tag"
      if (stripped.startsWith("- ") && currentKey && isArray) {
        let val = stripped.substring(2).trim();
        val = val.replace(/^["']|["']$/g, "");
        metadata[currentKey].push(val);
        continue;
      }

      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        const key = line.substring(0, colonIndex).trim();
        let val = line.substring(colonIndex + 1).trim();

        // Очищення коментарів наприкінці рядка
        const commentIdx = val.indexOf("#");
        if (commentIdx !== -1) {
          val = val.substring(0, commentIdx).trim();
        }

        if (val === "") {
          currentKey = key;
          isArray = true;
          metadata[key] = [];
        } else if (val.startsWith("[") && val.endsWith("]")) {
          // Масив у форматі inline JSON/YAML: [a, b]
          const items = val.slice(1, -1).split(",").map(s => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
          metadata[key] = items;
          isArray = false;
        } else {
          // Звичайне рядкове значення
          val = val.replace(/^["']|["']$/g, "");
          metadata[key] = val;
          isArray = false;
        }
      }
    }

    return { metadata, content };
  }

  /**
   * Складає об'єкт метаданих і тіло нотатки у стандартний Markdown з YAML frontmatter
   */
  static stringify(note) {
    const lines = ["---"];
    lines.push(`title: "${(note.title || "Нова нотатка").replace(/"/g, '\\"')}"`);
    lines.push(`created: "${note.created || new Date().toISOString()}"`);
    lines.push(`updated: "${note.updated || new Date().toISOString()}"`);

    const tags = Array.isArray(note.tags) ? note.tags : [];
    if (tags.length > 0) {
      lines.push("tags:");
      tags.forEach(t => lines.push(`  - ${t}`));
    } else {
      lines.push("tags: []");
    }

    lines.push(`status: "${note.status || "Чернетка"}"`);
    lines.push(`type: "${note.type || "Конспект"}"`);
    lines.push(`category: "${note.category || "Inbox"}"`);
    lines.push("---");
    lines.push("");
    lines.push(note.content || "");

    return lines.join("\n");
  }
}

// =============================================================================
// 3. Вбудований автономний Markdown-парсер із підтримкою Wiki-links
// =============================================================================

class MarkdownParser {
  /**
   * Перетворює Markdown рядок у безпечний HTML з клікабельними [[Wiki-посиланнями]]
   * @param {string} md - Текст нотатки
   * @param {Array<string>} existingTitles - Список назв існуючих нотаток для стилізації
   */
  static render(md, existingTitles = []) {
    if (!md) return "";

    // Тимчасове збереження блоків коду та inline коду для запобігання пошкодженню синтаксису
    const codePlaceholders = [];
    let html = md;

    // Блоки коду: ```lang \n code \n ```
    html = html.replace(/```([a-zA-Z0-9_-]*)\r?\n([\s\S]*?)```/g, (match, lang, code) => {
      const idx = codePlaceholders.length;
      const escapedCode = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      codePlaceholders.push(`<pre><code class="language-${lang || 'text'}">${escapedCode.trim()}</code></pre>`);
      return `%%CODE_BLOCK_${idx}%%`;
    });

    // Inline код: `code`
    html = html.replace(/`([^`]+)`/g, (match, code) => {
      const idx = codePlaceholders.length;
      const escapedCode = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      codePlaceholders.push(`<code>${escapedCode}</code>`);
      return `%%CODE_BLOCK_${idx}%%`;
    });

    // Екранування HTML-символів у звичайному тексті
    html = html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Заголовки (# .. ######)
    html = html.replace(/^###### (.*$)/gim, "<h6>$1</h6>");
    html = html.replace(/^##### (.*$)/gim, "<h5>$1</h5>");
    html = html.replace(/^#### (.*$)/gim, "<h4>$1</h4>");
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // Горизонтальна лінія
    html = html.replace(/^---$/gim, "<hr>");

    // Цитати: > text
    html = html.replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>");

    // Чекбокси завдань: - [ ] або - [x]
    html = html.replace(/^- \[x\] (.*$)/gim, '<li class="task-item"><input type="checkbox" checked disabled> <span>$1</span></li>');
    html = html.replace(/^- \[ \] (.*$)/gim, '<li class="task-item"><input type="checkbox" disabled> <span>$1</span></li>');

    // Марковані списки: - item або * item
    html = html.replace(/^[\*\-] (?!<input)(.*$)/gim, "<li>$1</li>");

    // Нумеровані списки: 1. item
    html = html.replace(/^\d+\. (.*$)/gim, "<li>$1</li>");

    // Обгортка <li> в <ul>
    html = html.replace(/(<li>[\s\S]*?<\/li>)/g, (match) => {
      return `<ul>${match}</ul>`;
    });
    // Об'єднання сусідніх <ul>
    html = html.replace(/<\/ul>\s*<ul>/g, "");

    // Таблиці Markdown
    html = html.replace(/(?:^\|.+?\|\r?\n)+/gm, (tableMatch) => {
      const rows = tableMatch.trim().split(/\r?\n/);
      if (rows.length < 2) return tableMatch;

      let tableHtml = "<table>";
      let isHeader = true;

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i].trim();
        if (/^\|(\s*[-:]+[-| :]*)\|$/.test(row)) {
          isHeader = false;
          continue;
        }

        const cols = row.split("|").slice(1, -1);
        tableHtml += "<tr>";
        for (let col of cols) {
          const tag = isHeader ? "th" : "td";
          tableHtml += `<${tag}>${col.trim()}</${tag}>`;
        }
        tableHtml += "</tr>";
      }
      tableHtml += "</table>";
      return tableHtml;
    });

    // Жирний, курсив, закреслений
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/__([^_]+)__/g, "<strong>$1</strong>");
    html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    html = html.replace(/_([^_]+)_/g, "<em>$1</em>");
    html = html.replace(/~~([^~]+)~~/g, "<del>$1</del>");

    // Стандартні посилання: [текст](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Вікі-посилання: [[Назва нотатки]]
    html = html.replace(/\[\[(.*?)\]\]/g, (match, noteTitle) => {
      // Відновлюємо екрановані &amp; для точного співставлення заголовків
      const cleanTitle = noteTitle
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .trim();

      const exists = existingTitles.some(t => t.toLowerCase() === cleanTitle.toLowerCase());
      const safeDisplay = cleanTitle.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

      if (exists) {
        return `<a href="#" class="wikilink" data-target="${encodeURIComponent(cleanTitle)}">[[${safeDisplay}]]</a>`;
      } else {
        return `<a href="#" class="wikilink missing" title="Нотатка ще не створена. Натисніть, щоб створити." data-target="${encodeURIComponent(cleanTitle)}">[[${safeDisplay}]] <small>(+)</small></a>`;
      }
    });

    // Відновлення кодових блоків
    html = html.replace(/%%CODE_BLOCK_(\d+)%%/g, (match, idx) => {
      return codePlaceholders[Number(idx)] || "";
    });

    // Параграфи: подвійний перенос рядка
    const blocks = html.split(/\n\n+/);
    html = blocks.map(block => {
      block = block.trim();
      if (!block) return "";
      if (/^<(h[1-6]|ul|ol|pre|table|blockquote|hr)/i.test(block)) {
        return block;
      }
      return `<p>${block.replace(/\n/g, "<br>")}</p>`;
    }).join("\n");

    return html;
  }

  /**
   * Витягує всі назви [[нотаток]], на які є посилання в тексті
   */
  static extractWikilinks(text) {
    if (!text) return [];
    const matches = text.match(/\[\[(.*?)\]\]/g) || [];
    const links = new Set();
    matches.forEach(m => {
      const clean = m.replace(/^\[\[|\]\]$/g, "").trim();
      if (clean) links.add(clean);
    });
    return Array.from(links);
  }
}

// =============================================================================
// 4. Головний контролер програми
// =============================================================================

class App {
  constructor() {
    this.notes = [];
    this.activeNoteId = null;
    this.currentCategoryFilter = "all";
    this.currentTagFilter = null;
    this.searchQuery = "";
    this.isEditing = false;
    this.isRawMode = false;

    this.initElements();
    this.bindEvents();
    this.loadNotes();
  }

  initElements() {
    // Елементи навігації
    this.categoryNav = document.getElementById("categoryNav");
    this.tagsCloud = document.getElementById("tagsCloud");
    this.btnNewNoteSidebar = document.getElementById("btnNewNoteSidebar");
    this.btnExportJson = document.getElementById("btnExportJson");
    this.fileImportInput = document.getElementById("fileImportInput");
    this.btnResetDemo = document.getElementById("btnResetDemo");

    // Лічильники
    this.countAll = document.getElementById("countAll");
    this.countInbox = document.getElementById("countInbox");
    this.countProjects = document.getElementById("countProjects");
    this.countAreas = document.getElementById("countAreas");
    this.countResources = document.getElementById("countResources");
    this.countArchives = document.getElementById("countArchives");

    // Пошук та фільтр
    this.searchInput = document.getElementById("searchInput");
    this.btnClearSearch = document.getElementById("btnClearSearch");
    this.activeFilterBadge = document.getElementById("activeFilterBadge");
    this.activeFilterText = document.getElementById("activeFilterText");
    this.btnResetFilter = document.getElementById("btnResetFilter");

    // Список нотаток
    this.notesListContainer = document.getElementById("notesListContainer");

    // Робоча панель
    this.emptyState = document.getElementById("emptyState");
    this.btnCreateFirstNote = document.getElementById("btnCreateFirstNote");
    this.noteViewer = document.getElementById("noteViewer");
    this.noteEditor = document.getElementById("noteEditor");

    // Елементи режиму читання
    this.viewCategoryBadge = document.getElementById("viewCategoryBadge");
    this.viewStatusBadge = document.getElementById("viewStatusBadge");
    this.viewTypeBadge = document.getElementById("viewTypeBadge");
    this.viewTitle = document.getElementById("viewTitle");
    this.viewCreated = document.getElementById("viewCreated");
    this.viewUpdated = document.getElementById("viewUpdated");
    this.viewTagsContainer = document.getElementById("viewTagsContainer");
    this.viewMarkdownBody = document.getElementById("viewMarkdownBody");
    this.outgoingLinksList = document.getElementById("outgoingLinksList");
    this.outgoingCount = document.getElementById("outgoingCount");
    this.backlinksList = document.getElementById("backlinksList");
    this.backlinksCount = document.getElementById("backlinksCount");

    // Кнопки тулбара перегляду
    this.btnEditNote = document.getElementById("btnEditNote");
    this.btnDownloadMd = document.getElementById("btnDownloadMd");
    this.btnDeleteNote = document.getElementById("btnDeleteNote");

    // Елементи редактора
    this.editorModeLabel = document.getElementById("editorModeLabel");
    this.btnToggleRawMode = document.getElementById("btnToggleRawMode");
    this.btnCancelEdit = document.getElementById("btnCancelEdit");
    this.btnSaveNote = document.getElementById("btnSaveNote");
    this.noteForm = document.getElementById("noteForm");
    this.editTitle = document.getElementById("editTitle");
    this.editCategory = document.getElementById("editCategory");
    this.editStatusSelect = document.getElementById("editStatusSelect");
    this.editStatusCustom = document.getElementById("editStatusCustom");
    this.editTypeSelect = document.getElementById("editTypeSelect");
    this.editTypeCustom = document.getElementById("editTypeCustom");
    this.editTags = document.getElementById("editTags");
    this.editContent = document.getElementById("editContent");
    this.editorLivePreview = document.getElementById("editorLivePreview");
    this.rawYamlEditorContainer = document.getElementById("rawYamlEditorContainer");
    this.rawYamlContent = document.getElementById("rawYamlContent");

    // Сповіщення
    this.toast = document.getElementById("notificationToast");
  }

  bindEvents() {
    // Навігація по категоріях
    this.categoryNav.addEventListener("click", (e) => {
      const item = e.target.closest(".nav-item");
      if (!item) return;
      const cat = item.dataset.category;
      this.setCategoryFilter(cat);
    });

    // Створення нової нотатки
    this.btnNewNoteSidebar.addEventListener("click", () => this.openNewNoteForm());
    this.btnCreateFirstNote.addEventListener("click", () => this.openNewNoteForm());

    // Пошук
    this.searchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.btnClearSearch.style.display = this.searchQuery ? "block" : "none";
      this.renderNotesList();
    });

    this.btnClearSearch.addEventListener("click", () => {
      this.searchInput.value = "";
      this.searchQuery = "";
      this.btnClearSearch.style.display = "none";
      this.renderNotesList();
    });

    // Скидання активного фільтра
    this.btnResetFilter.addEventListener("click", () => {
      this.currentCategoryFilter = "all";
      this.currentTagFilter = null;
      this.activeFilterBadge.style.display = "none";
      this.updateCategoryNavActive();
      this.renderNotesList();
    });

    // Кнопки тулбара перегляду
    this.btnEditNote.addEventListener("click", () => this.openEditNoteForm());
    this.btnDownloadMd.addEventListener("click", () => this.downloadCurrentNoteMd());
    this.btnDeleteNote.addEventListener("click", () => this.deleteActiveNote());

    // Кнопки редактора
    this.btnCancelEdit.addEventListener("click", () => this.cancelEditing());
    this.btnSaveNote.addEventListener("click", () => this.saveNote());
    this.btnToggleRawMode.addEventListener("click", () => this.toggleRawMode());

    // Live preview при введенні в textarea
    this.editContent.addEventListener("input", () => this.updateLivePreview());

    // Кнопки швидкого форматування
    document.querySelectorAll(".btn-tool").forEach(btn => {
      btn.addEventListener("click", () => this.applyFormatTool(btn));
    });

    // Селектори зі статусом і типом
    this.editStatusSelect.addEventListener("change", (e) => {
      if (e.target.value === "__custom__") {
        this.editStatusCustom.style.display = "block";
        this.editStatusCustom.focus();
      } else {
        this.editStatusCustom.style.display = "none";
      }
    });

    this.editTypeSelect.addEventListener("change", (e) => {
      if (e.target.value === "__custom__") {
        this.editTypeCustom.style.display = "block";
        this.editTypeCustom.focus();
      } else {
        this.editTypeCustom.style.display = "none";
      }
    });

    // Експорт та імпорт
    this.btnExportJson.addEventListener("click", () => this.exportAllNotesJson());
    this.fileImportInput.addEventListener("change", (e) => this.handleFileImport(e));
    this.btnResetDemo.addEventListener("click", () => {
      if (confirm("Скинути всі нотатки до початкових прикладів? Усі поточні зміни будуть замінені.")) {
        this.notes = StorageManager.resetToDemo();
        this.activeNoteId = this.notes[0]?.id || null;
        this.renderAll();
        this.showToast("Початкові приклади відновлено");
      }
    });

    // Клік по вікі-посиланнях у вмісті
    document.addEventListener("click", (e) => {
      const wikilink = e.target.closest(".wikilink");
      if (wikilink) {
        e.preventDefault();
        const targetTitle = decodeURIComponent(wikilink.dataset.target);
        this.handleWikilinkClick(targetTitle);
      }
    });
  }

  loadNotes() {
    this.notes = StorageManager.getNotes();
    if (this.notes.length > 0 && !this.activeNoteId) {
      this.activeNoteId = this.notes[0].id;
    }
    this.renderAll();
  }

  renderAll() {
    this.updateCounters();
    this.renderTagsCloud();
    this.renderNotesList();
    this.renderActiveNote();
  }

  updateCounters() {
    const counts = { all: this.notes.length, Inbox: 0, Projects: 0, Areas: 0, Resources: 0, Archives: 0 };
    this.notes.forEach(n => {
      const cat = n.category || "Inbox";
      if (counts[cat] !== undefined) counts[cat]++;
    });

    this.countAll.textContent = counts.all;
    this.countInbox.textContent = counts.Inbox;
    this.countProjects.textContent = counts.Projects;
    this.countAreas.textContent = counts.Areas;
    this.countResources.textContent = counts.Resources;
    this.countArchives.textContent = counts.Archives;
  }

  renderTagsCloud() {
    const tagMap = new Map();
    this.notes.forEach(note => {
      if (Array.isArray(note.tags)) {
        note.tags.forEach(t => {
          const clean = t.trim();
          if (clean) tagMap.set(clean, (tagMap.get(clean) || 0) + 1);
        });
      }
    });

    this.tagsCloud.innerHTML = "";
    if (tagMap.size === 0) {
      this.tagsCloud.innerHTML = '<span style="font-size:0.75rem; color:var(--text-dim);">Немає тегів</span>';
      return;
    }

    const sortedTags = Array.from(tagMap.entries()).sort((a, b) => b[1] - a[1]);
    sortedTags.forEach(([tag, count]) => {
      const pill = document.createElement("span");
      pill.className = `tag-pill ${this.currentTagFilter === tag ? "active" : ""}`;
      pill.textContent = `#${tag} (${count})`;
      pill.addEventListener("click", () => {
        if (this.currentTagFilter === tag) {
          this.currentTagFilter = null;
        } else {
          this.currentTagFilter = tag;
        }
        this.renderAll();
      });
      this.tagsCloud.appendChild(pill);
    });
  }

  setCategoryFilter(category) {
    this.currentCategoryFilter = category;
    this.currentTagFilter = null;
    this.updateCategoryNavActive();
    this.renderNotesList();
  }

  updateCategoryNavActive() {
    document.querySelectorAll(".nav-item").forEach(item => {
      if (item.dataset.category === this.currentCategoryFilter && !this.currentTagFilter) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    if (this.currentCategoryFilter !== "all" || this.currentTagFilter) {
      this.activeFilterBadge.style.display = "flex";
      let filterDesc = [];
      if (this.currentCategoryFilter !== "all") filterDesc.push(`Категорія: ${this.currentCategoryFilter}`);
      if (this.currentTagFilter) filterDesc.push(`Тег: #${this.currentTagFilter}`);
      this.activeFilterText.textContent = filterDesc.join(" | ");
    } else {
      this.activeFilterBadge.style.display = "none";
    }
  }

  getFilteredNotes() {
    return this.notes.filter(note => {
      // Фільтр за категорією
      if (this.currentCategoryFilter !== "all" && note.category !== this.currentCategoryFilter) {
        return false;
      }
      // Фільтр за тегом
      if (this.currentTagFilter && (!note.tags || !note.tags.includes(this.currentTagFilter))) {
        return false;
      }
      // Пошуковий рядок
      if (this.searchQuery) {
        const titleMatch = (note.title || "").toLowerCase().includes(this.searchQuery);
        const contentMatch = (note.content || "").toLowerCase().includes(this.searchQuery);
        const tagsMatch = Array.isArray(note.tags) && note.tags.some(t => t.toLowerCase().includes(this.searchQuery));
        if (!titleMatch && !contentMatch && !tagsMatch) return false;
      }
      return true;
    }).sort((a, b) => new Date(b.updated || b.created || 0) - new Date(a.updated || a.created || 0));
  }

  renderNotesList() {
    const filtered = this.getFilteredNotes();
    this.notesListContainer.innerHTML = "";

    if (filtered.length === 0) {
      this.notesListContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-dim); font-size: 0.85rem;">
          Нотаток не знайдено
        </div>`;
      return;
    }

    filtered.forEach(note => {
      const card = document.createElement("div");
      card.className = `note-card ${note.id === this.activeNoteId ? "active" : ""}`;
      card.dataset.id = note.id;

      // Очищення snippet від markdown синтаксису
      const cleanSnippet = (note.content || "")
        .replace(/#+\s/g, "")
        .replace(/\[\[(.*?)\]\]/g, "$1")
        .replace(/```[\s\S]*?```/g, "")
        .replace(/`([^`]+)`/g, "$1")
        .trim();

      const updatedDate = note.updated ? new Date(note.updated).toLocaleDateString("uk-UA", { day: "numeric", month: "short" }) : "";

      card.innerHTML = `
        <div class="note-card-title">${this.escapeHtml(note.title || "Без назви")}</div>
        <div class="note-card-meta">
          <span class="badge badge-para" data-para="${note.category || "Inbox"}">${note.category || "Inbox"}</span>
          <span class="badge badge-status" data-status="${note.status || "Чернетка"}">${note.status || "Чернетка"}</span>
        </div>
        <div class="note-card-snippet">${this.escapeHtml(cleanSnippet) || "Немає вмісту..."}</div>
        <div class="note-card-footer">
          <span>${(note.tags || []).slice(0, 2).map(t => "#" + t).join(" ")}</span>
          <time>${updatedDate}</time>
        </div>
      `;

      card.addEventListener("click", () => {
        this.selectNote(note.id);
      });

      this.notesListContainer.appendChild(card);
    });
  }

  selectNote(noteId) {
    this.activeNoteId = noteId;
    this.isEditing = false;
    this.renderNotesList();
    this.renderActiveNote();
  }

  renderActiveNote() {
    if (this.isEditing) {
      this.emptyState.style.display = "none";
      this.noteViewer.style.display = "none";
      this.noteEditor.style.display = "flex";
      return;
    }

    const note = this.notes.find(n => n.id === this.activeNoteId);

    if (!note) {
      this.emptyState.style.display = "flex";
      this.noteViewer.style.display = "none";
      this.noteEditor.style.display = "none";
      return;
    }

    this.emptyState.style.display = "none";
    this.noteEditor.style.display = "none";
    this.noteViewer.style.display = "flex";

    // Метадані
    this.viewTitle.textContent = note.title || "Без назви";
    this.viewCategoryBadge.textContent = note.category || "Inbox";
    this.viewCategoryBadge.dataset.para = note.category || "Inbox";

    this.viewStatusBadge.textContent = note.status || "Чернетка";
    this.viewStatusBadge.dataset.status = note.status || "Чернетка";

    this.viewTypeBadge.textContent = note.type || "Конспект";

    const formatDateTime = (iso) => {
      if (!iso) return "—";
      try {
        const d = new Date(iso);
        return d.toLocaleString("uk-UA", { dateStyle: "medium", timeStyle: "short" });
      } catch (e) {
        return iso;
      }
    };

    this.viewCreated.textContent = formatDateTime(note.created);
    this.viewUpdated.textContent = formatDateTime(note.updated);

    // Теги
    this.viewTagsContainer.innerHTML = "";
    if (Array.isArray(note.tags) && note.tags.length > 0) {
      note.tags.forEach(t => {
        const chip = document.createElement("span");
        chip.className = "view-tag-chip";
        chip.textContent = `#${t}`;
        this.viewTagsContainer.appendChild(chip);
      });
    }

    // Рендеринг вмісту Markdown
    const allTitles = this.notes.map(n => n.title);
    this.viewMarkdownBody.innerHTML = MarkdownParser.render(note.content, allTitles);

    // Обчислення зв'язків: Вихідні посилання та Backlinks
    this.renderLinks(note);
  }

  renderLinks(currentNote) {
    // 1. Вихідні посилання (Outgoing links)
    const outgoingTitles = MarkdownParser.extractWikilinks(currentNote.content);
    this.outgoingCount.textContent = `(${outgoingTitles.length})`;
    this.outgoingLinksList.innerHTML = "";

    if (outgoingTitles.length === 0) {
      this.outgoingLinksList.innerHTML = '<div class="links-empty">Немає вихідних посилань</div>';
    } else {
      outgoingTitles.forEach(title => {
        const targetNote = this.notes.find(n => n.title.toLowerCase() === title.toLowerCase());
        const card = document.createElement("div");
        card.className = "link-card";
        if (targetNote) {
          card.innerHTML = `
            <span><strong>[[${this.escapeHtml(targetNote.title)}]]</strong></span>
            <span class="badge badge-para" data-para="${targetNote.category}">${targetNote.category}</span>
          `;
          card.addEventListener("click", () => this.selectNote(targetNote.id));
        } else {
          card.innerHTML = `
            <span><strong style="color: #f87171;">[[${this.escapeHtml(title)}]]</strong> <small style="color: var(--text-dim);">(створити)</small></span>
            <span class="badge" style="background: rgba(248,113,113,0.15); color: #f87171;">Не існує</span>
          `;
          card.addEventListener("click", () => this.handleWikilinkClick(title));
        }
        this.outgoingLinksList.appendChild(card);
      });
    }

    // 2. Зворотні посилання (Backlinks) — нотатки, які посилаються на currentNote
    const currentTitleLower = (currentNote.title || "").toLowerCase();
    const backlinks = this.notes.filter(otherNote => {
      if (otherNote.id === currentNote.id) return false;
      const links = MarkdownParser.extractWikilinks(otherNote.content);
      return links.some(l => l.toLowerCase() === currentTitleLower);
    });

    this.backlinksCount.textContent = `(${backlinks.length})`;
    this.backlinksList.innerHTML = "";

    if (backlinks.length === 0) {
      this.backlinksList.innerHTML = '<div class="links-empty">Немає зворотних згадок цієї нотатки</div>';
    } else {
      backlinks.forEach(note => {
        const card = document.createElement("div");
        card.className = "link-card";
        card.innerHTML = `
          <span><strong>[[${this.escapeHtml(note.title)}]]</strong></span>
          <span class="badge badge-para" data-para="${note.category}">${note.category}</span>
        `;
        card.addEventListener("click", () => this.selectNote(note.id));
        this.backlinksList.appendChild(card);
      });
    }
  }

  // ===========================================================================
  // Форма редагування та створення нотатки
  // ===========================================================================

  openNewNoteForm(prefilledTitle = "") {
    this.isEditing = true;
    this.isRawMode = false;
    this.editorModeLabel.textContent = "Створення нової нотатки";

    const defaultCategory = (this.currentCategoryFilter !== "all") ? this.currentCategoryFilter : "Inbox";

    this.editTitle.value = prefilledTitle || "";
    this.editCategory.value = defaultCategory;

    this.editStatusSelect.value = "Чернетка";
    this.editStatusCustom.style.display = "none";
    this.editStatusCustom.value = "";

    this.editTypeSelect.value = "Конспект";
    this.editTypeCustom.style.display = "none";
    this.editTypeCustom.value = "";

    this.editTags.value = this.currentTagFilter ? this.currentTagFilter : "навчання";
    this.editContent.value = `## Огляд\nКороткий опис теми.\n\n## Основний зміст\n- Ключовий пункт 1\n- Ключовий пункт 2\n\n## Зв'язки\n- [[Назва іншої нотатки]]`;

    this.updateLivePreview();
    this.renderActiveNote();
    this.editTitle.focus();
  }

  openEditNoteForm() {
    const note = this.notes.find(n => n.id === this.activeNoteId);
    if (!note) return;

    this.isEditing = true;
    this.isRawMode = false;
    this.editorModeLabel.textContent = `Редагування: ${note.title}`;

    this.editTitle.value = note.title || "";
    this.editCategory.value = note.category || "Inbox";

    // Статус
    const standardStatuses = ["Чернетка", "В процесі", "Завершено", "В архіві"];
    if (standardStatuses.includes(note.status)) {
      this.editStatusSelect.value = note.status;
      this.editStatusCustom.style.display = "none";
      this.editStatusCustom.value = "";
    } else {
      this.editStatusSelect.value = "__custom__";
      this.editStatusCustom.style.display = "block";
      this.editStatusCustom.value = note.status || "";
    }

    // Тип
    const standardTypes = ["Конспект", "Поняття", "Література", "Завдання", "Резюме"];
    if (standardTypes.includes(note.type)) {
      this.editTypeSelect.value = note.type;
      this.editTypeCustom.style.display = "none";
      this.editTypeCustom.value = "";
    } else {
      this.editTypeSelect.value = "__custom__";
      this.editTypeCustom.style.display = "block";
      this.editTypeCustom.value = note.type || "";
    }

    this.editTags.value = Array.isArray(note.tags) ? note.tags.join(", ") : "";
    this.editContent.value = note.content || "";

    this.updateLivePreview();
    this.renderActiveNote();
  }

  updateLivePreview() {
    const allTitles = this.notes.map(n => n.title);
    this.editorLivePreview.innerHTML = MarkdownParser.render(this.editContent.value, allTitles);
  }

  applyFormatTool(button) {
    const wrap = button.dataset.wrap;
    const prefix = button.dataset.prefix;
    const textarea = this.editContent;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end);

    if (wrap) {
      let before = wrap;
      let after = wrap;
      if (wrap.includes("|")) {
        const parts = wrap.split("|");
        before = parts[0];
        after = parts[1];
      }
      const replacement = before + (selected || "текст") + after;
      textarea.setRangeText(replacement, start, end, "select");
    } else if (prefix) {
      textarea.setRangeText(prefix + selected, start, end, "end");
    }

    textarea.focus();
    this.updateLivePreview();
  }

  toggleRawMode() {
    this.isRawMode = !this.isRawMode;
    if (this.isRawMode) {
      // Збираємо значення з полів форми в YAML frontmatter + markdown
      const tempNote = this.collectFormData();
      this.rawYamlContent.value = YamlFrontmatter.stringify(tempNote);
      this.noteForm.style.display = "none";
      this.rawYamlEditorContainer.style.display = "flex";
      this.btnToggleRawMode.textContent = "← До форми";
    } else {
      // Парсимо з rawYamlContent назад у поля форми
      const { metadata, content } = YamlFrontmatter.parse(this.rawYamlContent.value);
      if (metadata.title) this.editTitle.value = metadata.title;
      if (metadata.category) this.editCategory.value = metadata.category;
      if (metadata.status) {
        if (["Чернетка", "В процесі", "Завершено", "В архіві"].includes(metadata.status)) {
          this.editStatusSelect.value = metadata.status;
          this.editStatusCustom.style.display = "none";
        } else {
          this.editStatusSelect.value = "__custom__";
          this.editStatusCustom.style.display = "block";
          this.editStatusCustom.value = metadata.status;
        }
      }
      if (metadata.type) {
        if (["Конспект", "Поняття", "Література", "Завдання", "Резюме"].includes(metadata.type)) {
          this.editTypeSelect.value = metadata.type;
          this.editTypeCustom.style.display = "none";
        } else {
          this.editTypeSelect.value = "__custom__";
          this.editTypeCustom.style.display = "block";
          this.editTypeCustom.value = metadata.type;
        }
      }
      if (metadata.tags) {
        this.editTags.value = Array.isArray(metadata.tags) ? metadata.tags.join(", ") : metadata.tags;
      }
      this.editContent.value = content;
      this.updateLivePreview();

      this.noteForm.style.display = "flex";
      this.rawYamlEditorContainer.style.display = "none";
      this.btnToggleRawMode.textContent = "YAML / Форма";
    }
  }

  collectFormData() {
    let status = this.editStatusSelect.value;
    if (status === "__custom__") {
      status = this.editStatusCustom.value.trim() || "Чернетка";
    }

    let type = this.editTypeSelect.value;
    if (type === "__custom__") {
      type = this.editTypeCustom.value.trim() || "Конспект";
    }

    const tags = this.editTags.value
      .split(",")
      .map(t => t.trim().replace(/^#/, ""))
      .filter(Boolean);

    const nowIso = new Date().toISOString();

    const existingNote = this.notes.find(n => n.id === this.activeNoteId);

    return {
      id: existingNote ? existingNote.id : `note_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      title: this.editTitle.value.trim() || "Без назви",
      category: this.editCategory.value,
      status: status,
      type: type,
      tags: tags,
      content: this.editContent.value,
      created: existingNote ? existingNote.created : nowIso,
      updated: nowIso
    };
  }

  saveNote() {
    let savedNote;

    if (this.isRawMode) {
      const { metadata, content } = YamlFrontmatter.parse(this.rawYamlContent.value);
      const existingNote = this.notes.find(n => n.id === this.activeNoteId);
      const nowIso = new Date().toISOString();

      savedNote = {
        id: existingNote ? existingNote.id : `note_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        title: metadata.title || "Без назви",
        created: metadata.created || (existingNote ? existingNote.created : nowIso),
        updated: nowIso,
        tags: Array.isArray(metadata.tags) ? metadata.tags : (typeof metadata.tags === "string" ? metadata.tags.split(",").map(s => s.trim()) : []),
        status: metadata.status || "Чернетка",
        type: metadata.type || "Конспект",
        category: metadata.category || "Inbox",
        content: content || ""
      };
    } else {
      if (!this.editTitle.value.trim()) {
        alert("Будь ласка, введіть заголовок нотатки");
        this.editTitle.focus();
        return;
      }
      savedNote = this.collectFormData();
    }

    const index = this.notes.findIndex(n => n.id === savedNote.id);
    if (index !== -1) {
      this.notes[index] = savedNote;
    } else {
      this.notes.unshift(savedNote);
    }

    StorageManager.saveNotes(this.notes);
    this.activeNoteId = savedNote.id;
    this.isEditing = false;
    this.isRawMode = false;

    // Відновлення вигляду форми
    this.noteForm.style.display = "flex";
    this.rawYamlEditorContainer.style.display = "none";
    this.btnToggleRawMode.textContent = "YAML / Форма";

    this.renderAll();
    this.showToast(`Нотатку "${savedNote.title}" збережено!`);
  }

  cancelEditing() {
    this.isEditing = false;
    this.isRawMode = false;
    this.noteForm.style.display = "flex";
    this.rawYamlEditorContainer.style.display = "none";
    this.btnToggleRawMode.textContent = "YAML / Форма";
    this.renderActiveNote();
  }

  deleteActiveNote() {
    const note = this.notes.find(n => n.id === this.activeNoteId);
    if (!note) return;

    if (confirm(`Ви дійсно бажаєте видалити нотатку "${note.title}"?`)) {
      this.notes = this.notes.filter(n => n.id !== note.id);
      StorageManager.saveNotes(this.notes);
      this.activeNoteId = this.notes[0]?.id || null;
      this.renderAll();
      this.showToast(`Нотатку видалено`);
    }
  }

  handleWikilinkClick(targetTitle) {
    const existing = this.notes.find(n => n.title.toLowerCase() === targetTitle.toLowerCase());
    if (existing) {
      this.selectNote(existing.id);
    } else {
      if (confirm(`Нотатки з назвою "${targetTitle}" ще немає.\nБажаєте створити її зараз?`)) {
        this.openNewNoteForm(targetTitle);
      }
    }
  }

  downloadCurrentNoteMd() {
    const note = this.notes.find(n => n.id === this.activeNoteId);
    if (!note) return;

    const mdFull = YamlFrontmatter.stringify(note);
    const filename = `${this.slugify(note.title || "note")}.md`;

    const blob = new Blob([mdFull], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast(`Завантажено ${filename}`);
  }

  exportAllNotesJson() {
    const dataStr = JSON.stringify(this.notes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `second-brain-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast("Усі нотатки експортовано у JSON");
  }

  handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      try {
        if (file.name.endsWith(".json")) {
          const parsed = JSON.parse(content);
          if (Array.isArray(parsed)) {
            // Об'єднуємо нотатки
            let addedCount = 0;
            parsed.forEach(importedNote => {
              const existingIdx = this.notes.findIndex(n => n.id === importedNote.id || n.title === importedNote.title);
              if (existingIdx !== -1) {
                this.notes[existingIdx] = importedNote;
              } else {
                this.notes.push(importedNote);
                addedCount++;
              }
            });
            StorageManager.saveNotes(this.notes);
            this.renderAll();
            this.showToast(`Імпортовано ${parsed.length} нотаток`);
          }
        } else if (file.name.endsWith(".md")) {
          const { metadata, content: mdBody } = YamlFrontmatter.parse(content);
          const newNote = {
            id: `note_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            title: metadata.title || file.name.replace(/\.md$/, ""),
            created: metadata.created || new Date().toISOString(),
            updated: metadata.updated || new Date().toISOString(),
            tags: Array.isArray(metadata.tags) ? metadata.tags : [],
            status: metadata.status || "Чернетка",
            type: metadata.type || "Конспект",
            category: metadata.category || "Inbox",
            content: mdBody
          };
          this.notes.unshift(newNote);
          StorageManager.saveNotes(this.notes);
          this.activeNoteId = newNote.id;
          this.renderAll();
          this.showToast(`Імпортовано нотатку "${newNote.title}"`);
        }
      } catch (err) {
        alert("Помилка читання файлу: " + err.message);
      }
      this.fileImportInput.value = "";
    };
    reader.readAsText(file);
  }

  showToast(message) {
    this.toast.textContent = message;
    this.toast.classList.add("show");
    setTimeout(() => {
      this.toast.classList.remove("show");
    }, 2800);
  }

  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\u0400-\u04FF\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "") || "note";
  }

  escapeHtml(text) {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Запуск застосунку після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  window.secondBrainApp = new App();
});
