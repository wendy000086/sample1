<template>
    <div class="model-box">
        <div class="card-top" :style="{ backgroundImage: 'url(' + items.Picture1 + ')' }">
            <h3>{{items.Name}}</h3>
            <h5>{{items.Zone}}</h5>
        </div>
        <ul class="card-bottom">
            <li class="time">{{items.Opentime}}</li>
            <li class="location">{{items.Add}}</li>
            <li class="phoneTag">
                <div class="phone">{{items.Tel}}</div>
                <div class="tag">{{items.Ticketinfo}}</div>
            </li>
        </ul>
    </div>
</template>




<script>


    export default {
        data: function () {
            return {

                 
            }
           
        },

       props: {
           items:{}
       },
        
       



    }
</script>