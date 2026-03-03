<template>
    <main class="main">
        <div class="header-view">
            <h1 class="title">
                <slot name="title"></slot>
            </h1>
            <div class="diviser"></div>
        </div>

        <div>
            <slot name="body"></slot>
        </div>
    </main>
</template>

<style scoped>
.main {
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-left: 25%;
    margin-right: 25%;
}
.header-view {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.diviser {
  background: rgba(54, 54, 54, 0.7);
  height: 2px;
  flex: 1;
  border-radius: 1px;
  margin-left: 1rem;
}
</style>