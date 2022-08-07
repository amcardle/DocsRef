# Markdown

🔗
📃 📄 📑
🛠


## Headers

```md
# This is a heading 1

## This is a heading 2

### This is a heading 3

#### This is a heading 4

##### This is a heading 5

###### This is a heading 6
```

# This is a heading 1

## This is a heading 2

### This is a heading 3

#### This is a heading 4

##### This is a heading 5

###### This is a heading 6

---

## Emphasis

```md
_This text will be italic_
_This will also be italic_
```

_This text will be italic_
_This will also be italic_

```md
**This text will be bold**
**This will also be bold**
```

**This text will be bold**
**This will also be bold**

```md
_You **can** combine them_
```

_You **can** combine them_

---

## Lists

```md
- Item 1
- Item 2
  - Item 2a
  - Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

---

## Images

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

### Resizing images

Example of this above image resized to 100 pixels wide:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

---

## Blockquotes

```md
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961
```

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961

---

## Inline code

```md
Text inside `backticks` on a line will be formatted like code.
```

Text inside `backticks` on a line will be formatted like code.

---

## Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

```md
| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |
```

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

---

```md
| Tables can be justified with a colon | Another example with a long title |
| :----------------------------------- | --------------------------------: |
| because of the `:`                   |           these will be justified |

If you put links in tables, they will work, but if you use Piped Links, the pipe must be escaped with a `\` to prevent it being read as a table element.
```

| Tables can be justified with a colon | Another example with a long title |
| :----------------------------------- | --------------------------------: |
| because of the `:`                   |           these will be justified |

If you put links in tables, they will work, but if you use Piped Links, the pipe must be escaped with a `\` to prevent it being read as a table element.

```md
| First Header                      | Second Header                   |
| --------------------------------- | ------------------------------- |
| [[Format your notes\|Formatting]] | [[Keyboard shortcuts\|hotkeys]] |
```

| First Header                      | Second Header            |
| --------------------------------- | ------------------------ |
| [[Format your notes\|Formatting]] | [[Use hotkeys\|hotkeys]] |

---

## Strikethrough

```md
Any word wrapped with two tildes (like ~~this~~) will appear crossed out.
```

Any word wrapped with two tildes (like ~~this~~) will appear crossed out.

---
## Details

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>


## MDX


```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

## Adminitions

```md
:::note

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::
```

:::note

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

## Footnotes

```md
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

## Emphasis

```md
I need to highlight these <mark>very important words</mark>.
```

I need to highlight these <mark>very important words</mark>.


I need to highlight these <mark>very important words</mark>.


# Emoji

😀 😃 😄 😁 😆 😅 😂 🤣 🥲 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾

### [Gestures and Body Parts](https://emojipedia.org/people/ "List of people and fantasy emojis")

👋 🤚 🖐 ✋ 🖖 👌 🤌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🦵 🦿 🦶 👣 👂 🦻 👃 🫀 🫁 🧠 🦷 🦴 👀 👁 👅 👄 💋 🩸

### [People and Fantasy](https://emojipedia.org/people/ "List of people and fantasy emojis")

👶 👧 🧒 👦 👩 🧑 👨 👩‍🦱 🧑‍🦱 👨‍🦱 👩‍🦰 🧑‍🦰 👨‍🦰 👱‍♀️ 👱 👱‍♂️ 👩‍🦳 🧑‍🦳 👨‍🦳 👩‍🦲 🧑‍🦲 👨‍🦲 🧔 👵 🧓 👴 👲 👳‍♀️ 👳 👳‍♂️ 🧕 👮‍♀️ 👮 👮‍♂️ 👷‍♀️ 👷 👷‍♂️ 💂‍♀️ 💂 💂‍♂️ 🕵️‍♀️ 🕵️ 🕵️‍♂️ 👩‍⚕️ 🧑‍⚕️ 👨‍⚕️ 👩‍🌾 🧑‍🌾 👨‍🌾 👩‍🍳 🧑‍🍳 👨‍🍳 👩‍🎓 🧑‍🎓 👨‍🎓 👩‍🎤 🧑‍🎤 👨‍🎤 👩‍🏫 🧑‍🏫 👨‍🏫 👩‍🏭 🧑‍🏭 👨‍🏭 👩‍💻 🧑‍💻 👨‍💻 👩‍💼 🧑‍💼 👨‍💼 👩‍🔧 🧑‍🔧 👨‍🔧 👩‍🔬 🧑‍🔬 👨‍🔬 👩‍🎨 🧑‍🎨 👨‍🎨 👩‍🚒 🧑‍🚒 👨‍🚒 👩‍✈️ 🧑‍✈️ 👨‍✈️ 👩‍🚀 🧑‍🚀 👨‍🚀 👩‍⚖️ 🧑‍⚖️ 👨‍⚖️ 👰‍♀️ 👰 👰‍♂️ 🤵‍♀️ 🤵 🤵‍♂️ 👸 🤴 🥷 🦸‍♀️ 🦸 🦸‍♂️ 🦹‍♀️ 🦹 🦹‍♂️ 🤶 🧑‍🎄 🎅 🧙‍♀️ 🧙 🧙‍♂️ 🧝‍♀️ 🧝 🧝‍♂️ 🧛‍♀️ 🧛 🧛‍♂️ 🧟‍♀️ 🧟 🧟‍♂️ 🧞‍♀️ 🧞 🧞‍♂️ 🧜‍♀️ 🧜 🧜‍♂️ 🧚‍♀️ 🧚 🧚‍♂️ 👼 🤰 🤱 👩‍🍼 🧑‍🍼 👨‍🍼 🙇‍♀️ 🙇 🙇‍♂️ 💁‍♀️ 💁 💁‍♂️ 🙅‍♀️ 🙅 🙅‍♂️ 🙆‍♀️ 🙆 🙆‍♂️ 🙋‍♀️ 🙋 🙋‍♂️ 🧏‍♀️ 🧏 🧏‍♂️ 🤦‍♀️ 🤦 🤦‍♂️ 🤷‍♀️ 🤷 🤷‍♂️ 🙎‍♀️ 🙎 🙎‍♂️ 🙍‍♀️ 🙍 🙍‍♂️ 💇‍♀️ 💇 💇‍♂️ 💆‍♀️ 💆 💆‍♂️ 🧖‍♀️ 🧖 🧖‍♂️ 💅 🤳 💃 🕺 👯‍♀️ 👯 👯‍♂️ 🕴 👩‍🦽 🧑‍🦽 👨‍🦽 👩‍🦼 🧑‍🦼 👨‍🦼 🚶‍♀️ 🚶 🚶‍♂️ 👩‍🦯 🧑‍🦯 👨‍🦯 🧎‍♀️ 🧎 🧎‍♂️ 🏃‍♀️ 🏃 🏃‍♂️ 🧍‍♀️ 🧍 🧍‍♂️ 👭 🧑‍🤝‍🧑 👬 👫 👩‍❤️‍👩 💑 👨‍❤️‍👨 👩‍❤️‍👨 👩‍❤️‍💋‍👩 💏 👨‍❤️‍💋‍👨 👩‍❤️‍💋‍👨 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🗣 👤 👥 🫂

### [Clothing and Accessories](https://emojipedia.org/people/ "List of clothing emojis")

🧳 🌂 ☂️ 🧵 🪡 🪢 🧶 👓 🕶 🥽 🥼 🦺 👔 👕 👖 🧣 🧤 🧥 🧦 👗 👘 🥻 🩴 🩱 🩲 🩳 👙 👚 👛 👜 👝 🎒 👞 👟 🥾 🥿 👠 👡 🩰 👢 👑 👒 🎩 🎓 🧢 ⛑ 🪖 💄 💍 💼

### [Pale Emojis](https://emojipedia.org/light-skin-tone/ "List of light skin tone emojis")

👋🏻 🤚🏻 🖐🏻 ✋🏻 🖖🏻 👌🏻 🤌🏻 🤏🏻 ✌🏻 🤞🏻 🤟🏻 🤘🏻 🤙🏻 👈🏻 👉🏻 👆🏻 🖕🏻 👇🏻 ☝🏻 👍🏻 👎🏻 ✊🏻 👊🏻 🤛🏻 🤜🏻 👏🏻 🙌🏻 👐🏻 🤲🏻 🙏🏻 ✍🏻 💅🏻 🤳🏻 💪🏻 🦵🏻 🦶🏻 👂🏻 🦻🏻 👃🏻 👶🏻 👧🏻 🧒🏻 👦🏻 👩🏻 🧑🏻 👨🏻 👩🏻‍🦱 🧑🏻‍🦱 👨🏻‍🦱 👩🏻‍🦰 🧑🏻‍🦰 👨🏻‍🦰 👱🏻‍♀️ 👱🏻 👱🏻‍♂️ 👩🏻‍🦳 🧑🏻‍🦳 👨🏻‍🦳 👩🏻‍🦲 🧑🏻‍🦲 👨🏻‍🦲 🧔🏻 👵🏻 🧓🏻 👴🏻 👲🏻 👳🏻‍♀️ 👳🏻 👳🏻‍♂️ 🧕🏻 👮🏻‍♀️ 👮🏻 👮🏻‍♂️ 👷🏻‍♀️ 👷🏻 👷🏻‍♂️ 💂🏻‍♀️ 💂🏻 💂🏻‍♂️ 🕵🏻‍♀️ 🕵🏻 🕵🏻‍♂️ 👩🏻‍⚕️ 🧑🏻‍⚕️ 👨🏻‍⚕️ 👩🏻‍🌾 🧑🏻‍🌾 👨🏻‍🌾 👩🏻‍🍳 🧑🏻‍🍳 👨🏻‍🍳 👩🏻‍🎓 🧑🏻‍🎓 👨🏻‍🎓 👩🏻‍🎤 🧑🏻‍🎤 👨🏻‍🎤 👩🏻‍🏫 🧑🏻‍🏫 👨🏻‍🏫 👩🏻‍🏭 🧑🏻‍🏭 👨🏻‍🏭 👩🏻‍💻 🧑🏻‍💻 👨🏻‍💻 👩🏻‍💼 🧑🏻‍💼 👨🏻‍💼 👩🏻‍🔧 🧑🏻‍🔧 👨🏻‍🔧 👩🏻‍🔬 🧑🏻‍🔬 👨🏻‍🔬 👩🏻‍🎨 🧑🏻‍🎨 👨🏻‍🎨 👩🏻‍🚒 🧑🏻‍🚒 👨🏻‍🚒 👩🏻‍✈️ 🧑🏻‍✈️ 👨🏻‍✈️ 👩🏻‍🚀 🧑🏻‍🚀 👨🏻‍🚀 👩🏻‍⚖️ 🧑🏻‍⚖️ 👨🏻‍⚖️ 👰🏻‍♀️ 👰🏻 👰🏻‍♂️ 🤵🏻‍♀️ 🤵🏻 🤵🏻‍♂️ 👸🏻 🤴🏻 🥷🏻 🦸🏻‍♀️ 🦸🏻 🦸🏻‍♂️ 🦹🏻‍♀️ 🦹🏻 🦹🏻‍♂️ 🤶🏻 🧑🏻‍🎄 🎅🏻 🧙🏻‍♀️ 🧙🏻 🧙🏻‍♂️ 🧝🏻‍♀️ 🧝🏻 🧝🏻‍♂️ 🧛🏻‍♀️ 🧛🏻 🧛🏻‍♂️ 🧜🏻‍♀️ 🧜🏻 🧜🏻‍♂️ 🧚🏻‍♀️ 🧚🏻 🧚🏻‍♂️ 👼🏻 🤰🏻 🤱🏻 👩🏻‍🍼 🧑🏻‍🍼 👨🏻‍🍼 🙇🏻‍♀️ 🙇🏻 🙇🏻‍♂️ 💁🏻‍♀️ 💁🏻 💁🏻‍♂️ 🙅🏻‍♀️ 🙅🏻 🙅🏻‍♂️ 🙆🏻‍♀️ 🙆🏻 🙆🏻‍♂️ 🙋🏻‍♀️ 🙋🏻 🙋🏻‍♂️ 🧏🏻‍♀️ 🧏🏻 🧏🏻‍♂️ 🤦🏻‍♀️ 🤦🏻 🤦🏻‍♂️ 🤷🏻‍♀️ 🤷🏻 🤷🏻‍♂️ 🙎🏻‍♀️ 🙎🏻 🙎🏻‍♂️ 🙍🏻‍♀️ 🙍🏻 🙍🏻‍♂️ 💇🏻‍♀️ 💇🏻 💇🏻‍♂️ 💆🏻‍♀️ 💆🏻 💆🏻‍♂️ 🧖🏻‍♀️ 🧖🏻 🧖🏻‍♂️ 💃🏻 🕺🏻 🕴🏻 👩🏻‍🦽 🧑🏻‍🦽 👨🏻‍🦽 👩🏻‍🦼 🧑🏻‍🦼 👨🏻‍🦼 🚶🏻‍♀️ 🚶🏻 🚶🏻‍♂️ 👩🏻‍🦯 🧑🏻‍🦯 👨🏻‍🦯 🧎🏻‍♀️ 🧎🏻 🧎🏻‍♂️ 🏃🏻‍♀️ 🏃🏻 🏃🏻‍♂️ 🧍🏻‍♀️ 🧍🏻 🧍🏻‍♂️ 👭🏻 🧑🏻‍🤝‍🧑🏻 👬🏻 👫🏻 🧗🏻‍♀️ 🧗🏻 🧗🏻‍♂️ 🏇🏻 🏂🏻 🏌🏻‍♀️ 🏌🏻 🏌🏻‍♂️ 🏄🏻‍♀️ 🏄🏻 🏄🏻‍♂️ 🚣🏻‍♀️ 🚣🏻 🚣🏻‍♂️ 🏊🏻‍♀️ 🏊🏻 🏊🏻‍♂️ ⛹🏻‍♀️ ⛹🏻 ⛹🏻‍♂️ 🏋🏻‍♀️ 🏋🏻 🏋🏻‍♂️ 🚴🏻‍♀️ 🚴🏻 🚴🏻‍♂️ 🚵🏻‍♀️ 🚵🏻 🚵🏻‍♂️ 🤸🏻‍♀️ 🤸🏻 🤸🏻‍♂️ 🤽🏻‍♀️ 🤽🏻 🤽🏻‍♂️ 🤾🏻‍♀️ 🤾🏻 🤾🏻‍♂️ 🤹🏻‍♀️ 🤹🏻 🤹🏻‍♂️ 🧘🏻‍♀️ 🧘🏻 🧘🏻‍♂️ 🛀🏻 🛌🏻

### [Cream White Emojis](https://emojipedia.org/medium-light-skin-tone/ "List of medium light skin tone emojis")

👋🏼 🤚🏼 🖐🏼 ✋🏼 🖖🏼 👌🏼 🤌🏼 🤏🏼 ✌🏼 🤞🏼 🤟🏼 🤘🏼 🤙🏼 👈🏼 👉🏼 👆🏼 🖕🏼 👇🏼 ☝🏼 👍🏼 👎🏼 ✊🏼 👊🏼 🤛🏼 🤜🏼 👏🏼 🙌🏼 👐🏼 🤲🏼 🙏🏼 ✍🏼 💅🏼 🤳🏼 💪🏼 🦵🏼 🦶🏼 👂🏼 🦻🏼 👃🏼 👶🏼 👧🏼 🧒🏼 👦🏼 👩🏼 🧑🏼 👨🏼 👩🏼‍🦱 🧑🏼‍🦱 👨🏼‍🦱 👩🏼‍🦰 🧑🏼‍🦰 👨🏼‍🦰 👱🏼‍♀️ 👱🏼 👱🏼‍♂️ 👩🏼‍🦳 🧑🏼‍🦳 👨🏼‍🦳 👩🏼‍🦲 🧑🏼‍🦲 👨🏼‍🦲 🧔🏼 👵🏼 🧓🏼 👴🏼 👲🏼 👳🏼‍♀️ 👳🏼 👳🏼‍♂️ 🧕🏼 👮🏼‍♀️ 👮🏼 👮🏼‍♂️ 👷🏼‍♀️ 👷🏼 👷🏼‍♂️ 💂🏼‍♀️ 💂🏼 💂🏼‍♂️ 🕵🏼‍♀️ 🕵🏼 🕵🏼‍♂️ 👩🏼‍⚕️ 🧑🏼‍⚕️ 👨🏼‍⚕️ 👩🏼‍🌾 🧑🏼‍🌾 👨🏼‍🌾 👩🏼‍🍳 🧑🏼‍🍳 👨🏼‍🍳 👩🏼‍🎓 🧑🏼‍🎓 👨🏼‍🎓 👩🏼‍🎤 🧑🏼‍🎤 👨🏼‍🎤 👩🏼‍🏫 🧑🏼‍🏫 👨🏼‍🏫 👩🏼‍🏭 🧑🏼‍🏭 👨🏼‍🏭 👩🏼‍💻 🧑🏼‍💻 👨🏼‍💻 👩🏼‍💼 🧑🏼‍💼 👨🏼‍💼 👩🏼‍🔧 🧑🏼‍🔧 👨🏼‍🔧 👩🏼‍🔬 🧑🏼‍🔬 👨🏼‍🔬 👩🏼‍🎨 🧑🏼‍🎨 👨🏼‍🎨 👩🏼‍🚒 🧑🏼‍🚒 👨🏼‍🚒 👩🏼‍✈️ 🧑🏼‍✈️ 👨🏼‍✈️ 👩🏼‍🚀 🧑🏼‍🚀 👨🏼‍🚀 👩🏼‍⚖️ 🧑🏼‍⚖️ 👨🏼‍⚖️ 👰🏼‍♀️ 👰🏼 👰🏼‍♂️ 🤵🏼‍♀️ 🤵🏼 🤵🏼‍♂️ 👸🏼 🤴🏼 🥷🏼 🦸🏼‍♀️ 🦸🏼 🦸🏼‍♂️ 🦹🏼‍♀️ 🦹🏼 🦹🏼‍♂️ 🤶🏼 🧑🏼‍🎄 🎅🏼 🧙🏼‍♀️ 🧙🏼 🧙🏼‍♂️ 🧝🏼‍♀️ 🧝🏼 🧝🏼‍♂️ 🧛🏼‍♀️ 🧛🏼 🧛🏼‍♂️ 🧜🏼‍♀️ 🧜🏼 🧜🏼‍♂️ 🧚🏼‍♀️ 🧚🏼 🧚🏼‍♂️ 👼🏼 🤰🏼 🤱🏼 👩🏼‍🍼 🧑🏼‍🍼 👨🏼‍🍼 🙇🏼‍♀️ 🙇🏼 🙇🏼‍♂️ 💁🏼‍♀️ 💁🏼 💁🏼‍♂️ 🙅🏼‍♀️ 🙅🏼 🙅🏼‍♂️ 🙆🏼‍♀️ 🙆🏼 🙆🏼‍♂️ 🙋🏼‍♀️ 🙋🏼 🙋🏼‍♂️ 🧏🏼‍♀️ 🧏🏼 🧏🏼‍♂️ 🤦🏼‍♀️ 🤦🏼 🤦🏼‍♂️ 🤷🏼‍♀️ 🤷🏼 🤷🏼‍♂️ 🙎🏼‍♀️ 🙎🏼 🙎🏼‍♂️ 🙍🏼‍♀️ 🙍🏼 🙍🏼‍♂️ 💇🏼‍♀️ 💇🏼 💇🏼‍♂️ 💆🏼‍♀️ 💆🏼 💆🏼‍♂️ 🧖🏼‍♀️ 🧖🏼 🧖🏼‍♂️ 💃🏼 🕺🏼 🕴🏼 👩🏼‍🦽 🧑🏼‍🦽 👨🏼‍🦽 👩🏼‍🦼 🧑🏼‍🦼 👨🏼‍🦼 🚶🏼‍♀️ 🚶🏼 🚶🏼‍♂️ 👩🏼‍🦯 🧑🏼‍🦯 👨🏼‍🦯 🧎🏼‍♀️ 🧎🏼 🧎🏼‍♂️ 🏃🏼‍♀️ 🏃🏼 🏃🏼‍♂️ 🧍🏼‍♀️ 🧍🏼 🧍🏼‍♂️ 👭🏼 🧑🏼‍🤝‍🧑🏼 👬🏼 👫🏼 🧗🏼‍♀️ 🧗🏼 🧗🏼‍♂️ 🏇🏼 🏂🏼 🏌🏼‍♀️ 🏌🏼 🏌🏼‍♂️ 🏄🏼‍♀️ 🏄🏼 🏄🏼‍♂️ 🚣🏼‍♀️ 🚣🏼 🚣🏼‍♂️ 🏊🏼‍♀️ 🏊🏼 🏊🏼‍♂️ ⛹🏼‍♀️ ⛹🏼 ⛹🏼‍♂️ 🏋🏼‍♀️ 🏋🏼 🏋🏼‍♂️ 🚴🏼‍♀️ 🚴🏼 🚴🏼‍♂️ 🚵🏼‍♀️ 🚵🏼 🚵🏼‍♂️ 🤸🏼‍♀️ 🤸🏼 🤸🏼‍♂️ 🤽🏼‍♀️ 🤽🏼 🤽🏼‍♂️ 🤾🏼‍♀️ 🤾🏼 🤾🏼‍♂️ 🤹🏼‍♀️ 🤹🏼 🤹🏼‍♂️ 🧘🏼‍♀️ 🧘🏼 🧘🏼‍♂️ 🛀🏼 🛌🏼

### [Brown Emojis](https://emojipedia.org/medium-skin-tone/ "List of medium skin tone emojis")

👋🏽 🤚🏽 🖐🏽 ✋🏽 🖖🏽 👌🏽 🤌🏽 🤏🏽 ✌🏽 🤞🏽 🤟🏽 🤘🏽 🤙🏽 👈🏽 👉🏽 👆🏽 🖕🏽 👇🏽 ☝🏽 👍🏽 👎🏽 ✊🏽 👊🏽 🤛🏽 🤜🏽 👏🏽 🙌🏽 👐🏽 🤲🏽 🙏🏽 ✍🏽 💅🏽 🤳🏽 💪🏽 🦵🏽 🦶🏽 👂🏽 🦻🏽 👃🏽 👶🏽 👧🏽 🧒🏽 👦🏽 👩🏽 🧑🏽 👨🏽 👩🏽‍🦱 🧑🏽‍🦱 👨🏽‍🦱 👩🏽‍🦰 🧑🏽‍🦰 👨🏽‍🦰 👱🏽‍♀️ 👱🏽 👱🏽‍♂️ 👩🏽‍🦳 🧑🏽‍🦳 👨🏽‍🦳 👩🏽‍🦲 🧑🏽‍🦲 👨🏽‍🦲 🧔🏽 👵🏽 🧓🏽 👴🏽 👲🏽 👳🏽‍♀️ 👳🏽 👳🏽‍♂️ 🧕🏽 👮🏽‍♀️ 👮🏽 👮🏽‍♂️ 👷🏽‍♀️ 👷🏽 👷🏽‍♂️ 💂🏽‍♀️ 💂🏽 💂🏽‍♂️ 🕵🏽‍♀️ 🕵🏽 🕵🏽‍♂️ 👩🏽‍⚕️ 🧑🏽‍⚕️ 👨🏽‍⚕️ 👩🏽‍🌾 🧑🏽‍🌾 👨🏽‍🌾 👩🏽‍🍳 🧑🏽‍🍳 👨🏽‍🍳 👩🏽‍🎓 🧑🏽‍🎓 👨🏽‍🎓 👩🏽‍🎤 🧑🏽‍🎤 👨🏽‍🎤 👩🏽‍🏫 🧑🏽‍🏫 👨🏽‍🏫 👩🏽‍🏭 🧑🏽‍🏭 👨🏽‍🏭 👩🏽‍💻 🧑🏽‍💻 👨🏽‍💻 👩🏽‍💼 🧑🏽‍💼 👨🏽‍💼 👩🏽‍🔧 🧑🏽‍🔧 👨🏽‍🔧 👩🏽‍🔬 🧑🏽‍🔬 👨🏽‍🔬 👩🏽‍🎨 🧑🏽‍🎨 👨🏽‍🎨 👩🏽‍🚒 🧑🏽‍🚒 👨🏽‍🚒 👩🏽‍✈️ 🧑🏽‍✈️ 👨🏽‍✈️ 👩🏽‍🚀 🧑🏽‍🚀 👨🏽‍🚀 👩🏽‍⚖️ 🧑🏽‍⚖️ 👨🏽‍⚖️ 👰🏽‍♀️ 👰🏽 👰🏽‍♂️ 🤵🏽‍♀️ 🤵🏽 🤵🏽‍♂️ 👸🏽 🤴🏽 🥷🏽 🦸🏽‍♀️ 🦸🏽 🦸🏽‍♂️ 🦹🏽‍♀️ 🦹🏽 🦹🏽‍♂️ 🤶🏽 🧑🏽‍🎄 🎅🏽 🧙🏽‍♀️ 🧙🏽 🧙🏽‍♂️ 🧝🏽‍♀️ 🧝🏽 🧝🏽‍♂️ 🧛🏽‍♀️ 🧛🏽 🧛🏽‍♂️ 🧜🏽‍♀️ 🧜🏽 🧜🏽‍♂️ 🧚🏽‍♀️ 🧚🏽 🧚🏽‍♂️ 👼🏽 🤰🏽 🤱🏽 👩🏽‍🍼 🧑🏽‍🍼 👨🏽‍🍼 🙇🏽‍♀️ 🙇🏽 🙇🏽‍♂️ 💁🏽‍♀️ 💁🏽 💁🏽‍♂️ 🙅🏽‍♀️ 🙅🏽 🙅🏽‍♂️ 🙆🏽‍♀️ 🙆🏽 🙆🏽‍♂️ 🙋🏽‍♀️ 🙋🏽 🙋🏽‍♂️ 🧏🏽‍♀️ 🧏🏽 🧏🏽‍♂️ 🤦🏽‍♀️ 🤦🏽 🤦🏽‍♂️ 🤷🏽‍♀️ 🤷🏽 🤷🏽‍♂️ 🙎🏽‍♀️ 🙎🏽 🙎🏽‍♂️ 🙍🏽‍♀️ 🙍🏽 🙍🏽‍♂️ 💇🏽‍♀️ 💇🏽 💇🏽‍♂️ 💆🏽‍♀️ 💆🏽 💆🏽‍♂️ 🧖🏽‍♀️ 🧖🏽 🧖🏽‍♂️ 💃🏽 🕺🏽 🕴🏽 👩🏽‍🦽 🧑🏽‍🦽 👨🏽‍🦽 👩🏽‍🦼 🧑🏽‍🦼 👨🏽‍🦼 🚶🏽‍♀️ 🚶🏽 🚶🏽‍♂️ 👩🏽‍🦯 🧑🏽‍🦯 👨🏽‍🦯 🧎🏽‍♀️ 🧎🏽 🧎🏽‍♂️ 🏃🏽‍♀️ 🏃🏽 🏃🏽‍♂️ 🧍🏽‍♀️ 🧍🏽 🧍🏽‍♂️ 👭🏽 🧑🏽‍🤝‍🧑🏽 👬🏽 👫🏽 🧗🏽‍♀️ 🧗🏽 🧗🏽‍♂️ 🏇🏽 🏂🏽 🏌🏽‍♀️ 🏌🏽 🏌🏽‍♂️ 🏄🏽‍♀️ 🏄🏽 🏄🏽‍♂️ 🚣🏽‍♀️ 🚣🏽 🚣🏽‍♂️ 🏊🏽‍♀️ 🏊🏽 🏊🏽‍♂️ ⛹🏽‍♀️ ⛹🏽 ⛹🏽‍♂️ 🏋🏽‍♀️ 🏋🏽 🏋🏽‍♂️ 🚴🏽‍♀️ 🚴🏽 🚴🏽‍♂️ 🚵🏽‍♀️ 🚵🏽 🚵🏽‍♂️ 🤸🏽‍♀️ 🤸🏽 🤸🏽‍♂️ 🤽🏽‍♀️ 🤽🏽 🤽🏽‍♂️ 🤾🏽‍♀️ 🤾🏽 🤾🏽‍♂️ 🤹🏽‍♀️ 🤹🏽 🤹🏽‍♂️ 🧘🏽‍♀️ 🧘🏽 🧘🏽‍♂️ 🛀🏽 🛌🏽

### [Dark Brown Emojis](https://emojipedia.org/medium-dark-skin-tone/ "List of medium dark skin tone emojis")

👋🏾 🤚🏾 🖐🏾 ✋🏾 🖖🏾 👌🏾 🤌🏾 🤏🏾 ✌🏾 🤞🏾 🤟🏾 🤘🏾 🤙🏾 👈🏾 👉🏾 👆🏾 🖕🏾 👇🏾 ☝🏾 👍🏾 👎🏾 ✊🏾 👊🏾 🤛🏾 🤜🏾 👏🏾 🙌🏾 👐🏾 🤲🏾 🙏🏾 ✍🏾 💅🏾 🤳🏾 💪🏾 🦵🏾 🦶🏾 👂🏾 🦻🏾 👃🏾 👶🏾 👧🏾 🧒🏾 👦🏾 👩🏾 🧑🏾 👨🏾 👩🏾‍🦱 🧑🏾‍🦱 👨🏾‍🦱 👩🏾‍🦰 🧑🏾‍🦰 👨🏾‍🦰 👱🏾‍♀️ 👱🏾 👱🏾‍♂️ 👩🏾‍🦳 🧑🏾‍🦳 👨🏾‍🦳 👩🏾‍🦲 🧑🏾‍🦲 👨🏾‍🦲 🧔🏾 👵🏾 🧓🏾 👴🏾 👲🏾 👳🏾‍♀️ 👳🏾 👳🏾‍♂️ 🧕🏾 👮🏾‍♀️ 👮🏾 👮🏾‍♂️ 👷🏾‍♀️ 👷🏾 👷🏾‍♂️ 💂🏾‍♀️ 💂🏾 💂🏾‍♂️ 🕵🏾‍♀️ 🕵🏾 🕵🏾‍♂️ 👩🏾‍⚕️ 🧑🏾‍⚕️ 👨🏾‍⚕️ 👩🏾‍🌾 🧑🏾‍🌾 👨🏾‍🌾 👩🏾‍🍳 🧑🏾‍🍳 👨🏾‍🍳 👩🏾‍🎓 🧑🏾‍🎓 👨🏾‍🎓 👩🏾‍🎤 🧑🏾‍🎤 👨🏾‍🎤 👩🏾‍🏫 🧑🏾‍🏫 👨🏾‍🏫 👩🏾‍🏭 🧑🏾‍🏭 👨🏾‍🏭 👩🏾‍💻 🧑🏾‍💻 👨🏾‍💻 👩🏾‍💼 🧑🏾‍💼 👨🏾‍💼 👩🏾‍🔧 🧑🏾‍🔧 👨🏾‍🔧 👩🏾‍🔬 🧑🏾‍🔬 👨🏾‍🔬 👩🏾‍🎨 🧑🏾‍🎨 👨🏾‍🎨 👩🏾‍🚒 🧑🏾‍🚒 👨🏾‍🚒 👩🏾‍✈️ 🧑🏾‍✈️ 👨🏾‍✈️ 👩🏾‍🚀 🧑🏾‍🚀 👨🏾‍🚀 👩🏾‍⚖️ 🧑🏾‍⚖️ 👨🏾‍⚖️ 👰🏾‍♀️ 👰🏾 👰🏾‍♂️ 🤵🏾‍♀️ 🤵🏾 🤵🏾‍♂️ 👸🏾 🤴🏾 🥷🏾 🦸🏾‍♀️ 🦸🏾 🦸🏾‍♂️ 🦹🏾‍♀️ 🦹🏾 🦹🏾‍♂️ 🤶🏾 🧑🏾‍🎄 🎅🏾 🧙🏾‍♀️ 🧙🏾 🧙🏾‍♂️ 🧝🏾‍♀️ 🧝🏾 🧝🏾‍♂️ 🧛🏾‍♀️ 🧛🏾 🧛🏾‍♂️ 🧜🏾‍♀️ 🧜🏾 🧜🏾‍♂️ 🧚🏾‍♀️ 🧚🏾 🧚🏾‍♂️ 👼🏾 🤰🏾 🤱🏾 👩🏾‍🍼 🧑🏾‍🍼 👨🏾‍🍼 🙇🏾‍♀️ 🙇🏾 🙇🏾‍♂️ 💁🏾‍♀️ 💁🏾 💁🏾‍♂️ 🙅🏾‍♀️ 🙅🏾 🙅🏾‍♂️ 🙆🏾‍♀️ 🙆🏾 🙆🏾‍♂️ 🙋🏾‍♀️ 🙋🏾 🙋🏾‍♂️ 🧏🏾‍♀️ 🧏🏾 🧏🏾‍♂️ 🤦🏾‍♀️ 🤦🏾 🤦🏾‍♂️ 🤷🏾‍♀️ 🤷🏾 🤷🏾‍♂️ 🙎🏾‍♀️ 🙎🏾 🙎🏾‍♂️ 🙍🏾‍♀️ 🙍🏾 🙍🏾‍♂️ 💇🏾‍♀️ 💇🏾 💇🏾‍♂️ 💆🏾‍♀️ 💆🏾 💆🏾‍♂️ 🧖🏾‍♀️ 🧖🏾 🧖🏾‍♂️ 💃🏾 🕺🏾 🕴🏿 👩🏾‍🦽 🧑🏾‍🦽 👨🏾‍🦽 👩🏾‍🦼 🧑🏾‍🦼 👨🏾‍🦼 🚶🏾‍♀️ 🚶🏾 🚶🏾‍♂️ 👩🏾‍🦯 🧑🏾‍🦯 👨🏾‍🦯 🧎🏾‍♀️ 🧎🏾 🧎🏾‍♂️ 🏃🏾‍♀️ 🏃🏾 🏃🏾‍♂️ 🧍🏾‍♀️ 🧍🏾 🧍🏾‍♂️ 👭🏾 🧑🏾‍🤝‍🧑🏾 👬🏾 👫🏾 🧗🏾‍♀️ 🧗🏾 🧗🏾‍♂️ 🏇🏾 🏂🏾 🏌🏾‍♀️ 🏌🏾 🏌🏾‍♂️ 🏄🏾‍♀️ 🏄🏾 🏄🏾‍♂️ 🚣🏾‍♀️ 🚣🏾 🚣🏾‍♂️ 🏊🏾‍♀️ 🏊🏾 🏊🏾‍♂️ ⛹🏾‍♀️ ⛹🏾 ⛹🏾‍♂️ 🏋🏾‍♀️ 🏋🏾 🏋🏾‍♂️ 🚴🏾‍♀️ 🚴🏾 🚴🏾‍♂️ 🚵🏾‍♀️ 🚵🏾 🚵🏾‍♂️ 🤸🏾‍♀️ 🤸🏾 🤸🏾‍♂️ 🤽🏾‍♀️ 🤽🏾 🤽🏾‍♂️ 🤾🏾‍♀️ 🤾🏾 🤾🏾‍♂️ 🤹🏾‍♀️ 🤹🏾 🤹🏾‍♂️ 🧘🏾‍♀️ 🧘🏾 🧘🏾‍♂️ 🛀🏾 🛌🏾

### [Black Emojis](https://emojipedia.org/dark-skin-tone/ "List of dark skin tone emojis")

👋🏿 🤚🏿 🖐🏿 ✋🏿 🖖🏿 👌🏿 🤌🏿 🤏🏿 ✌🏿 🤞🏿 🤟🏿 🤘🏿 🤙🏿 👈🏿 👉🏿 👆🏿 🖕🏿 👇🏿 ☝🏿 👍🏿 👎🏿 ✊🏿 👊🏿 🤛🏿 🤜🏿 👏🏿 🙌🏿 👐🏿 🤲🏿 🙏🏿 ✍🏿 💅🏿 🤳🏿 💪🏿 🦵🏿 🦶🏿 👂🏿 🦻🏿 👃🏿 👶🏿 👧🏿 🧒🏿 👦🏿 👩🏿 🧑🏿 👨🏿 👩🏿‍🦱 🧑🏿‍🦱 👨🏿‍🦱 👩🏿‍🦰 🧑🏿‍🦰 👨🏿‍🦰 👱🏿‍♀️ 👱🏿 👱🏿‍♂️ 👩🏿‍🦳 🧑🏿‍🦳 👨🏿‍🦳 👩🏿‍🦲 🧑🏿‍🦲 👨🏿‍🦲 🧔🏿 👵🏿 🧓🏿 👴🏿 👲🏿 👳🏿‍♀️ 👳🏿 👳🏿‍♂️ 🧕🏿 👮🏿‍♀️ 👮🏿 👮🏿‍♂️ 👷🏿‍♀️ 👷🏿 👷🏿‍♂️ 💂🏿‍♀️ 💂🏿 💂🏿‍♂️ 🕵🏿‍♀️ 🕵🏿 🕵🏿‍♂️ 👩🏿‍⚕️ 🧑🏿‍⚕️ 👨🏿‍⚕️ 👩🏿‍🌾 🧑🏿‍🌾 👨🏿‍🌾 👩🏿‍🍳 🧑🏿‍🍳 👨🏿‍🍳 👩🏿‍🎓 🧑🏿‍🎓 👨🏿‍🎓 👩🏿‍🎤 🧑🏿‍🎤 👨🏿‍🎤 👩🏿‍🏫 🧑🏿‍🏫 👨🏿‍🏫 👩🏿‍🏭 🧑🏿‍🏭 👨🏿‍🏭 👩🏿‍💻 🧑🏿‍💻 👨🏿‍💻 👩🏿‍💼 🧑🏿‍💼 👨🏿‍💼 👩🏿‍🔧 🧑🏿‍🔧 👨🏿‍🔧 👩🏿‍🔬 🧑🏿‍🔬 👨🏿‍🔬 👩🏿‍🎨 🧑🏿‍🎨 👨🏿‍🎨 👩🏿‍🚒 🧑🏿‍🚒 👨🏿‍🚒 👩🏿‍✈️ 🧑🏿‍✈️ 👨🏿‍✈️ 👩🏿‍🚀 🧑🏿‍🚀 👨🏿‍🚀 👩🏿‍⚖️ 🧑🏿‍⚖️ 👨🏿‍⚖️ 👰🏿‍♀️ 👰🏿 👰🏿‍♂️ 🤵🏿‍♀️ 🤵🏿 🤵🏿‍♂️ 👸🏿 🤴🏿 🥷🏿 🦸🏿‍♀️ 🦸🏿 🦸🏿‍♂️ 🦹🏿‍♀️ 🦹🏿 🦹🏿‍♂️ 🤶🏿 🧑🏿‍🎄 🎅🏿 🧙🏿‍♀️ 🧙🏿 🧙🏿‍♂️ 🧝🏿‍♀️ 🧝🏿 🧝🏿‍♂️ 🧛🏿‍♀️ 🧛🏿 🧛🏿‍♂️ 🧜🏿‍♀️ 🧜🏿 🧜🏿‍♂️ 🧚🏿‍♀️ 🧚🏿 🧚🏿‍♂️ 👼🏿 🤰🏿 🤱🏿 👩🏿‍🍼 🧑🏿‍🍼 👨🏿‍🍼 🙇🏿‍♀️ 🙇🏿 🙇🏿‍♂️ 💁🏿‍♀️ 💁🏿 💁🏿‍♂️ 🙅🏿‍♀️ 🙅🏿 🙅🏿‍♂️ 🙆🏿‍♀️ 🙆🏿 🙆🏿‍♂️ 🙋🏿‍♀️ 🙋🏿 🙋🏿‍♂️ 🧏🏿‍♀️ 🧏🏿 🧏🏿‍♂️ 🤦🏿‍♀️ 🤦🏿 🤦🏿‍♂️ 🤷🏿‍♀️ 🤷🏿 🤷🏿‍♂️ 🙎🏿‍♀️ 🙎🏿 🙎🏿‍♂️ 🙍🏿‍♀️ 🙍🏿 🙍🏿‍♂️ 💇🏿‍♀️ 💇🏿 💇🏿‍♂️ 💆🏿‍♀️ 💆🏿 💆🏿‍♂️ 🧖🏿‍♀️ 🧖🏿 🧖🏿‍♂️ 💃🏿 🕺🏿 🕴🏿 👩🏿‍🦽 🧑🏿‍🦽 👨🏿‍🦽 👩🏿‍🦼 🧑🏿‍🦼 👨🏿‍🦼 🚶🏿‍♀️ 🚶🏿 🚶🏿‍♂️ 👩🏿‍🦯 🧑🏿‍🦯 👨🏿‍🦯 🧎🏿‍♀️ 🧎🏿 🧎🏿‍♂️ 🏃🏿‍♀️ 🏃🏿 🏃🏿‍♂️ 🧍🏿‍♀️ 🧍🏿 🧍🏿‍♂️ 👭🏿 🧑🏿‍🤝‍🧑🏿 👬🏿 👫🏿 🧗🏿‍♀️ 🧗🏿 🧗🏿‍♂️ 🏇🏿 🏂🏿 🏌🏿‍♀️ 🏌🏿 🏌🏿‍♂️ 🏄🏿‍♀️ 🏄🏿 🏄🏿‍♂️ 🚣🏿‍♀️ 🚣🏿 🚣🏿‍♂️ 🏊🏿‍♀️ 🏊🏿 🏊🏿‍♂️ ⛹🏿‍♀️ ⛹🏿 ⛹🏿‍♂️ 🏋🏿‍♀️ 🏋🏿 🏋🏿‍♂️ 🚴🏿‍♀️ 🚴🏿 🚴🏿‍♂️ 🚵🏿‍♀️ 🚵🏿 🚵🏿‍♂️ 🤸🏿‍♀️ 🤸🏿 🤸🏿‍♂️ 🤽🏿‍♀️ 🤽🏿 🤽🏿‍♂️ 🤾🏿‍♀️ 🤾🏿 🤾🏿‍♂️ 🤹🏿‍♀️ 🤹🏿 🤹🏿‍♂️ 🧘🏿‍♀️ 🧘🏿 🧘🏿‍♂️ 🛀🏿 🛌🏿

## [Animals & Nature](https://emojipedia.org/nature/ "Names and meanings of animal and nature emojis")

🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐻‍❄️ 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🪱 🐛 🦋 🐌 🐞 🐜 🪰 🪲 🪳 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🦣 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🦬 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐈‍⬛ 🪶 🐓 🦃 🦤 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦫 🦦 🦥 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🪵 🌱 🌿 ☘️ 🍀 🎍 🪴 🎋 🍃 🍂 🍁 🍄 🐚 🪨 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 🪐 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 🌫

## [Food & Drink](https://emojipedia.org/food-drink/ "Names and meanings of food and drink emojis")

🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🫑 🌽 🥕 🫒 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🫓 🥪 🥙 🧆 🌮 🌯 🫔 🥗 🥘 🫕 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 🫖 ☕️ 🍵 🧃 🥤 🧋 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🧊 🥄 🍴 🍽 🥣 🥡 🥢 🧂

## [Activity and Sports](https://emojipedia.org/activity/ "Names and meanings of sport and activity emojis")

⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🪃 🥅 ⛳️ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛼 🛷 ⛸ 🥌 🎿 ⛷ 🏂 🪂 🏋️‍♀️ 🏋️ 🏋️‍♂️ 🤼‍♀️ 🤼 🤼‍♂️ 🤸‍♀️ 🤸 🤸‍♂️ ⛹️‍♀️ ⛹️ ⛹️‍♂️ 🤺 🤾‍♀️ 🤾 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏌️‍♂️ 🏇 🧘‍♀️ 🧘 🧘‍♂️ 🏄‍♀️ 🏄 🏄‍♂️ 🏊‍♀️ 🏊 🏊‍♂️ 🤽‍♀️ 🤽 🤽‍♂️ 🚣‍♀️ 🚣 🚣‍♂️ 🧗‍♀️ 🧗 🧗‍♂️ 🚵‍♀️ 🚵 🚵‍♂️ 🚴‍♀️ 🚴 🚴‍♂️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹 🤹‍♂️ 🤹‍♀️ 🎭 🩰 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🪘 🎷 🎺 🪗 🎸 🪕 🎻 🎲 ♟ 🎯 🎳 🎮 🎰 🧩

## [Travel & Places](https://emojipedia.org/travel-places/ "Names and meanings of travel and place emojis")

🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🛻 🚚 🚛 🚜 🦯 🦽 🦼 🛴 🚲 🛵 🏍 🛺 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ 🪝 ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🛖 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🛕 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁

## [Objects](https://emojipedia.org/objects/ "Names and meanings of object emojis")

⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 🧭 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🪔 🧯 🛢 💸 💵 💴 💶 💷 🪙 💰 💳 💎 ⚖️ 🪜 🧰 🪛 🔧 🔨 ⚒ 🛠 ⛏ 🪚 🔩 ⚙️ 🪤 🧱 ⛓ 🧲 🔫 💣 🧨 🪓 🔪 🗡 ⚔️ 🛡 🚬 ⚰️ 🪦 ⚱️ 🏺 🔮 📿 🧿 💈 ⚗️ 🔭 🔬 🕳 🩹 🩺 💊 💉 🩸 🧬 🦠 🧫 🧪 🌡 🧹 🪠 🧺 🧻 🚽 🚰 🚿 🛁 🛀 🧼 🪥 🪒 🧽 🪣 🧴 🛎 🔑 🗝 🚪 🪑 🛋 🛏 🛌 🧸 🪆 🖼 🪞 🪟 🛍 🛒 🎁 🎈 🎏 🎀 🪄 🪅 🎊 🎉 🎎 🏮 🎐 🧧 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 🪧 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 🧾 📊 📈 📉 🗒 🗓 📆 📅 🗑 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🧷 🔗 📎 🖇 📐 📏 🧮 📌 📍 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓

## [Symbols](https://emojipedia.org/objects/ "Names and meanings of hearts and symbol emojis")

❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🛗 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 ⚧ 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ⏏️ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ ♾ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔️ ☑️ 🔘 🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ 🟥 🟧 🟨 🟩 🟦 🟪 ⬛️ ⬜️ 🟫 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧

## [Non-Emoji Symbols](https://getsymbols.com/)

More [Unicode symbols, Hieroglpyhs and Pictographs to copy and paste](https://getsymbols.com/).

✢ ✣ ✤ ✥ ✦ ✧ ★ ☆ ✯ ✡︎ ✩ ✪ ✫ ✬ ✭ ✮ ✶ ✷ ✵ ✸ ✹ → ⇒ ⟹ ⇨ ⇾ ➾ ⇢ ☛ ☞ ➔ ➜ ➙ ➛ ➝ ➞ ♠︎ ♣︎ ♥︎ ♦︎ ♤ ♧ ♡ ♢ ♚ ♛ ♜ ♝ ♞ ♟ ♔ ♕ ♖ ♗ ♘ ♙ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ 🂠 ⚈ ⚉ ⚆ ⚇ 𓀀 𓀁 𓀂 𓀃 𓀄 𓀅 𓀆 𓀇 𓀈 𓀉 𓀊 𓀋 𓀌 𓀍 𓀎 𓀏 𓀐 𓀑 𓀒 𓀓 𓀔 𓀕 𓀖 𓀗 𓀘 𓀙 𓀚 𓀛 𓀜 𓀝

## [Flags](https://emojipedia.org/flags/ "Names and meanings of Flag Emojis")

Note: Windows has [limited flag emoji support](https://blog.getemoji.com/post/620280709025841152/how-to-use-flag-emojis-on-windows).

🏳️ 🏴 🏁 🚩 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🎌 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇰🇵 🇲🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇬🇸 🇸🇧 🇸🇴 🇿🇦 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇻🇮 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🇺🇳 🇺🇸 🇺🇾 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼

[😃💁 People](https://getemoji.com/assets/#smileys) • [🐻🌻 Animals](https://getemoji.com/assets/#animals-nature) • [🍔🍹 Food](https://getemoji.com/assets/#food-drink) • [🎷⚽️ Activities](https://getemoji.com/assets/#activities) • [🚘🌇 Travel](https://getemoji.com/assets/#travel-places) • [💡🎉 Objects](https://getemoji.com/assets/#objects) • [💖🔣 Symbols](https://getemoji.com/assets/#symbols) • [🎌🏳️‍🌈 Flags](https://getemoji.com/assets/#flags)

## [New Emojis](https://emojipedia.org/new/ "New 2019 Emojis")

Emojis from [Emoji 13.0](https://emojipedia.org/emoji-13.0/ "New 2020 Emojis"): Added in 2020.

🥲 🥸 🤌 🤌🏻 🤌🏼 🤌🏽 🤌🏾 🤌🏿 🫀 🫁 🥷 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🫂 🐈‍⬛ 🦬 🦣 🦫 🐻‍❄️ 🦤 🪶 🦭 🪲 🪳 🪰 🪱 🪴 🫐 🫒 🫑 🫓 🫔 🫕 🫖 🧋 🪨 🪵 🛖 🛻 🛼 🪄 🪅 🪆 🪡 🪢 🩴 🪖 🪗 🪘 🪙 🪃 🪚 🪛 🪝 🪜 🛗 🪞 🪟 🪠 🪤 🪣 🪥 🪦 🪧 🏳️‍⚧️

Emojis from [Emoji 13.1](https://emojipedia.org/emoji-13.1/ "New 2021 Emojis"): Added in 2021.

😮‍💨 😵‍💫 😶‍🌫️ ❤️‍🔥 ❤️‍🩹 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 💑🏻 💑🏼 💑🏽 💑🏾 💑🏿 💏🏻 💏🏼 💏🏽 💏🏾 💏🏿 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾