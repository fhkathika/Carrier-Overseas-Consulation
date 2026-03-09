'use client'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

export default function Editor({name,value,onChange}) {
//     editor.isActive('bold')        // returns true if cursor is inside bold text
// editor.isActive('italic')      // true if italic
// editor.isActive('heading', { level: 2 })  // true if H2
// editor.isActive('bulletList')  // true if inside bullet list
// editor.isActive('orderedList') // true if inside numbered list
const editor = useEditor({
   extensions: [StarterKit],
  content: value || "<p></p>",
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange({
        target: {
          name: name,
          value: editor.getHTML(),
        },
      })
    },
  })

  if (!editor) return null

  return (
    <div className='w-full border p-2 rounded'>

        {/* Toolbar */}
        <div className="flex gap-2 p-2 border-b bg-gray-100">

<button
type="button"
onClick={() => editor.chain().focus().toggleBold().run()}
 className={`px-2 py-1 border rounded ${
      editor?.isActive('bold') ? 'bg-red-600 text-white' : ''
    }`}
>
Bold
</button>

<button
type="button"
onClick={() => editor.chain().focus().toggleItalic().run()}
  className={`px-2 py-1 border rounded ${
      editor?.isActive('italic') ? 'bg-red-600 text-white' : ''
    }`}
>
Italic
</button>

<button
type="button"
onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
 className={`px-2 py-1 border rounded ${
      editor?.isActive('heading', { level: 2 }) ? 'bg-red-600 text-white' : ''
    }`}
>
H2
</button>

<button
type="button"
onClick={() => editor.chain().focus().toggleBulletList().run()}
  className={`px-2 py-1 border rounded ${
      editor?.isActive('bulletList') ? 'bg-red-600 text-white' : ''
    }`}
>
Bullet
</button>

<button
type="button"
onClick={() => editor.chain().focus().toggleOrderedList().run()}
 className={`px-2 py-1 border rounded ${
      editor?.isActive('orderedList') ? 'bg-red-600 text-white' : ''
    }`}
>
Number List
</button>

</div>

        <div className='p-3 min-h-[150px]'>
 <EditorContent editor={editor}/>
        </div>
       
    </div>
  )
}
