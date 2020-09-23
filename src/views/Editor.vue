<template>
  <div class="page-container">
    <quill-editor
      ref="quillEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    />
  </div>
</template>
<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import { quillEditor } from 'vue-quill-editor';

export default {
  name: 'Editor',
  components: {
    quillEditor,
  },
  data() {
    return {
      content: '<h3>I am quill editor</h3>',
      editorOption: {},
    };
  },
  computed: {
    editor() {
      return this.$refs.quillEditor.quill;
    },
  },
  mounted() {
    console.log('this is current quill instance object', this.editor);
  },
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur', quill);
    },
    onEditorFocus(quill) {
      console.log('editor focus', quill);
    },
    onEditorReady(quill) {
      console.log('editor ready', quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text);
      this.content = html;
    },
  },
};
</script>
<style lang="scss" scoped>
.page-container {
  box-sizing: border-box;
  margin: 8px 8px;
}

#editor {
  margin: auto;
  width: 80%;
}
</style>
