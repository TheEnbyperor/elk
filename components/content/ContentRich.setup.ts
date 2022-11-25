import type { Emoji } from 'masto'
import { emojisArrayToObject } from '~/composables/utils'

defineOptions({
  name: 'ContentRich',
})

const props = defineProps<{
  content: string
  emojis: Emoji[]
}>()

const emojiObject = emojisArrayToObject(props.emojis || [])

export default () => h(
  'div',
  { class: 'rich-content' },
  contentToVNode(props.content, emojiObject),
)