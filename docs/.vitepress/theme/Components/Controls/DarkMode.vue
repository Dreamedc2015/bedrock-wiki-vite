<template>
	<select name="theme" v-model="themeId">
		<option value="light">Light</option>
		<option value="dark">Dark</option>
		<option value="system">System</option>
	</select>
</template>

<script setup lang="ts">
import { useTheme } from '../../Composables/theme'

const { themeId } = useTheme()
</script>
