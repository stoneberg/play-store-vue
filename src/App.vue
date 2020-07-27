<template>
	<div id="app">
		<app-header /><!-- 레이아웃을 위한 정적 컴포넌트 삽입, 라우트와 상관 없음 -->
		<div class="container"><router-view /><!-- 라우터에 등록된 뷰가 여기에 보여짐 --></div>
		<notifications-list />
	</div>
</template>

<script>
import AppHeader from './components/AppHeader';
import NotificationsList from '@/components/NotificationsList';
export default {
	name: 'app',
	components: {
		AppHeader,
		NotificationsList,
	},
};
</script>
