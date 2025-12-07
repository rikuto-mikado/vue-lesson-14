# Vue Lesson 14 - Learning Notes

## What I Learned

### Understanding `key` vs `ref` in Vue

These are two different special attributes that serve completely different purposes:

| Feature | `key` | `ref` (Template Refs) |
|---------|-------|----------------------|
| **Purpose** | Helps Vue track element identity | Gets direct access to DOM elements |
| **Used with** | `v-for` list rendering | Any element you need to access |
| **Value type** | Unique identifier (string/number) | Reference name (string) |
| **Access in JS** | Not accessible | `this.$refs.refName` |
| **When to use** | Always with lists | When you need DOM manipulation |

#### Example: `key` for List Rendering

```vue
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>
```

**Why `key` matters:** Without `key`, Vue might reuse DOM elements incorrectly when the list changes, causing bugs.

#### Example: `ref` for DOM Access

```vue
<template>
  <input ref="myInput" type="text">
  <button @click="focusInput">Focus</button>
</template>

<script>
export default {
  methods: {
    focusInput() {
      this.$refs.myInput.focus();
    }
  }
}
</script>
```

**Why `ref` matters:** It provides a Vue way to access DOM elements without using `document.querySelector()`.

### Note: `ref` in Composition API (Vue 3)

In Vue 3's Composition API, `ref()` is also a function for creating reactive data:

```javascript
import { ref } from 'vue';

const count = ref(0);  // Creates reactive value
count.value++;         // Access with .value
```

This is different from template refs, but uses the same name!

## Challenges Faced

-

---

## Vue Directives & Syntax Quick Reference

### Common Directives

| Directive | Shorthand | Description | Example |
|-----------|-----------|-------------|---------|
| `v-bind` | `:` | Bind attribute to data | `:href="url"` or `v-bind:href="url"` |
| `v-on` | `@` | Attach event listener | `@click="handler"` or `v-on:click="handler"` |
| `v-model` | - | Two-way data binding | `v-model="message"` |
| `v-for` | - | Render list of items | `v-for="item in items" :key="item.id"` |
| `v-if` | - | Conditional rendering (removes from DOM) | `v-if="isVisible"` |
| `v-else-if` | - | Else-if condition | `v-else-if="type === 'B'"` |
| `v-else` | - | Else condition | `v-else` |
| `v-show` | - | Toggle visibility (CSS display) | `v-show="isVisible"` |
| `v-slot` | `#` | Define slots | `#header` or `v-slot:header` |

### Key Differences

**`v-if` vs `v-show`:**
- `v-if`: Completely removes/adds element from DOM (higher toggle cost)
- `v-show`: Only toggles CSS `display` property (always in DOM)

**`v-model` = `:value` + `@input`:**
```vue
<!-- These are equivalent -->
<input v-model="text">
<input :value="text" @input="text = $event.target.value">
```

### Mustache Syntax

| Syntax | Use Case | Example |
|--------|----------|---------|
| `{{ }}` | Text interpolation | `<p>{{ message }}</p>` |
| `{{ }}` | Expressions | `<p>{{ count + 1 }}</p>` |
| `{{ }}` | Method calls | `<p>{{ formatDate(date) }}</p>` |

**Note:** Mustache syntax doesn't work inside HTML attributes - use `v-bind` (`:`) instead!

