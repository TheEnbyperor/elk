<script setup lang="ts">
import type { mastodon } from 'masto'

const { status } = defineProps<{
  status: mastodon.v1.Status
}>()

const {
  toggle: _toggleTranslation,
  translation,
  enabled: isTranslationEnabled,
} = useTranslation(status)

let translating = $ref(false)
const toggleTranslation = async () => {
  translating = true
  try {
    await _toggleTranslation()
  }
  finally {
    translating = false
  }
}
</script>

<template>
  <div>
    <button
      v-if="isTranslationEnabled && status.language !== languageCode" pl-0 flex="~ center" gap-2
      :disabled="translating" disabled-bg-transparent btn-text @click="toggleTranslation"
    >
      <span v-if="translating" block animate-spin preserve-3d>
        <span block i-ri:loader-2-fill />
      </span>
      <div v-else i-ri:translate />
      {{ translation.visible ? $t('menu.show_untranslated') : $t('menu.translate_post') }}
    </button>
  </div>
</template>

<style scoped></style>
