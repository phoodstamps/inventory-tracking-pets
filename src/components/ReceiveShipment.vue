<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Add Shipment</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Vendor</label>
                    <input type="text" class="form-control" v-model="shipment.vendor" required>
                </div>
                <div class="form-group">
                    <label>Invoice Number</label>
                    <input type="email" class="form-control" v-model="shipment.invoice" required>
                </div>
                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="shipment.dateReceived" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                shipment: {
                   vendor: '',
                   invoice: '',
                   dateReceived: ''
                }
            }
        },
        methods: {
            handleSubmitForm() { }
        }
    }
</script>