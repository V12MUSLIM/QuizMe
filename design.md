# CLAYMORPHISM DESIGN SYSTEM — QUIZ APP
> AI-consumable. Tailwind CSS **v4** only. No `tailwind.config.js`. CSS-first `@theme` tokens. OKLCH colors. `light-dark()` for dark mode. Icons via `lucide-react`. No arbitrary `dark:` prefixes.

---

## TAILWIND v4 KEY DIFFERENCES FROM v3

| Concept | v3 | v4 (use this) |
|---|---|---|
| Config file | `tailwind.config.js` | `@theme {}` block in CSS |
| Import | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| Dark mode | `dark:bg-gray-900` class prefix | `light-dark()` CSS function or `@variant dark` |
| Custom colors | `extend.colors` in JS | `--color-*` in `@theme {}` |
| Arbitrary values | `bg-[#A78BFA]` (still works) | Prefer named tokens via `@theme` |
| Color format | hex / hsl | **OKLCH preferred** (wide-gamut P3) |
| `tailwind.config.js` | Required | **Not needed** (delete it) |
| Font config | `extend.fontFamily` in JS | `--font-*` in `@theme {}` |
| Gradients | `bg-gradient-to-r` | `bg-linear-to-r` (renamed) |
| Border default | gray-200 | currentColor |
| Ring default | 3px blue | 1px currentColor |

---

## SETUP — globals.css

This is the single source of truth. Paste into your main CSS entry file.

```css
@import "tailwindcss";
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap");

/* ─── DARK MODE VARIANT ─────────────────────────────────── */
/* Activated by adding class="dark" to <html> */
@custom-variant dark (&:where(.dark, .dark *));

/* ─── DESIGN TOKENS ─────────────────────────────────────── */
@theme {
  /* Font */
  --font-sans: "Nunito", sans-serif;

  /* Surfaces — light-dark(light-value, dark-value) */
  --color-canvas:          light-dark(oklch(0.94 0.03 285),         oklch(0.16 0.04 285));
  --color-surface:         light-dark(oklch(1.00 0.00 0),           oklch(0.20 0.05 285));
  --color-surface-2:       light-dark(oklch(0.97 0.02 285),         oklch(0.23 0.05 285));

  /* Violet — primary brand */
  --color-violet-clay:     light-dark(oklch(0.72 0.18 293),         oklch(0.55 0.22 293));
  --color-violet-shadow:   light-dark(oklch(0.55 0.22 293),         oklch(0.40 0.20 293));
  --color-violet-muted:    light-dark(oklch(0.90 0.07 293),         oklch(0.28 0.10 293));
  --color-violet-text:     light-dark(oklch(0.35 0.18 293),         oklch(0.85 0.08 293));

  /* Coral — wrong answer / danger */
  --color-coral-clay:      light-dark(oklch(0.72 0.19 20),          oklch(0.54 0.22 20));
  --color-coral-shadow:    light-dark(oklch(0.55 0.22 20),          oklch(0.38 0.20 20));
  --color-coral-muted:     light-dark(oklch(0.94 0.05 20),          oklch(0.25 0.08 20));

  /* Mint — correct answer / success */
  --color-mint-clay:       light-dark(oklch(0.82 0.14 162),         oklch(0.55 0.16 162));
  --color-mint-shadow:     light-dark(oklch(0.60 0.16 162),         oklch(0.38 0.14 162));
  --color-mint-muted:      light-dark(oklch(0.94 0.05 162),         oklch(0.22 0.07 162));
  --color-mint-text:       light-dark(oklch(0.30 0.14 162),         oklch(0.92 0.06 162));

  /* Amber — timer / warning */
  --color-amber-clay:      light-dark(oklch(0.88 0.17 85),          oklch(0.70 0.18 85));
  --color-amber-shadow:    light-dark(oklch(0.70 0.18 85),          oklch(0.50 0.16 85));
  --color-amber-text:      light-dark(oklch(0.32 0.12 85),          oklch(0.97 0.02 85));

  /* Sky — hints / info */
  --color-sky-clay:        light-dark(oklch(0.80 0.12 220),         oklch(0.52 0.16 220));
  --color-sky-shadow:      light-dark(oklch(0.55 0.16 220),         oklch(0.36 0.14 220));

  /* Slate — neutral / disabled */
  --color-slate-clay:      light-dark(oklch(0.88 0.01 255),         oklch(0.38 0.03 255));
  --color-slate-shadow:    light-dark(oklch(0.72 0.02 255),         oklch(0.28 0.03 255));

  /* Text */
  --color-text-primary:    light-dark(oklch(0.18 0.06 285),         oklch(0.94 0.03 285));
  --color-text-secondary:  light-dark(oklch(0.48 0.06 285),         oklch(0.72 0.05 285));
  --color-text-muted:      light-dark(oklch(0.68 0.04 285),         oklch(0.50 0.04 285));

  /* Borders */
  --color-border-soft:     light-dark(oklch(0.90 0.04 285 / 0.8),   oklch(1 0 0 / 0.08));
  --color-border-accent:   light-dark(oklch(0.80 0.10 293),         oklch(0.42 0.16 293));

  /* Easing */
  --ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-snappy:  cubic-bezier(0.2, 0, 0, 1);
}

/* ─── BASE STYLES ───────────────────────────────────────── */
@layer base {
  html {
    color-scheme: light dark;
    font-family: var(--font-sans);
  }
  .dark {
    color-scheme: dark;
  }
  body {
    background-color: var(--color-canvas);
    color: var(--color-text-primary);
  }
}
```

> **`light-dark()` note**: Requires `color-scheme: light dark` on `:root` / `html` to activate. Adding `.dark { color-scheme: dark }` switches all `light-dark()` values to their dark variant. No `dark:` utility prefix classes needed anywhere.

---

## COLOR TOKEN USAGE

All `@theme` tokens auto-generate Tailwind utility classes:

```
bg-violet-clay       → background-color: var(--color-violet-clay)
text-text-primary    → color: var(--color-text-primary)
border-border-soft   → border-color: var(--color-border-soft)
shadow-violet-shadow → (not auto) — use in shadow-[0_6px_0px_var(--color-violet-shadow)]
```

| Token | Light | Dark | Usage |
|---|---|---|---|
| `canvas` | Pale lavender | Deep purple-navy | Page background |
| `surface` | White | Dark purple | Card base |
| `surface-2` | Near-white lavender | Deeper purple | Inputs, inset |
| `violet-clay` | Soft violet | Rich violet | Primary CTA, active option |
| `violet-shadow` | Deep violet | Deeper violet | Clay offset shadow |
| `violet-muted` | Light violet tint | Dark violet tint | Pill bg, hover bg |
| `coral-clay` | Warm coral | Deep coral | Wrong answer, danger |
| `mint-clay` | Soft mint | Rich mint | Correct answer |
| `amber-clay` | Warm amber | Deep amber | Timer chip |
| `sky-clay` | Sky blue | Rich sky | Hint popover |
| `slate-clay` | Light gray | Mid gray | Disabled |
| `text-primary` | Dark navy | Near-white | Body copy |
| `text-secondary` | Purple-gray | Light purple | Labels |
| `text-muted` | Muted gray | Dim gray | Placeholders |

---

## CLAY SHADOW SYSTEM

Clay depth comes from a **solid offset shadow** (zero blur, one-step-darker color). Always combine with `translate-y` on press to simulate physical depression.

### Pattern
```
shadow-[0_{N}px_0px_var(--color-{name}-shadow)]
```

### Sizes
```
xs  → 0_2px_0px
sm  → 0_4px_0px
md  → 0_6px_0px
lg  → 0_8px_0px
xl  → 0_12px_0px
```

### Per-color shadow values
```
Violet: shadow-[0_6px_0px_var(--color-violet-shadow)]
Coral:  shadow-[0_6px_0px_var(--color-coral-shadow)]
Mint:   shadow-[0_6px_0px_var(--color-mint-shadow)]
Amber:  shadow-[0_6px_0px_var(--color-amber-shadow)]
```

### Press state (add to all interactive clay elements)
```
active:shadow-[0_2px_0px_var(--color-violet-shadow)]
active:translate-y-1
transition-[box-shadow,transform]
duration-75
```

### Border (depth definition on all clay surfaces)
```
border border-[var(--color-border-soft)]
```

---

## BORDER RADIUS SCALE

| Name | Class | Used on |
|---|---|---|
| pill | `rounded-full` | Chips, badges, timer, score |
| button | `rounded-xl` | Buttons, option pills |
| card | `rounded-2xl` | Secondary cards, stat chips |
| modal | `rounded-3xl` | Question card, result screen |

---

## COMPONENT LIBRARY

---

### 1. QUIZ CARD

```
bg-surface
border border-[var(--color-border-soft)]
rounded-3xl
shadow-[0_8px_0px_var(--color-violet-shadow)]
p-8
w-full max-w-xl
```

Question number label:
```
text-xs font-black tracking-widest uppercase
text-[var(--color-violet-text)]
mb-2 flex items-center gap-1.5
```
Lucide: `<HelpCircle size={12} />`

Question text:
```
text-xl font-extrabold leading-snug
text-[var(--color-text-primary)]
mt-4
```

---

### 2. OPTION PILLS

#### Default
```
bg-surface-2
border border-[var(--color-border-soft)]
rounded-xl
shadow-[0_4px_0px_var(--color-violet-shadow)]
px-5 py-4 w-full text-left
flex items-center gap-3
cursor-pointer
hover:bg-violet-muted
hover:shadow-[0_6px_0px_var(--color-violet-shadow)]
active:shadow-[0_2px_0px_var(--color-violet-shadow)]
active:translate-y-0.5
transition-[box-shadow,transform,background-color]
duration-75
```

Letter bubble (A/B/C/D):
```
size-8 rounded-full shrink-0
bg-violet-muted
flex items-center justify-center
text-xs font-black
text-[var(--color-violet-text)]
```

Option text:
```
text-sm font-semibold
text-[var(--color-text-primary)]
```

#### Selected (pre-submit)
```
bg-violet-muted
border border-violet-clay
shadow-[0_4px_0px_var(--color-violet-shadow)]
```
Right icon: `<CheckCircle2 size={18} className="text-violet-clay ml-auto" />`

#### Correct
```
bg-mint-muted
border border-mint-clay
shadow-[0_4px_0px_var(--color-mint-shadow)]
```
Letter bubble: `bg-mint-clay text-white`
Right icon: `<CheckCircle2 size={18} className="text-mint-clay ml-auto" />`

#### Wrong
```
bg-coral-muted
border border-coral-clay
shadow-[0_4px_0px_var(--color-coral-shadow)]
```
Letter bubble: `bg-coral-clay text-white`
Right icon: `<XCircle size={18} className="text-coral-clay ml-auto" />`

#### Disabled (other options after answer revealed)
```
opacity-50 cursor-not-allowed pointer-events-none
shadow-none translate-y-0
bg-slate-clay
border border-[var(--color-border-soft)]
```

---

### 3. PRIMARY BUTTON

```
bg-violet-clay
border border-white/30
rounded-xl
shadow-[0_6px_0px_var(--color-violet-shadow)]
px-8 py-3.5
text-white font-black text-sm tracking-wide
flex items-center justify-center gap-2
active:shadow-[0_2px_0px_var(--color-violet-shadow)]
active:translate-y-1
hover:brightness-110
transition-[box-shadow,transform,filter]
duration-75
disabled:opacity-40 disabled:cursor-not-allowed
disabled:shadow-none disabled:translate-y-0
```

Icons: Submit `<Send size={16} />` · Next `<ArrowRight size={16} />` · Start `<Play size={16} />`

---

### 4. SECONDARY BUTTON

```
bg-surface-2
border border-[var(--color-border-accent)]
rounded-xl
shadow-[0_4px_0px_var(--color-violet-shadow)]
px-6 py-3
text-[var(--color-violet-text)] font-bold text-sm
flex items-center justify-center gap-2
hover:bg-violet-muted
active:shadow-[0_2px_0px_var(--color-violet-shadow)]
active:translate-y-0.5
transition-[box-shadow,transform,background-color]
duration-75
```

Icons: Skip `<SkipForward size={16} />` · Hint `<Lightbulb size={16} />` · Back `<ArrowLeft size={16} />`

---

### 5. DANGER BUTTON

```
bg-coral-clay
border border-white/30
rounded-xl
shadow-[0_4px_0px_var(--color-coral-shadow)]
px-6 py-3
text-white font-bold text-sm
flex items-center justify-center gap-2
active:shadow-[0_2px_0px_var(--color-coral-shadow)]
active:translate-y-0.5
hover:brightness-110
transition-[box-shadow,transform,filter]
duration-75
```

Icons: Quit `<LogOut size={16} />` · Restart `<RotateCcw size={16} />`

---

### 6. PROGRESS BAR

Container:
```
w-full h-4
bg-violet-muted
rounded-full
border border-[var(--color-border-soft)]
shadow-[inset_0_2px_4px_rgb(0_0_0/0.08)]
overflow-hidden
```

Fill (inline style drives width: `style={{ width: '60%' }}`):
```
h-full rounded-full
bg-linear-to-r from-violet-clay to-violet-shadow
transition-[width] duration-500
ease-[var(--ease-snappy)]
```

> **v4**: Use `bg-linear-to-r` not `bg-gradient-to-r`.

Label:
```
text-xs font-black text-[var(--color-violet-text)]
mb-1 flex items-center gap-1
```
Lucide: `<Target size={12} />`

---

### 7. TIMER CHIP

#### Normal (>50% time)
```
bg-amber-clay
border border-white/40
rounded-full
shadow-[0_4px_0px_var(--color-amber-shadow)]
px-4 py-1.5
flex items-center gap-1.5
text-[var(--color-amber-text)] font-black text-sm
```
Lucide: `<Clock size={14} />`

#### Warning (25–50%)
```
bg-coral-clay shadow-[0_4px_0px_var(--color-coral-shadow)] text-white
```
Lucide: `<Clock size={14} className="animate-pulse" />`

#### Critical (<25%)
```
bg-coral-clay shadow-[0_4px_0px_var(--color-coral-shadow)]
text-white animate-pulse
```
Lucide: `<AlarmClock size={14} />`

---

### 8. SCORE BADGE

#### Inline (header)
```
bg-mint-clay
border border-white/40
rounded-full
shadow-[0_3px_0px_var(--color-mint-shadow)]
px-3 py-1
flex items-center gap-1.5
text-[var(--color-mint-text)] font-black text-xs
```
Lucide: `<Star size={12} className="fill-current" />`

#### Hero (result screen)
```
bg-mint-clay
border-4 border-white/50
rounded-3xl
shadow-[0_10px_0px_var(--color-mint-shadow)]
px-10 py-6
flex flex-col items-center gap-2 text-white
```
Number: `text-6xl font-black`
Label: `text-sm font-bold tracking-widest uppercase opacity-70`
Lucide: `<Trophy size={32} className="fill-white/80" />` above number

---

### 9. RESULT SCREEN CARD

```
bg-surface
border border-[var(--color-border-soft)]
rounded-3xl
shadow-[0_12px_0px_var(--color-violet-shadow)]
p-8
flex flex-col items-center gap-6
max-w-md w-full mx-auto
```

Result tier mapping:

| Score | Badge tokens | Icon | Heading |
|---|---|---|---|
| 90–100% | `mint-clay` / `mint-shadow` | `<Trophy size={32} />` | "Perfect Score!" |
| 70–89% | `violet-clay` / `violet-shadow` | `<Award size={32} />` | "Well Done!" |
| 50–69% | `amber-clay` / `amber-shadow` | `<ThumbsUp size={32} />` | "Good Effort!" |
| <50% | `coral-clay` / `coral-shadow` | `<RefreshCw size={32} />` | "Try Again!" |

Stats row: `flex gap-4 w-full justify-center flex-wrap`

Each stat chip:
```
flex flex-col items-center gap-1
bg-surface-2
border border-[var(--color-border-soft)]
rounded-2xl
shadow-[0_4px_0px_var(--color-violet-shadow)]
px-5 py-3 min-w-20
```
Number: `text-2xl font-black text-[var(--color-text-primary)]`
Label: `text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider`
Icons: Correct `<CheckCircle2 size={16} className="text-mint-clay" />` · Wrong `<XCircle size={16} className="text-coral-clay" />` · Skipped `<MinusCircle size={16} className="text-slate-clay" />`

---

### 10. CATEGORY BADGE

```
bg-violet-muted
border border-[var(--color-border-accent)]
rounded-full
px-3 py-1
text-xs font-bold
text-[var(--color-violet-text)]
flex items-center gap-1.5
```
Lucide by category: Science `<Atom size={12} />` · History `<Landmark size={12} />` · Sports `<Dumbbell size={12} />` · Music `<Music size={12} />` · Geography `<Globe size={12} />` · General `<Brain size={12} />`

---

### 11. HINT TOOLTIP

```
bg-amber-clay
border border-white/40
rounded-2xl
shadow-[0_6px_0px_var(--color-amber-shadow)]
p-4 max-w-xs
text-[var(--color-amber-text)] text-sm font-semibold leading-relaxed
```
Lucide: `<Lightbulb size={16} className="fill-current opacity-80 mb-2" />`

---

### 12. TOAST (Feedback Flash)

Position: `fixed bottom-6 left-1/2 -translate-x-1/2 z-50`

Correct:
```
bg-mint-clay border border-white/40
rounded-2xl shadow-[0_6px_0px_var(--color-mint-shadow)]
px-5 py-3 flex items-center gap-3
text-white font-bold text-sm
```
Lucide: `<CheckCircle2 size={20} />`

Incorrect:
```
bg-coral-clay border border-white/30
rounded-2xl shadow-[0_6px_0px_var(--color-coral-shadow)]
px-5 py-3 flex items-center gap-3
text-white font-bold text-sm
```
Lucide: `<XCircle size={20} />`

---

## PAGE LAYOUT TOKENS

Page shell:
```
min-h-screen bg-canvas
flex flex-col items-center justify-center
px-4 py-8 font-sans
```

Quiz header strip:
```
w-full max-w-xl flex items-center justify-between gap-3 mb-6
```
Left: category badge | Center: progress bar `flex-1` | Right: `flex gap-2` (timer + score)

Question + options stack:
```
w-full max-w-xl flex flex-col gap-3
```

Action button row:
```
w-full max-w-xl flex items-center justify-between gap-3 mt-6
```

---

## ELEVATION HIERARCHY

| Level | Shadow | Used on |
|---|---|---|
| 0 — flat | `shadow-none` | Disabled states |
| 1 — raised | `0_3px_0px_<token>` | Inline badges, chips |
| 2 — interactive | `0_4px_0px_<token>` | Option pills |
| 3 — floating | `0_6px_0px_<token>` | Buttons, tooltips, toasts |
| 4 — card | `0_8px_0px_<token>` | Question card |
| 5 — hero | `0_12px_0px_<token>` | Result screen, modals |

---

## LUCIDE-REACT ICON REFERENCE

```
import { IconName } from 'lucide-react'
// use size={N} prop, default strokeWidth is fine
```

| Context | Icon | Size |
|---|---|---|
| Question label | `HelpCircle` | 12 |
| Category: Science | `Atom` | 12 |
| Category: History | `Landmark` | 12 |
| Category: Sports | `Dumbbell` | 12 |
| Category: Music | `Music` | 12 |
| Category: Geography | `Globe` | 12 |
| Category: General | `Brain` | 12 |
| Option: selected | `CheckCircle2` | 18 |
| Option: correct | `CheckCircle2` | 18 |
| Option: wrong | `XCircle` | 18 |
| Progress | `Target` | 12 |
| Timer: normal | `Clock` | 14 |
| Timer: warning | `Clock` (animate-pulse on icon) | 14 |
| Timer: critical | `AlarmClock` (animate-pulse on chip) | 14 |
| Score: inline | `Star` fill-current | 12 |
| Score: hero | `Trophy` fill-white/80 | 32 |
| Result: perfect | `Trophy` | 32 |
| Result: great | `Award` | 32 |
| Result: ok | `ThumbsUp` | 32 |
| Result: retry | `RefreshCw` | 32 |
| Stat: correct | `CheckCircle2` | 16 |
| Stat: wrong | `XCircle` | 16 |
| Stat: skipped | `MinusCircle` | 16 |
| Hint | `Lightbulb` fill-current | 16 |
| Toast: correct | `CheckCircle2` | 20 |
| Toast: wrong | `XCircle` | 20 |
| Button: submit | `Send` | 16 |
| Button: next | `ArrowRight` | 16 |
| Button: start | `Play` | 16 |
| Button: skip | `SkipForward` | 16 |
| Button: back | `ArrowLeft` | 16 |
| Button: quit | `LogOut` | 16 |
| Button: restart | `RotateCcw` | 16 |

---

## DARK MODE SETUP

**globals.css** (already in setup block):
```css
@custom-variant dark (&:where(.dark, .dark *));
```

**React toggle**:
```ts
function setDark(isDark: boolean) {
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
}
```

> Both the class and `colorScheme` must be updated together. The class activates `@custom-variant dark` (Tailwind utilities), while `colorScheme` activates `light-dark()` (CSS tokens in `@theme`).

---

## BROKEN v3 PATTERNS — NEVER USE IN v4

```
❌ @tailwind base / components / utilities  →  @import "tailwindcss"
❌ dark:bg-[...]                            →  light-dark() in @theme or @variant dark in CSS
❌ bg-[#A78BFA] (arbitrary hex)            →  define token in @theme, use bg-violet-clay
❌ tailwind.config.js colors               →  @theme in CSS
❌ bg-gradient-to-r                        →  bg-linear-to-r
❌ text-opacity-50                         →  text-black/50
❌ ring-3 (3px ring)                       →  ring-[3px] (ring now defaults to 1px)
❌ border (gray default)                   →  border-[var(--color-border-soft)]
❌ postcss-import / autoprefixer           →  built-in to v4, remove from config
```

---

## INSTALLATION

```bash
# Vite
npm install tailwindcss @tailwindcss/vite
```

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'
export default { plugins: [tailwindcss()] }
```

```bash
# PostCSS (non-Vite)
npm install tailwindcss @tailwindcss/postcss
```

```js
// postcss.config.js
export default { plugins: { '@tailwindcss/postcss': {} } }
```

No `tailwind.config.js`. No `content` array. v4 auto-detects source files.

---

*End of design.md — Tailwind CSS v4.2 compatible. OKLCH + `light-dark()` throughout. Zero v3 patterns.*
