<template>
    <div v-bind:style="styles">
       <h1>Experimental app with DX, VueJS (I'am dynamic!!!)</h1>
   </div>
</template>
<script>
   export default {
        data: function() {
            return {
                styles: {
                    display: "flex",
                    alignContent: "center",
                    flexDirection: "column",
                    color: "#888",
                    width: "100%",
                    height: "250px",
                    backgroundImage: "url('/modules/js-extension/img/snow.jpg')",
                    backgroundPosition: "center",
                    backgroundPepeat: "no-repeat",
                    backgroundSize: "cover",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }
        }
   }
</script>