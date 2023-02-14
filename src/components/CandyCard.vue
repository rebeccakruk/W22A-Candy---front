<template>
    <div>
    <v-table>
        <thread>
            <tr>
                <th class="text-left">
                    Candy
                </th>
                <th class="text-left">
                    ID
                </th>
                <!-- <th class="text-left">
                        Candy Owner
                      </th> -->
            </tr>
        </thread>
        <tbody>
            <tr v-for="sweet in candies" :key="sweet.id" :name="sweet.name" :id="sweet.id">
                <td>{{ sweet.name }}</td>
                <td>{{ sweet.id }}</td>
            </tr>
        </tbody>
    </v-table>
    </div>
</template>

<script>
    export default {
        name : "CandyCard",
        props: {
            "name" : String,
            "id" : Number
        }
    }
</script>

<style lang="sass" scoped>

</style>