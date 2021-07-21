<template>
	<view class="main">
		<scroll-view :scroll-y="true" class="aside">
			左边
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti delectus error eaque. Ratione ipsam inventore alias placeat praesentium nostrum eos consequuntur quasi accusamus dolorum harum est sint dolore omnis eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut aspernatur veritatis quod illum molestias numquam unde accusantium incidunt eveniet quo expedita dolor velit nostrum enim mollitia suscipit necessitatibus. Debitis officia!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti delectus error eaque. Ratione ipsam inventore alias placeat praesentium nostrum eos consequuntur quasi accusamus dolorum harum est sint dolore omnis eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut aspernatur veritatis quod illum molestias numquam unde accusantium incidunt eveniet quo expedita dolor velit nostrum enim mollitia suscipit necessitatibus. Debitis officia!
			
		</scroll-view>
		<view class="content">
			右边
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aperiam reiciendis totam distinctio nostrum maiores culpa laborum unde officia asperiores qui cumque nam ad natus ea quis alias ut. Tempore?
		</view>
	</view>

</template>

<script>

</script>

<style>
	.main {
		display: flex;
		height: calc(100vh - 94px) ;
	}
	.aside{
		width: 30vw;
		/* height: 100%;
		overflow-y: scroll; */
		
	}
	.content{
		width: 70vw ;
	}
</style>
