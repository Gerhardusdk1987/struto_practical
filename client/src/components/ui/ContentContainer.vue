<template>
   <main class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 mb-4">
                <slot name="heading"><h1>Some Title</h1></slot>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
   </main>
</template>

<style scoped>
    main {
        overflow: hidden;
    }
    .container {
        background-color: #f2f2f2;
        border-radius: 15px;
        padding: 20px;
    }

    @media (max-width: 575px)  
    {
        main {
            padding: 0px 10px;
        }
    }
</style>